// DESCRIPTION:
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

//SOLUTION: 
function positiveSum(arr) {
	if (arr.length == 0) {
		return 0
	}
	const newArr = arr.filter(num => num >= 0);
	if (newArr.length == 0) {
		return 0
	}

	let result = 0;
	for (let num of newArr) {
		result += num
	}

	return result
}