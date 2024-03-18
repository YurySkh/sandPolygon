// DESCRIPTION: 
// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

//SOLUTION:
function correct(string) {
	let stringCharacterArray = string.split("");
	stringCharacterArray.forEach((symbol, index) => {
	  if (symbol === "5") { 
		 stringCharacterArray[index] = "S";
	  } else if (symbol === "0") {
		 stringCharacterArray[index] = "O";
	  } else if (symbol === "1") {
		 stringCharacterArray[index] = "I";
	  }
	});
 
	return stringCharacterArray.join('');
 }
 
 
 console.log(correct("51NGAP0RE")); // SINGAPORE