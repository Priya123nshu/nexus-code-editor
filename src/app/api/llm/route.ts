import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const history = messages.map((m: any) => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.content }],
    }));

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash", // correct model name
    });

    const result = await model.generateContent({
      contents: history,
      generationConfig: { temperature: 0.2 },
    });

    const text = result.response.text();

    return NextResponse.json({
      reply: { role: "assistant", content: text },
    });

  } catch (err: any) {
    console.error("LLM Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
