/*
const fruits = () => {
	if (true) {
		var fruits1 = 'apple';
		var fruits2 = 'banana';
		var fruits3 = 'pear';
	}
	console.log(fruits1);
	console.log(fruits2);
	console.log(fruits3);
}

fruits(); //Muestra el valor de fruits1, fruits2, fruits3
*/
/*
const fruits = () => {
	if (true) {
		var fruits1 = 'apple';
		let fruits2 = 'banana';
		const fruits3 = 'pear';
	}
	console.log(fruits1);
	console.log(fruits2);
	console.log(fruits3);
}

fruits(); //Muestra el valor de fruits1, sale error en fruit2 y fruit3
*/

/*
const fruits = () => {
	if (true) {
		var fruits1 = 'apple';
		let fruits2 = 'banana';
		const fruits3 = 'pear';
		console.log(fruits2);
		console.log(fruits3);
	}
	console.log(fruits1);
}

fruits(); //Muestra el valor de fruits1, fruit2 y fruit3
*/



/*
let x = 1;
{
	let x = 2;
	console.log(x); //Primero muestra este
}

console.log(x); // Luego muestra este
*/

/*
var x = 1;
{
	var x = 2;
	console.log(x); //Muestra el valor de 2
}

console.log(x); // Muestra el valor de 2
*/



const anotherFunction = () => {
	for (var i = 0; i < 10; i++) {
		setTimeout(() => {
			console.log(i);
		}, 1000);
	}
}
anotherFunction(); // repeticion de 10

const anotherFunction = () => {
	for (let i = 0; i < 10; i++) {
		setTimeout(() => {
			console.log(i);
		}, 1000);
	}
}
anotherFunction(); //Desde el 0 al 9