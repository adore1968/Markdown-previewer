import React from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import "./index.css";

function App() {
  return (
    <div className="min-vh-100 bg-success parent">
      <section className="d-flex justify-content-center parent">
        <div>
          <Editor />
          <Preview />
        </div>
      </section>
    </div>
  );
}

export default App;
