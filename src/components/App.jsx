import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import Notes from "../notes.js";

function App() {
  return (
    <div>
      <Header />
      <div>
        {Notes.map((noteInfo) => (
          <Note
            key={noteInfo.key}
            title={noteInfo.title}
            content={noteInfo.content}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
