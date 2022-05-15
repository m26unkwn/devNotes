import sortByDate from "../../utils/Func/sort-by-date";

export default function filterReducer(state, action) {
  switch (action.type) {
    case "LABEL":
      return { ...state, label: action.payload };
    case "SORT_BY_DATE":
      return { ...state, sortByDate: action.payload };
    case "PRIORITY":
      return { ...state, priority: action.payload };
    case "CLEAR_ALL":
      return {
        label: "all",
        priority: "all",
        sortByDate: "",
      };
  }
}
