import React from "react";
import { Chip } from "../Chips/Chip";
import { Archive, Delete, Edit } from "../../assets";
import "./noteCard.css";

export const NoteCard = ({ note }) => {
  console.log("note", { note });
  const { title, description, color, lables, priority } = note;

  return (
    <div style={{ background: color }} className='card-container'>
      {title && (
        <div className='card-head'>
          <b>{title}</b>
        </div>
      )}
      {description && (
        <div className='card-content'>
          <p>{description}</p>
        </div>
      )}
      <div className='label-container flex flex-wrap'>
        {lables.slice(0, 4).map((label) => (
          <Chip key={label.id} chipStyle='chip-pd' label={label.label} />
        ))}
        {lables.length > 4 && (
          <Chip chipStyle='chip-pd' label={`+${lables.length - 4}`} />
        )}
      </div>
      <div className='card-action flex jc-center'>
        <button className='btn btn-icon'>
          <img src={Delete} alt='add to trash' />
        </button>
        <button className='btn btn-icon'>
          <img src={Archive} alt='add to trash' />
        </button>
        <button className='btn btn-icon'>
          <img src={Edit} alt='add to trash' />
        </button>
      </div>
    </div>
  );
};
