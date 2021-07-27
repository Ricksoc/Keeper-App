/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function CreateArea(areaProps) {
  const [noteContent, setNoteContent] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNoteContent((prevContent) => ({ ...prevContent, [name]: value }));
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          areaProps.addNote(noteContent);
          setNoteContent({
            title: "",
            content: "",
          });
          event.preventDefault();
        }}
      >
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={noteContent.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={noteContent.content}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
