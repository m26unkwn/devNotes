/** @format */

import React from "react";
import { useEffect } from "react";
import { NoteCard, NoteEditor } from "../../components";
import { useNote } from "../../context";
import "./home.css";

export const Home = () => {
  const {
    allNotes: { notes },
  } = useNote();
  console.log("allnotes", notes);
  return (
    <div>
      <NoteEditor />
      <div className='note-card-wrapper'>
        <div className='note-heading'>
          <h1>Notes</h1>
        </div>
        <div className='note-cards'>
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
