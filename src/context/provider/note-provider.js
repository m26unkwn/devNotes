import { createContext, useContext, useReducer } from "react";
import noteReducer from "../reducer/note-reducer";
import allNoteReducer from "../reducer/all-note-reducer";

const date = new Date().toLocaleString("en-In", "Asia-Kolkata").split(",")[0];

const initialNoteState = {
  title: "",
  description: "",
  color: "",
  pin: false,
  priority: "low",
  date: date,
  lables: [],
};
const initialAllNoteState = {
  notes: [],
  trash: [],
  archive: [],
};
const NoteContext = createContext({});

const NoteProvider = ({ children }) => {
  const [noteState, noteDispatch] = useReducer(noteReducer, initialNoteState);
  const [updateNote, updateDispatch] = useReducer(noteReducer, {});
  const [allNotes, allNoteDispatch] = useReducer(
    allNoteReducer,
    initialAllNoteState,
  );

  const value = {
    allNoteDispatch,
    noteDispatch,
    updateDispatch,
    updateNote,
    noteState,
    allNotes,
  };

  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
};

const useNote = () => useContext(NoteContext);
export { useNote, NoteProvider };
