// Бесконечный цикл с условие и выходом и него

while (true) {
	let userInput = Number(prompt('Введит число от 0 до 23')); 
	if (userInput >=0 && userInput <= 23) {
		alert(`Благодарю, число ${userInput} принято!`);
		break;
	} else {
		alert(`Число ${userInput} вышло из указанного диапазона. Попробуйте снова!`)
	}
}