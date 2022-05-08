/** @format */

import React from "react";
import { NoteCard, NoteEditor } from "../../components";
import { useNote } from "../../context";
import { useHandler } from "../../hooks/use-handler";
import "./home.css";

export const Home = () => {
  const {
    noteState,
    allNotes: { notes },
    noteDispatch,
  } = useNote();
  const [handlers] = useHandler();
  console.log("allnotes", notes);
  return (
    <div>
      <NoteEditor
        addNote={handlers.addNote}
        noteState={noteState}
        noteDispatch={noteDispatch}
      />
      <div className='note-card-wrapper'>
        <div className='note-heading'>
          <h1>Notes</h1>
        </div>
        <div className='note-cards flex flex-wrap flex-gap'>
          {notes.length > 0 ? (
            notes.map((note) => <NoteCard key={note._id} note={note} />)
          ) : (
            <h1>You don't have any notes.</h1>
          )}
        </div>
      </div>
    </div>
  );
};
