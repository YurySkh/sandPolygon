// DESCRIPTION:
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// ✔ SOLUTION: 
function grow(arr) {
	let multiplicationResult = 1;
	arr.forEach(num => {
		multiplicationResult = multiplicationResult * num;
	});
	
	return multiplicationResult;
}

console.log(grow([1, 4, 6, 2, 1, 0]))