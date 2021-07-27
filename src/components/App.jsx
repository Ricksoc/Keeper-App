import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {
  const [keeperNotes, setKeeperNotes] = useState([]);

  function addNote(note) {
    setKeeperNotes((prevValue) => {
      return [...prevValue, note];
    });
  }

  function deleteNote(id) {
    setKeeperNotes((prevItems) => {
      return prevItems.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {keeperNotes.map((noteInfo, index) => (
        <Note
          key={index}
          id={index}
          title={noteInfo.title}
          content={noteInfo.content}
          deleteNote={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
