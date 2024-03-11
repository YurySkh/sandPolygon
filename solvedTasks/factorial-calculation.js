// Фун-я рекурсивного расчета факториала

const factorialCalculation = (n) => {
	if (n === 1) {
	  return n;
	} else {
	  return n * factorialCalculation(n - 1);
	}
 }
 
 const factorialResult = factorialCalculation (4);
 console.log(factorialResult);