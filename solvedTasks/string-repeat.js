// TASK: Repeat a string a specified number of times

//SOLUTION:
function repeatStr(n, s) {
	let sourceStr = "";
	for (let i = n; i > 0; i--) {
	  sourceStr += s;
	}
	return sourceStr;
 }
 
 console.log(repeatStr(6, "Dear")); //DearDearDearDearDearDear