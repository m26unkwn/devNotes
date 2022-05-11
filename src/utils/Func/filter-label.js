export default function filterLabel(notes, label) {
  if (label !== "all") {
    return notes.filter((note) =>
      note.lables.map((label) => label.label).includes(label),
    );
  }
  return notes;
}
