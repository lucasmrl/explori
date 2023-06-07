function convertAndCapitalize(str) {
  // Replace underscores with spaces
  const stringWithSpaces = str.replace(/_/g, " ");

  // Capitalize the first letter of each word
  const capitalizedString = stringWithSpaces.replace(/\b\w/g, (match) =>
    match.toUpperCase()
  );

  return capitalizedString;
}

export { convertAndCapitalize };
