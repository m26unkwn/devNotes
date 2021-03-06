import React, { useState } from "react";
import { Chip } from "../Chips/Chip";
import "./noteCard.css";
import { useNote } from "../../context";
import { Modal } from "../Modal/Modal";
import { NoteEditor } from "../NoteEditor/NoteEditor";
import { useHandler } from "../../hooks/use-handler";
import { Button } from "./Button/Button";

export const NoteCard = ({ note }) => {
  const { updateNote, updateDispatch } = useNote();
  const [edit, setEdit] = useState(false);
  const [handlers] = useHandler();
  const { title, description, color, lables, priority, date } = note;

  const editNote = () => {
    updateDispatch({ type: "EDIT_NOTE_STATE", note: note });
    setEdit(true);
  };

  return (
    <div style={{ background: color }} className='note-card card-container'>
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
      {lables.length > 0 && (
        <div className='label-container flex flex-wrap'>
          {lables.slice(0, 4).map((label) => (
            <Chip key={label.id} chipStyle='chip-pd' label={label.label} />
          ))}
          {lables.length > 4 && (
            <Chip chipStyle='chip-pd' label={`+${lables.length - 4}`} />
          )}
        </div>
      )}
      <div className=' date-container flex jc-between'>
        {priority && (
          <div className='priority-container flex ai-center '>
            <Chip chipStyle='chip-pd' label={`${priority} Priority`} />
          </div>
        )}
        <div className='priority-container flex ai-center '>
          <Chip chipStyle='chip-pd' label={date} />
        </div>
      </div>
      <div className='card-action flex jc-around'>
        <Button handlers={handlers} note={note} editNote={editNote} />
      </div>
      {edit && (
        <Modal toggleModal={setEdit}>
          <NoteEditor
            addNote={handlers.editNote}
            noteState={updateNote}
            noteDispatch={updateDispatch}
          />
        </Modal>
      )}
    </div>
  );
};
