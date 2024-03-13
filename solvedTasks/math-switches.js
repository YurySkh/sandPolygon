// Реализация матем. операций через switch/case

function mathOperation(arg1, arg2, operation) {
	switch (operation) {
		case '+': 
			return summingNumbers(arg1, arg2);
		case '-': 
			return subtractingNumbers(arg1, arg2);
		case '*': 
			return multiplicationNumbers(arg1, arg2);
		case '/': 
			return divisionNumbers(arg1, arg2)
		default: 
			throw new Error(`Нет такого значения ${operation}`);
	}
}

const summingNumbers = (a, b) => {
	return a + b;
}

const subtractingNumbers = (a, b) => {
	return a - b;
}

const multiplicationNumbers = (a, b) => {
	return a * b;
}

const divisionNumbers = (a, b) => {
	return a / b;
}

console.log(mathOperation(6, 3, '+'));
console.log(mathOperation(6, 3, '-'));
console.log(mathOperation(6, 3, '*'));
console.log(mathOperation(6, 3, '/'));
console.log(mathOperation(6, 3, 'dd3'));