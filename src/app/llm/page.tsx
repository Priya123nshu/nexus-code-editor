// "use client";

// import { useState, useRef, useEffect } from "react";
// import ReactMarkdown from "react-markdown";
// import rehypeHighlight from "rehype-highlight";
// import { useCodeEditorStore } from "@/store/useCodeEditorStore";


// // Highlight.js theme (you can change to github-dark.css, atom-one-dark.css, etc.)
// import "highlight.js/styles/atom-one-dark.css";

// export default function LLMPage() {
//   const [messages, setMessages] = useState([
//     {
//       role: "assistant",
//       content: "Hey! What do you want to build today?",
//     },
//   ]);

//   const [input, setInput] = useState("");
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(scrollToBottom, [messages]);

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const newMessages = [
//       ...messages,
//       { role: "user", content: input.trim() },
//     ];
//     setMessages(newMessages);
//     setInput("");

//     try {
//       const res = await fetch("/api/llm", {
//         method: "POST",
//         body: JSON.stringify({ messages: newMessages }),
//       });

//       const data = await res.json();

//       if (data.reply) {
//         setMessages((prev) => [...prev, data.reply]);
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="flex flex-col h-screen bg-black text-neutral-200">
//       {/* Header */}
//       <div className="p-4 text-xl font-semibold border-b border-neutral-800 bg-neutral-950">
//         Nexus LLM Assistant
//       </div>

//       {/* Chat Area */}
//       <div className="flex-1 overflow-y-auto p-4 space-y-4">
//         {messages.map((m, i) => (
//           <div key={i} className="whitespace-pre-wrap">
//             {/* Sender Label */}
//             <div
//               className={`font-semibold mb-1 ${
//                 m.role === "user" ? "text-green-400" : "text-blue-400"
//               }`}
//             >
//               {m.role === "user" ? "You" : "Nexus AI"}
//             </div>

//             {/* Message Box with Markdown Rendering */}
//             <div className="rounded-lg bg-neutral-900 p-4 border border-neutral-800 prose prose-invert max-w-none overflow-x-auto">
//               <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
//                 {m.content}
//               </ReactMarkdown>
//             </div>
//           </div>
//         ))}

//         <div ref={messagesEndRef} />
//       </div>

//       {/* Message Input */}
//       <div className="border-t border-neutral-800 p-4 bg-neutral-950 flex gap-2">
//         <input
//           className="flex-1 p-3 bg-neutral-900 border border-neutral-800 rounded-md focus:outline-none"
//           placeholder="Ask Nexus to write code, build an agent, debug your script..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//         />

//         <button
//           onClick={sendMessage}
//           className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }












"use client";

import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import { useCodeEditorStore } from "@/store/useCodeEditorStore";

// Highlight.js theme
import "highlight.js/styles/atom-one-dark.css";

export default function LLMPage() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hey! What do you want to build today?",
    },
  ]);

  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  // 🔥 Helper: extract all fenced code blocks (```lang ... ```)
  function extractCodeFromMarkdown(text: string) {
    const codeBlockRegex = /```[\s\S]*?```/g;
    const matches = text.match(codeBlockRegex);

    if (!matches) return "";

    return matches
      .map((block) =>
        block
          .replace(/^```[\w-]*\n?/, "") // remove ```lang
          .replace(/```$/, "") // remove ending ```
      )
      .join("\n\n");
  }

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { role: "user", content: input.trim() },
    ];
    setMessages(newMessages);
    setInput("");

    try {
      const res = await fetch("/api/llm", {
        method: "POST",
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await res.json();

      if (data.reply) {
        setMessages((prev) => [...prev, data.reply]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-black text-neutral-200">
      {/* Header */}
      <div className="p-4 text-xl font-semibold border-b border-neutral-800 bg-neutral-950">
        Nexus LLM Assistant
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((m, i) => (
          <div key={i} className="whitespace-pre-wrap">
            {/* Sender Label */}
            <div
              className={`font-semibold mb-1 ${
                m.role === "user" ? "text-green-400" : "text-blue-400"
              }`}
            >
              {m.role === "user" ? "You" : "Nexus AI"}
            </div>

            {/* Message Box with Markdown Rendering */}
            <div className="rounded-lg bg-neutral-900 p-4 border border-neutral-800 prose prose-invert max-w-none overflow-x-auto">
              <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                {m.content}
              </ReactMarkdown>
            </div>

            {/* ⚡ NEW FEATURE: Send to Editor Button (only for AI messages) */}
            {m.role === "assistant" && (
              <button
                onClick={() => {
                  const code = extractCodeFromMarkdown(m.content);

                  if (!code.trim()) {
                    alert("No code block found in the AI message.");
                    return;
                  }

                  // Replace editor content with AI-generated code
                  useCodeEditorStore.getState().setCode(code);

                  // OPTIONAL: force language (Python for LangGraph agents)
                  // useCodeEditorStore.getState().setLanguage("python");
                }}
                className="mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm"
              >
                ⚡ Send to Editor
              </button>
            )}
          </div>
        ))}

        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="border-t border-neutral-800 p-4 bg-neutral-950 flex gap-2">
        <input
          className="flex-1 p-3 bg-neutral-900 border border-neutral-800 rounded-md focus:outline-none"
          placeholder="Ask Nexus to write code, build an agent, debug your script..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md"
        >
          Send
        </button>
      </div>
    </div>
  );
}
