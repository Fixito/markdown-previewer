import React from "react";
import "./Previewer.css";

const Previewer = ({ markdown }) => {
  return (
    <div className="Previewer">
      <div className="toolbar">Previewer</div>
      <div id="preview" dangerouslySetInnerHTML={{ __html: markdown }}></div>
    </div>
  );
};

export default Previewer;
