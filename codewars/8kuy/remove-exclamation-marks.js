// DESCRIPTION:
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

//SOLUTION:
function removeExclamationMarks(s) {
  return s
    .split("")
    .filter((item) => item !== "!")
    .join("");
}

removeExclamationMarks("Hello World!");
