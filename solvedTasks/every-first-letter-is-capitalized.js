// Функия, которая делает каждую первую букву слов заглавной

const str1 = 'lorem ipsum dolor'

const arr1 = str1.split(' ');

let result = arr1.map((word) => {
	let letters = [...word];
	letters[0] = letters[0].toUpperCase();
	return letters.join('');
});

result = result.join(' ');


console.log(result);
console.log(str1);
