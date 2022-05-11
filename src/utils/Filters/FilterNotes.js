import sortByDate from "../Func/sort-by-date";
import filterLabel from "../Func/filter-label";
import filterPriority from "../Func/filter-priority";

export default function filterNotes(notes, filters) {
  let newNotes = [...notes];
  let filteredNotes = filterLabel(newNotes, filters.label);
  filteredNotes = filterPriority(filteredNotes, filters.priority);
  filteredNotes = sortByDate(filteredNotes, filters.sortByDate);

  return filteredNotes;
}
