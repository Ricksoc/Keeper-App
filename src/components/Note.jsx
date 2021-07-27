import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(noteProps) {
  function handleClick() {
    noteProps.deleteNote(noteProps.id);
  }

  return (
    <div className="note">
      <h1>{noteProps.title}</h1>
      <p>{noteProps.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
