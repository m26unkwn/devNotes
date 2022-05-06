import { createContext, useContext, useReducer } from "react";
import noteReducer from "../reducer/note-reducer";
import allNoteReducer from "../reducer/all-note-reducer";

const initialNoteState = {
  title: "",
  description: "",
  color: "",
  lables: [],
};
const initialAllNoteState = {
  notes: [],
};
const NoteContext = createContext({});

const NoteProvider = ({ children }) => {
  const [noteState, noteDispatch] = useReducer(noteReducer, initialNoteState);
  const [allNotes, allNoteDispatch] = useReducer(
    allNoteReducer,
    initialAllNoteState,
  );

  const value = {
    allNoteDispatch,
    noteDispatch,
    noteState,
    allNotes,
  };

  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
};

const useNote = () => useContext(NoteContext);
export { useNote, NoteProvider };
