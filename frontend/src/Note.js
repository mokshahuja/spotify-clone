import React from "react";
import "./Note.css";

const Note = ({ notes }) => {
  console.log('euwifhiuevnjfenvr',notes);
  return (
    <div className="note__body">
      <h2>{notes.content}</h2>
      <p>{notes.date}</p>
    </div>
  );
};

export default Note;
