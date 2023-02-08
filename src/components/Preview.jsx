import React from "react";
import { useSelector } from "react-redux";
import { marked } from "marked";

function Preview() {
  const editorText = useSelector((store) => store.markdownSlice.editorText);
  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">Preview</h1>

        <div
          id="preview"
          dangerouslySetInnerHTML={{
            __html: marked(editorText),
          }}
          className="container bg-white"
        ></div>
      </div>
    </div>
  );
}

export default Preview;
