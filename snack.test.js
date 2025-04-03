const { getInitials } = require("./snack");

//! Snack 1

test("La funzione getInitials restituisce le iniziali di un nome completo", () => {
  expect(getInitials("Mario Rossi")).toBe("M.R.");
});
