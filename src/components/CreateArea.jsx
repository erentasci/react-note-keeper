import React, { useState } from "react";
import {AiOutlinePlus} from "react-icons/ai";



function CreateArea({addNewNote}) {

  const [note, setNote] = useState({
    title:"",
    content:""
  });


  const handleChange = (e) => {
    const {name, value} = e.target;
    setNote({...note, [name]: value});
  }

  const onSubmit = (e) => {
    addNewNote(note);
    setNote({ title: "", content: "" });
    e.preventDefault();
  }


  return (
    <div>
      <form onSubmit={onSubmit} className="create-form">
        <input onChange={handleChange} name="title" value={note.title} placeholder="Title" />
        <textarea onChange={handleChange} name="content" value={note.content} placeholder="Take a note..." rows="3" />
        <button> 
              <h1  style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <AiOutlinePlus/>
              </h1>
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
