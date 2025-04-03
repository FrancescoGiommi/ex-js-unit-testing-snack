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

//! Snack 3
function average() {
  const numbers = [1, 2, 3, 4, 5];
  const sum = numbers.reduce((acc, num) => {
    return acc + num;
  }, 0);
  const avg = sum / numbers.length;
  return avg;
}

//! Snack 5
function isPalindrome(world) {
  const divideWorld = world.split(" ");
  const reverseWorld = divideWorld.reverse();
  const joinWorld = reverseWorld.join("");
  return world === joinWorld;
}
module.exports = { getInitials, createSlug, average, isPalindrome };
