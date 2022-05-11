export function uniqueLabels(notes) {
  return [
    ...new Set(
      notes
        .map((label) => label.lables)
        .flat()
        .map((label) => label.label),
    ),
  ];
}
