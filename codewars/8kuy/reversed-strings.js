// DESCRIPTION:
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

//SOLUTION:
function solution(str){
	let reversed = str.split('').reverse().join('');
	return reversed;
 }