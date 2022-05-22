/** @format */

import React from "react";
import { NoteCard } from "../../components";
import { useNote } from "../../context";

export const Archive = () => {
  const {
    allNotes: { archives },
  } = useNote();
  return (
    <div className='content-wrapper'>
      <div className='note-card-wrapper'>
        <div className='note-heading'>
          <h1>Archive</h1>
        </div>
        <div className='label-container flex flex-col flex-wrap flex-gap'>
          {archives.length > 0 ? (
            archives.map((note) => <NoteCard key={note._id} note={note} />)
          ) : (
            <h2>You don't have any note in archive.</h2>
          )}
        </div>
      </div>
    </div>
  );
};
