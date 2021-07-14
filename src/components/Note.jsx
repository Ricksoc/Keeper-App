import React from "react";

function Note(noteProps) {
  return (
    <div className="note">
      <h1>{noteProps.title}</h1>
      <p>{noteProps.content}</p>
    </div>
  );
}

export default Note;
