import React from "react";
import Code from "./component/CodeBlock";
import "./App.css";

function App() {
  const JSCode = `import React from "react";
    import ReactDOM from "react-dom";

    function App() {
    return (
      <h1>Hello world</h1>
    );
  }
  ReactDOM.render(<App />, document.getElementById("root"));
  `;

  const htmlCode = `<div>
    <h1> PrismJS Tutorial </h1>
    <p>
      Prism is a lightweight, extensible syntax highlighter, built with modern web standards in mind.
    </p>
  </div>
  `;
  return (
    <div className="App">
      <Code code={JSCode} language="javascript" />
      <Code code={htmlCode} language="html" />
    </div>
  );
}

export default App;
