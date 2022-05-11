/** @format */

import React from "react";
import { NoteCard } from "../../components";
import { useNote } from "../../context";

export const Trash = () => {
  const {
    allNotes: { trash },
  } = useNote();
  return (
    <div className='content-wrapper'>
      <div className='note-card-wrapper'>
        <div className='note-heading'>
          <h1>Trash</h1>
        </div>
        <div className='label-container flex flex-col flex-wrap flex-gap'>
          {trash.length > 0 ? (
            trash.map((note) => <NoteCard key={note._id} note={note} />)
          ) : (
            <h2>You don't have any note in Trash.</h2>
          )}
        </div>
      </div>
    </div>
  );
};
