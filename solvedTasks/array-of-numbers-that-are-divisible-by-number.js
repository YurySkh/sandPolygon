// Task: Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

//sOLUTION: 
function divisibleBy(arrayOfNumbers, divisor){
	return arrayOfNumbers.filter(num => !(num % divisor))
}

console.log (divisibleBy([1, 2, 3], 3))