//First Letter Caps and rest to lowercase
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

export { capitalizeFirstLetter };
