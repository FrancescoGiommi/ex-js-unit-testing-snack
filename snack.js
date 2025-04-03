//! Snack 1
function getInitials(fullname) {
  const [name, surname] = fullname.split(" ");
  return `${name.charAt(0).toUpperCase()}.${surname.charAt(0).toUpperCase()}.`;
}

//! Snack 2
function createSlug(string) {
  if (!string) {
    throw new Error("Titolo non valido");
  }
  return string.toLowerCase().replaceAll(" ", "-");
}
module.exports = { getInitials, createSlug };
