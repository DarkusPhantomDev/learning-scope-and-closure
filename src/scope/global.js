var hello = 'Hello';
var hello = "Hello +"; // Se puede reasignar (Pero es mala práctica)
let world = "Hello World";
let world = "Hello"; // Se puede reasignar pero no se puede re-declarar
let world = 'Hello world';
const holaMundo = 'Hola Mundo'; // No se puede reasignar

const anotherFunction = () => {
	console.log(hello);
	console.log(world);
	console.log(holaMundo);
}

anotherFunction();
//Sí se puede acceder a todas las variables ya que son globales y muestra por consola sus valores





const helloWorld = () => {
  globalVar = "im global";
};

helloWorld();
console.log(globalVar); //Muestra el valor de globalVar por consola. Sin embargo, esto es mala practica




const anotherFuction = () => {
  var localVar = globalVar = "Im Global";
};
//Si se crea una variable sobre una variable también se puede acceder a ella

anotherFuction();
console.log(globalVar);