import React from "react";
import { useNote } from "../../../context";
import { NoteCard } from "../../../components";
export const Label = ({ label }) => {
  const {
    allNotes: { notes },
  } = useNote();
  const filterNotes = notes.filter((note) =>
    note.lables.map((lable) => lable.label).includes(label),
  );
  return (
    <div className='label-card-wrapper'>
      <div className='note-heading'>
        <h2>{label}</h2>
      </div>
      <div className='note-cards flex flex-wrap flex-gap'>
        {filterNotes.map((note) => (
          <NoteCard key={note._id} note={note} />
        ))}
      </div>
    </div>
  );
};
