/** @format */

import React from "react";
import { NoteCard, NoteEditor } from "../../components";
import { useFilter, useNote } from "../../context";
import { useHandler } from "../../hooks/use-handler";
import filterNotes from "../../utils/Filters/FilterNotes";
import { Filter } from "./filter/Filter";
import "./home.css";

export const Home = () => {
  const {
    noteState,
    allNotes: { notes },
    noteDispatch,
  } = useNote();
  const { filterState } = useFilter();
  const [handlers] = useHandler();
  console.log({ notes });

  const filterdNotes = filterNotes(notes, filterState);

  const otherNotes =
    filterdNotes.length > 0 ? filterdNotes.filter((note) => !note.pin) : [];
  const pinnedNotes =
    filterdNotes.length > 0 ? filterdNotes.filter((note) => note.pin) : [];
  console.log({ otherNotes });

  //console.log("allnotes", notes);
  return (
    <div className='content-wrapper'>
      <NoteEditor
        addNote={handlers.addNote}
        noteState={noteState}
        noteDispatch={noteDispatch}
      />
      <Filter />
      {filterdNotes.length > 0 && (
        <div className=''>
          {pinnedNotes.length > 0 && (
            <div className='note-card-wrapper'>
              <div className='note-heading'>
                <h3>Pinned</h3>
              </div>
              <div className='note-cards flex flex-wrap flex-gap'>
                {pinnedNotes.map((note) => (
                  <NoteCard key={note._id} note={note} />
                ))}
              </div>
            </div>
          )}
          {otherNotes.length > 0 && (
            <div className='note-card-wrapper'>
              <div className='note-heading'>
                <h3>Others</h3>
              </div>
              <div className='note-cards flex flex-wrap flex-gap'>
                {otherNotes.map((note) => (
                  <NoteCard key={note._id} note={note} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
