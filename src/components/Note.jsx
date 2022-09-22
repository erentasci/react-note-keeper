import React from "react";
import {AiOutlineDelete} from "react-icons/ai";




function Note({title, content, deleteNote, id}) {

  const handleClick = () => {
    deleteNote(id);
  }


  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button className="note" onClick={handleClick}>
              <h1>
                <AiOutlineDelete/>
              </h1>
      </button>
    </div>
  );
}

export default Note;
