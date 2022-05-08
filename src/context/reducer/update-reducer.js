export default function updateReducer(state, action) {
  switch (action.type) {
    case "ADD_TITLE":
      return { ...state, title: action.title };
    case "ADD_DESCRIPTION":
      return { ...state, description: action.description };
    case "ADD_COLOR":
      return { ...state, color: action.color };
    case "ADD_LABEL":
      return { ...state, lables: [...state.lables, action.label] };
    case "REMOVE_LABEL":
      const filteredLabel = state.lables.filter(
        (lable) => lable.id !== action.id,
      );
      return { ...state, lables: [...filteredLabel] };
    case "ADD_PRIORITY":
      return { ...state, priority: action.priority };
    case "EDIT_NOTE_STATE":
      return action.note;
    case "RESET_NOTE":
      return {
        title: "",
        description: "",
        color: "",
        lables: [],
      };
    default:
      return state;
  }
}
