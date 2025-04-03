const { getInitials, createSlug, average, isPalindrome } = require("./snack");

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

//! Snack 4
test("La funzione createSlug sostituisce gli spazi con -.", () => {
  expect(createSlug("Questa è una Stringa")).toBe("questa-è-una-stringa");
});

//! Snack 5
test("La funzione isPalindrome verifica se una stringa è un palindromo", () => {
  expect(isPalindrome("anna")).toBeTruthy();
});

//! Snack 6
test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido", () => {
  expect(() => createSlug("")).toThrow("Titolo non valido");
  expect(() => createSlug(null)).toThrow("Titolo non valido");
});

//! Snack 7
test("La funzione findPostById restituisce il post corretto dato l'array di post e l'id", () => {
  expect(findPostById(posts, 1)).toEqual({
    id: 1,
    title: "Post 1",
    slug: "Questo è il primo post",
  });

  expect(findPostById(posts, 4)).toBe(null);
  expect(() => findPostById([50, 40, 30], 2)).toThrow(
    "array posts non è nel formato corretto"
  );
});
