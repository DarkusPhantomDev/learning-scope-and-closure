/*
const fruits = () => {
	var fruit = 'apple';
	console.log(fruit);
}

fruits(); //Muestra el valor de fruit dentro de fruits
console.log(fruit); //Muestra error porque la variable no existe
*/



const anotherFunction = () => {
	var x = 1;
	var x = 2; //Reasigna el valor de x = 1 a x = 2
	let y = 1;
	let y = 2; //Si se muestra en consola, cuando ha sido declarada con el mismo nombre, mostrará un error
	console.log(x);
	console.log(y);
}

anotherFunction();
