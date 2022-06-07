import React from "react";
import Editor from "@monaco-editor/react";
import { emmetHTML } from "emmet-monaco-es";

export default function App() {
  return (
    <Editor
      height="400px"
      defaultLanguage="html"
      theme="vs-dark"
      beforeMount={(monaco) => {
        emmetHTML(monaco);
      }}
    />
  );
}