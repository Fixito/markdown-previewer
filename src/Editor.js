import React from "react";
import "./Editor.css";

function Editor({ placeholder, handleChange }) {
  return (
    <div className="Editor">
      <div className="toolbar">Editor</div>
      <textarea
        name="editor"
        id="editor"
        cols="30"
        rows="10"
        value={placeholder}
        onChange={handleChange}
      ></textarea>
    </div>
  );
}

export default Editor;
