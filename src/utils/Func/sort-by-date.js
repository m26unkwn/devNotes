function formatDate(date) {
  const newDate =
    date.split("/")[1] + "/" + date.split("/")[0] + "/" + date.split("/")[2];

  const formattedDate = new Date(newDate);
  return formattedDate;
}

export default function sortByDate(notes, sortValue) {
  if (sortValue === "latest") {
    return notes.sort(
      (a, b) => formatDate(a.date).getTime() - formatDate(b.date).getTime(),
    );
  }
  if (sortByDate === "oldest") {
    return notes.sort(
      (a, b) => formatDate(b.date).getTime() - formatDate(a.date).getTime(),
    );
  }
  return notes;
}
