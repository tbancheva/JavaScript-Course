
/*Create a Person Constructor with following fields:
	name: string
	age: numbers
	greet: function, which prints out 'Hi, I'm ${this.name} and I'm ${this.age} years old'

Create a Developer Constructor with following fields:
	name: string
	age: numbers
	skillset: array of a developer skillsets

Create a Manager Constructor with following fields:
	name: string
	age: numbers
	managees: array of managee developers

The Developer and Manager objects should inherit from Person the greet method.
Overwrite the greet() method for Developer and Manager objects, such that the same code execution as given in the previous template will produce next output:

Hi, I'm Maria Popova and I'm 23 years old
  I know Python,Machine Learning

Hi, I'm Petar Petrov and I'm 19 years old
  I know JavaScript,Angular,React,Vue

Hi, I'm Bill Gates and I'm 43 years old
    I manage Maria Popova,Petar Petrov,
*/


// Person constructor
let Person = function(name, age){
  this.name = name;
  this.age = age;
}
// Person methods
Person.prototype.greet = function(){
	console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
}

// Manager constructor
let Manager = function(name, age, managees){
  this.managees = managees;
  Person.apply(this, [name, age]);
}
// Manager objects should inherit all methods from Person:
Manager.prototype.__proto__ = Person.prototype;
Manager.prototype.greet = function(){
	console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
	let str = "";
	for(let i = 0; i <this.managees.length; i++){
		str += this.managees[i].name + ', ';
	}
	console.log(`I manage ` + str);
}

// Developer constructor
let Developer = function(name, age, skillset){
  this.skillset = skillset;
  Person.apply(this, [name, age]);
}
// Developer objects should inherit all methods from Person:
Developer.prototype.__proto__ = Person.prototype;
Developer.prototype.greet = function(){
	console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
	console.log(`I know ${this.skillset}`);
}

// Developer instance
let maria = new Developer('Maria Popova', 23, ['Python', 'Machine Learning']);
let pesho = new Developer('Petar Petrov', 19, ['JavaScript', 'Angular', 'React', 'Vue']);

// Manager instance
let gates = new Manager('Bill Gates', 43, [maria, pesho]);

// use the objects:
maria.greet();
pesho.greet();
gates.greet();


