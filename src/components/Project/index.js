import React from "react";
import "./style.css";

function Project(props) {
  return (
    <div className="project text-center">
      {props.children}
    </div>
  );
}

export default Project;
