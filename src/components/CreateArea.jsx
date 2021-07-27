/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(areaProps) {
  const [noteContent, setNoteContent] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNoteContent((prevContent) => ({ ...prevContent, [name]: value }));
  }

  function submitNote(event) {
    areaProps.addNote(noteContent);
    setNoteContent({
      title: "",
      content: "",
    });
    event.preventDefault();
    setClicked(false);
  }

  const [clicked, setClicked] = useState(false);

  function textClicked() {
    setClicked(true);
  }

  return (
    <div>
      <form onSubmit={submitNote} className="create-note">
      {clicked &&
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={noteContent.title}
        />}
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={clicked ? 3 : 1}
          value={noteContent.content}
          onClick={textClicked}
        />
        <Zoom in={clicked && true}>
          <Fab type="submit" color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
