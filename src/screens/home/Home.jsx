/** @format */

import React from "react";
import { NoteCard, NoteEditor } from "../../components";
import { useFilter, useNote } from "../../context";
import { useHandler } from "../../hooks/use-handler";
import filterNotes from "../../utils/Filters/FilterNotes";
import { Filter } from "./filter/Filter";
import { ReactComponent as FilterIcon } from "../../assets/Filter.svg";
import "./home.css";
import { useState } from "react";
import { Modal } from "../../components";
import { MobileFitler } from "./filter/MobileFilter";

export const Home = () => {
  const {
    noteState,
    allNotes: { notes },
    noteDispatch,
  } = useNote();
  const { filterState } = useFilter();
  const [handlers] = useHandler();

  const [openFilter, setOpenFitler] = useState();

  const filterdNotes = filterNotes(notes, filterState);

  const otherNotes =
    filterdNotes.length > 0 ? filterdNotes.filter((note) => !note.pin) : [];
  const pinnedNotes =
    filterdNotes.length > 0 ? filterdNotes.filter((note) => note.pin) : [];

  const filterOpen = () => {
    setOpenFitler((prev) => !prev);
  };

  return (
    <div className='content-wrapper'>
      <NoteEditor
        addNote={handlers.addNote}
        noteState={noteState}
        noteDispatch={noteDispatch}
      />
      <Filter />
      <div className='mobile-filter-button flex jc-center'>
        <button
          onClick={filterOpen}
          style={{ width: "44px" }}
          className='btn btn-float'>
          <FilterIcon storke='white' />
        </button>
      </div>
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
      {openFilter && (
        <Modal toggleModal={setOpenFitler}>
          <MobileFitler />
        </Modal>
      )}
    </div>
  );
};
