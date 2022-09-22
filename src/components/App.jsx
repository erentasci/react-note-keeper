import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";



function App() {

  const [notes, setNotes] = useState([]);


  const addNewNote = (newNote) => {
    setNotes([...notes, newNote]);
  }

  const deleteNote = (id) => {
    let filteredArray = notes.filter( (note,index) => index !== id );
    setNotes(filteredArray);
  }

  return (
    <div>
      <Header />
          <CreateArea addNewNote={addNewNote} />
          {
            notes.map( (noteItem,index) => {
              return (
                <Note key={index}  deleteNote={deleteNote} id={index}title={noteItem.title} content={noteItem.content} />
              )
            } )
          }
      <Footer />
    </div>
  );
}

export default App;
