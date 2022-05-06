import React from "react";

export const NoteCard = ({ note }) => {
  console.log("note", { note });
  const { title, description, color, tag, priority } = note;
  return (
    <div style={{ background: color }} className='card-container'>
      <div className='card-head'>
        <b>{title}</b>
      </div>
      <div className='card-divider' />
      <div className='card-content'>
        <p>{description}</p>
      </div>
    </div>
  );
};
