/*
const helloWorld = () => {
	const hello = 'Hello World';
	console.log(hello); //Hello World
}

helloWorld();
console.log(hello); //Error al tratar de acceder a la variable 'hello' de helloWorld
*/



var scope = 'i am global';

const functionScope = () => {
	var scope = 'i am just local';
	const func = () => {
		return scope;
	}
	console.log(func());
}

functionScope();