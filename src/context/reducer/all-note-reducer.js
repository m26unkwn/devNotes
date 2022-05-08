export default function allNoteReducer(state, action) {
  switch (action.type) {
    case "ADD_NOTE_INTO_NOTES":
      return { ...state, notes: action.payload };
    default:
      return state;
  }
}
