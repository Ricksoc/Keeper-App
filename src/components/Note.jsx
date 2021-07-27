import React from "react";

function Note(noteProps) {
  function handleClick() {
    noteProps.deleteNote(noteProps.id);
  }

  return (
    <div className="note">
      <h1>{noteProps.title}</h1>
      <p>{noteProps.content}</p>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}

export default Note;
