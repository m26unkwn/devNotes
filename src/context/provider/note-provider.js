import { createContext, useContext, useReducer } from "react";
import noteReducer from "../reducer/note-reducer";

const initialNoteState = {
  title: "",
  description: "",
  color: "",
  lables: [],
};
const NoteContext = createContext({});

const NoteProvider = ({ children }) => {
  const [noteState, noteDispatch] = useReducer(noteReducer, initialNoteState);

  return (
    <NoteContext.Provider value={{ noteState, noteDispatch }}>
      {children}
    </NoteContext.Provider>
  );
};

const useNote = () => useContext(NoteContext);
export { useNote, NoteProvider };
