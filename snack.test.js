const { getInitials, createSlug } = require("./snack");

//! Snack 1

test("La funzione getInitials restituisce le iniziali di un nome completo", () => {
  expect(getInitials("Mario Rossi")).toBe("M.R.");
});

//! Snack 2
test("La funzione createSlug restituisce una stringa in lowercase.", () => {
  expect(createSlug("Marco Con La Maiuscola")).toBe("marco-con-la-maiuscola");
});
