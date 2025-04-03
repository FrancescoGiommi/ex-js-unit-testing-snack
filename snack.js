function getInitials(fullname) {
  const [name, surname] = fullname.split(" ");
  return `${name.charAt(0).toUpperCase()}.${surname.charAt(0).toUpperCase()}.`;
}

module.exports = { getInitials };
