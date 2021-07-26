import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import Notes from "../notes.js";
import CreateArea from "./CreateArea";

function App() {
  return (
    <div>
      <Header />
      <CreateArea />
        {Notes.map((noteInfo) => (
          <Note
            key={noteInfo.key}
            title={noteInfo.title}
            content={noteInfo.content}
          />
        ))}
      <Footer />
    </div>
  );
}

export default App;
