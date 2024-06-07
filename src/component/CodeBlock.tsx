import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import Editor from "react-simple-code-editor";
import "prismjs/themes/prism.css";
interface CodeProps {
  code: string;
  language: string;
}
const Code: React.FC<CodeProps> = ({ code, language }) => {
  const [codeText, setCodeText] = useState<string>(code);

  useEffect(() => {
    Prism.highlightAll();
  }, [codeText]);

  return (
    <div className="Code">
      <h2>Code Syntax Block ({language})</h2>
      <Editor
        value={codeText}
        onValueChange={setCodeText}
        highlight={(code) =>
          Prism.highlight(code, Prism.languages[language], language)
        }
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
          backgroundColor: "#f5f2f0",
          border: "1px solid #ddd",
          borderRadius: "5px",
          textAlign: "left",
        }}
      />
    </div>
  );
};
export default Code;
