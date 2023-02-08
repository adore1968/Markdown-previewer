import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setEditorText } from "../features/markdown/markdownSlice";
import "../index.css";

function Editor() {
  const editorText = useSelector((store) => store.markdownSlice.editorText);
  const dispatch = useDispatch();

  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex justify-content-center my-4 card col-8">
        <div id="editor" className="bg-white card-body">
          <div>
            <h1 className="card-title">Editor</h1>
          </div>
          <input
            type="textarea"
            value={editorText}
            onChange={(e) => dispatch(setEditorText(e.target.value))}
            className="w-100 card-text"
          />
        </div>
      </div>
    </div>
  );
}

export default Editor;
