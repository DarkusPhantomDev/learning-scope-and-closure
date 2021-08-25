/*
El ámbito léxico es cuando las funciones se ejecutan utilizando la cadena del alcance donde estaban vigente en su momento.

Esto significa que podemos acceder al valor “count” dentro de la función porque es el alcance donde está asignado.

Podemos tener varias formas de manejar la constante “buildCount”, significa que la podemos asignar a myCount y myOtherCount. Trabajaremos con el scope(alcance) que tiene esta variable, poder ejecutarla y empezar a contar desde donde necesitemos.
*/
const buildCount = (i) => {
	let count = i;
	const displayCount = () => {
		console.log(count++);
	}
	return displayCount;
}

const myCount = buildCount(1);
myCount(); //1
myCount(); //2
myCount(); //3

const myOtherCount = buildCount(10);
myCount(); //10
myCount(); //11

// https://static.platzi.com/media/user_upload/Captura%20de%20Pantalla%202020-08-07%20a%20la%28s%29%2011.28.15-8ff3b6ea-be35-47a2-adc1-cc39ff189c5e.jpg
// 