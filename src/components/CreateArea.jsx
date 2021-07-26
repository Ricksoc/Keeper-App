import React from "react";

function CreateArea(areaProps) {


  return (
    <div>
      <form onSubmit={(event) => {
          areaProps.addNote(event)
          event.preventDefault();
      }}>
        <input name="title" placeholder="Title" />
        <textarea name="content" placeholder="Take a note..." rows="3" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
