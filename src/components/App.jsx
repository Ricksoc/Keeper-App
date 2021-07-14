import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import Notes from "../notes.js";

function createNote(props) {
  return <Note key={props.key} title={props.title} content={props.content} />;
}

function App() {
  return (
    <div>
      <Header />
      <div>{Notes.map(createNote)}</div>
      <Footer />
    </div>
  );
}

export default App;
