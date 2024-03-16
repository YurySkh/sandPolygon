// DESCRIPTION:
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

//SOLUTION:
function removeEveryOther(arr) { 
	let counter = 0;
	const newArr = arr.filter((item) => {
    for ( ; counter < arr.length; ) {
      if (!(counter % 2)) {
			counter++
        return true;
      } else {
			counter++
			return false;
		}
    }
  });

  return newArr;
}