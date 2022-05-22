export default function allNoteReducer(state, action) {
  switch (action.type) {
    case "ADD_NOTE_INTO_NOTES":
      return { ...state, notes: action.payload };
    case "ADD_NOTE_INTO_ARCHIVE":
      return {
        ...state,
        notes: action.payload.notes,
        archives: action.payload.archives,
      };

    case "ADD_NOTE_INTO_TRASH":
      return {
        ...state,
        notes: action.payload.notes,
        trash: action.payload.trash,
      };
    case "ADD_ALL_DATA":
      return action.payload;
    case "CLEAR_ALL_DATA_FROM_STATE":
      return {
        notes: [],
        trash: [],
        archives: [],
      };
    default:
      return state;
  }
}
