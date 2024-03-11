// Фун-я получения текущего дня (дни недели индексируются с Вс. от 0)
function getCurrentDay() {
	let getDay = new Date().getDay();
 
	switch (getDay) {
	  case 1:
		 return "Понедельник";
	  case 2:
		 return "Вторник";
	  case 3:
		 return "Среда";
	  case 4:
		return "Четверг";
	  case 5: 
		return "Пятница";
	  case 6: 
		return "Суббота";
	  case 0: 
		return "Воскресенье";
	}
 }
 
 let resultFunction = getCurrentDay();
 console.log(resultFunction);