// Фун-я генерации пароля

const characterSet = 'abcdefghijklmnopqrstyvwxyz1234567890!ABCDIFGHIJKLMNOPQRSTUVWXYZ';
let createdPassword ='';

/**
 * Фун-я возвращае случайное чилос между min (включ.) и max (НЕ влкюч.) значением из списка символов.
 * @param {number} min минимальное знач.
 * @param {number} max максиматльное знач.
 * @returns {number} возрат случайного числа
 */
function getRandomInt (min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Фун-я генерит случайный пароль
 * @param {number} passwordLength Длина пароля (задается пользователем)
 * @return {void} 
 */
function passwordGeneration(passwordLength) {
	let symbolPosition = getRandomInt (0, 63);
	createdPassword += characterSet.charAt(symbolPosition);
	passwordLength--;
	if (passwordLength !== 0) {
		passwordGeneration(passwordLength);
	}
}

/**
 * Фун-я спрашивает длину пароля
 * @returns {number}
 */
function askPassLength() {
		return parseInt(prompt('Какой длинны пароь вам необходмо?'));
} 

passwordGeneration(askPassLength());
alert(`Ваш пароль: ${createdPassword}`);