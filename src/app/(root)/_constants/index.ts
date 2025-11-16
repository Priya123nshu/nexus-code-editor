// ----------------------------
// IMPORTS
// ----------------------------
import * as monaco from "monaco-editor";
import { Theme } from "../../../types";

// ----------------------------
// Language Config Typing
// ----------------------------
type LanguageConfig = Record<
  string,
  {
    id: string;
    label: string;
    logoPath: string;
    pistonRuntime: { language: string; version: string };
    monacoLanguage: string;
    defaultCode: string;
  }
>;

// ----------------------------
// Monaco Theme Typings
// ----------------------------
type ThemeRule = {
  token: string;
  foreground: string;
};

type ThemeDefinition = {
  base: "vs" | "vs-dark" | "hc-black" | "hc-light";
  inherit: boolean;
  rules: ThemeRule[];
  colors: Record<string, string>;
};

// ----------------------------
// LANGUAGE CONFIG
// ----------------------------
export const LANGUAGE_CONFIG: LanguageConfig = {
  javascript: {
    id: "javascript",
    label: "JavaScript",
    logoPath: "/javascript.png",
    pistonRuntime: { language: "javascript", version: "18.15.0" },
    monacoLanguage: "javascript",
    defaultCode: `// JavaScript Playground
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(n => n * n);
console.log("Original:", numbers);
console.log("Squares:", squares);
const even = numbers.filter(n => n % 2 === 0);
console.log("Even:", even);
console.log("Sum:", numbers.reduce((a,b)=>a+b,0));`,
  },

  typescript: {
    id: "typescript",
    label: "TypeScript",
    logoPath: "/typescript.png",
    pistonRuntime: { language: "typescript", version: "5.0.3" },
    monacoLanguage: "typescript",
    defaultCode: `// TypeScript Playground
class MathOps {
  constructor(public nums: number[]) {}
  squares() { return this.nums.map(n => n*n); }
  even() { return this.nums.filter(n => n % 2 === 0); }
  sum() { return this.nums.reduce((a,b)=>a+b,0); }
}

const m = new MathOps([1,2,3,4,5]);
console.log(m.squares(), m.even(), m.sum());`,
  },

  python: {
    id: "python",
    label: "Python",
    logoPath: "/python.png",
    pistonRuntime: { language: "python", version: "3.10.0" },
    monacoLanguage: "python",
    defaultCode: `nums = [1,2,3,4,5]
squares = [n*n for n in nums]
print("Squares:", squares)
print("Even:", [n for n in nums if n%2==0])
print("Sum:", sum(nums))`,
  },

  java: {
    id: "java",
    label: "Java",
    logoPath: "/java.png",
    pistonRuntime: { language: "java", version: "15.0.2" },
    monacoLanguage: "java",
    defaultCode: `public class Main {
  public static void main(String[] args) {
    int[] nums = {1,2,3,4,5};
    for(int n : nums) System.out.print(n+" ");
  }
}`,
  },

  go: {
    id: "go",
    label: "Go",
    logoPath: "/go.png",
    pistonRuntime: { language: "go", version: "1.16.2" },
    monacoLanguage: "go",
    defaultCode: `package main
import "fmt"
func main(){
  fmt.Println("Go Playground!")
}`,
  },

  rust: {
    id: "rust",
    label: "Rust",
    logoPath: "/rust.png",
    pistonRuntime: { language: "rust", version: "1.68.2" },
    monacoLanguage: "rust",
    defaultCode: `fn main() {
    println!("Rust Playground!");
}`,
  },

  cpp: {
    id: "cpp",
    label: "C++",
    logoPath: "/cpp.png",
    pistonRuntime: { language: "cpp", version: "10.2.0" },
    monacoLanguage: "cpp",
    defaultCode: `#include <iostream>
int main(){ std::cout << "C++ Playground!"; }`,
  },

  csharp: {
    id: "csharp",
    label: "C#",
    logoPath: "/csharp.png",
    pistonRuntime: { language: "csharp", version: "6.12.0" },
    monacoLanguage: "csharp",
    defaultCode: `using System;
class Program {
  static void Main(){
    Console.WriteLine("C# Playground!");
  }
}`,
  },

  ruby: {
    id: "ruby",
    label: "Ruby",
    logoPath: "/ruby.png",
    pistonRuntime: { language: "ruby", version: "3.0.1" },
    monacoLanguage: "ruby",
    defaultCode: `puts "Ruby Playground!"`,
  },

  swift: {
    id: "swift",
    label: "Swift",
    logoPath: "/swift.png",
    pistonRuntime: { language: "swift", version: "5.3.3" },
    monacoLanguage: "swift",
    defaultCode: `print("Swift Playground!")`,
  },
};

// ----------------------------
// UI Theme Selector List
// ----------------------------
export const THEMES: Theme[] = [
  { id: "vs-dark", label: "VS Dark", color: "#1e1e1e" },
  { id: "vs-light", label: "VS Light", color: "#f5f5f5" },
  { id: "github-dark", label: "GitHub Dark", color: "#0d1117" },
  { id: "monokai", label: "Monokai", color: "#272822" },
  { id: "solarized-dark", label: "Solarized Dark", color: "#002b36" },
];

// ----------------------------
// Monaco Theme Definitions (FIXED BASE = "vs-dark")
// ----------------------------
export const THEME_DEFINITONS: Record<string, ThemeDefinition> = {
  "github-dark": {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "6e7681" },
      { token: "string", foreground: "a5d6ff" },
      { token: "keyword", foreground: "ff7b72" },
      { token: "number", foreground: "79c0ff" },
      { token: "type", foreground: "ffa657" },
    ],
    colors: {
      "editor.background": "#0d1117",
      "editor.foreground": "#c9d1d9",
      "editor.lineHighlightBackground": "#161b22",
      "editor.selectionBackground": "#264f78",
    },
  },

  monokai: {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "75715E" },
      { token: "string", foreground: "E6DB74" },
      { token: "keyword", foreground: "F92672" },
      { token: "number", foreground: "AE81FF" },
    ],
    colors: {
      "editor.background": "#272822",
      "editor.foreground": "#F8F8F2",
    },
  },

  "solarized-dark": {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "586e75" },
      { token: "string", foreground: "2aa198" },
      { token: "keyword", foreground: "859900" },
    ],
    colors: {
      "editor.background": "#002b36",
      "editor.foreground": "#839496",
    },
  },
};

// ----------------------------
// Apply Themes to Monaco
// ----------------------------
export const defineMonacoThemes = (monacoInstance: typeof monaco) => {
  Object.entries(THEME_DEFINITONS).forEach(
    ([themeName, themeData]: [string, ThemeDefinition]) => {
      monacoInstance.editor.defineTheme(themeName, {
        base: themeData.base,
        inherit: themeData.inherit,
        rules: themeData.rules,
        colors: themeData.colors,
      });
    }
  );
};
