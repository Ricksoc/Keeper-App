import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";


function App() {
  const [keeperNotes, setKeeperNotes] = useState([{
    title: "First title",
    content: "This is some content"
  }]);

  function addNote(e) {
    setKeeperNotes((prevValue) => {
      return (
  [...prevValue, {
    title: e.target.title.value,
    content: e.target.content.value
  }])
})
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
        {keeperNotes.map((noteInfo, index) => (
          <Note
            key={index}
            title={noteInfo.title}
            content={noteInfo.content}
          />
        ))}
      <Footer />
    </div>
  );
}

export default App;
