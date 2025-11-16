// import * as monaco from "monaco-editor";

// // FIX: replace the react wrapper type with the real editor instance type
// export type Monaco = monaco.editor.IStandaloneCodeEditor;

// import { Id } from "../../convex/_generated/dataModel";

// export interface Theme {
//   id: string;
//   label: string;
//   color: string;
// }

// export interface Language {
//   id: string;
//   label: string;
//   logoPath: string;
//   monacoLanguage: string;
//   defaultCode: string;
//   pistonRuntime: LanguageRuntime;
// }

// export interface LanguageRuntime {
//   language: string;
//   version: string;
// }

// export interface ExecuteCodeResponse {
//   compile?: {
//     output: string;
//   };
//   run?: {
//     output: string;
//     stderr: string;
//   };
// }

// export interface ExecutionResult {
//   code: string;
//   output: string;
//   error: string | null;
// }

// export interface CodeEditorState {
//   language: string;
//   output: string;
//   isRunning: boolean;
//   error: string | null;
//   theme: string;
//   fontSize: number;
//   editor: Monaco | null;
//   executionResult: ExecutionResult | null;

//   setEditor: (editor: Monaco) => void;
//   getCode: () => string;
//   setLanguage: (language: string) => void;
//   setTheme: (theme: string) => void;
//   setFontSize: (fontSize: number) => void;
//   runCode: () => Promise<void>;
// }

// export interface Snippet {
//   _id: Id<"snippets">;
//   _creationTime: number;
//   userId: string;
//   language: string;
//   code: string;
//   title: string;
//   userName: string;
// }






import * as monaco from "monaco-editor";

// FIX: Real monaco editor instance type
export type Monaco = monaco.editor.IStandaloneCodeEditor;

import { Id } from "../../convex/_generated/dataModel";

export interface Theme {
  id: string;
  label: string;
  color: string;
}

export interface Language {
  id: string;
  label: string;
  logoPath: string;
  monacoLanguage: string;
  defaultCode: string;
  pistonRuntime: LanguageRuntime;
}

export interface LanguageRuntime {
  language: string;
  version: string;
}

export interface ExecuteCodeResponse {
  compile?: {
    output: string;
  };
  run?: {
    output: string;
    stderr: string;
  };
}

export interface ExecutionResult {
  code: string;
  output: string;
  error: string | null;
}

export interface CodeEditorState {
  language: string;
  output: string;
  isRunning: boolean;
  error: string | null;
  theme: string;
  fontSize: number;
  editor: Monaco | null;
  executionResult: ExecutionResult | null;

  // Editor Functions
  setEditor: (editor: Monaco) => void;
  getCode: () => string;

  // ⭐ REQUIRED FOR LLM / AI AUTOFILL
  setCode: (value: string) => void;

  // Settings
  setLanguage: (language: string) => void;
  setTheme: (theme: string) => void;
  setFontSize: (fontSize: number) => void;

  // Run code
  runCode: () => Promise<void>;
}

export interface Snippet {
  _id: Id<"snippets">;
  _creationTime: number;
  userId: string;
  language: string;
  code: string;
  title: string;
  userName: string;
}
