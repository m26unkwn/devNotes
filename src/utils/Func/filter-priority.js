export default function filterPriority(notes, priority) {
  if (priority !== "all") {
    return notes.filter((note) => note.priority === priority);
  }
  return notes;
}
