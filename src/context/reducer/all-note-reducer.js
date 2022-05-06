export default function allNoteReducer(state, action) {
  switch (action.type) {
    case "ADD_NOTE_INTO_NOTES":
      console.log("data into payload", action.payload);
      return { ...state, notes: action.payload };
  }
}
