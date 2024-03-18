// DESCRIPTION: Example of inheritance in ES5

//EXAMPLE:
function Person (name, age, gender) {
	this.name = name;
	this.age = age;
	this.gender = gender
}

Person.prototype.incrementAge = function () {
	this.age += 1;
}

function Personal (name, age, gender, location, hobby) {
	Person.call(this, name, age, gender);
	this.location = location;
	this.hobby = hobby
}

Personal.prototype = Object.create(Person.prototype);
Personal.prototype.constructor = Personal;

Personal.prototype.sayName = function() {
	console.log(`My name is ${this.name}`);
}

const personalOne = new Personal('Tom', 44, 'male', 'London', 'swimmer');


console.log(personalOne);

personalOne.incrementAge();
personalOne.sayName();
