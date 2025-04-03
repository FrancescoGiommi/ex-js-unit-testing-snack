const { getInitials, createSlug, average } = require("./snack");

//! Snack 1

test("La funzione getInitials restituisce le iniziali di un nome completo", () => {
  expect(getInitials("Mario Rossi")).toBe("M.R.");
});

//! Snack 2
test("La funzione createSlug restituisce una stringa in lowercase.", () => {
  expect(createSlug("Marco Con La Maiuscola")).toBe("marco-con-la-maiuscola");
});

//! Snack 3
test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
  expect(average([1, 2, 3, 4, 5])).toBe(3);
});
