/*
const moneyBox =  (coins) => {
	var saveCoins = 0;
	saveCoins += coins;
	console.log(`Money Box: ${saveCoins}`);
}

moneyBox(5);
moneyBox(10);
*/
//No muestra el valor de 15. Solo muestra los valores que pasamos por parametro

const moneyBox =  (coins) => {
	var saveCoins = 0;
	const countCoins = (coins) => {
		saveCoins += coins;
		console.log(`Money Box: ${saveCoins}`);
	}
	return countCoins;
}

let myMoneyBox = moneyBox();

myMoneyBox(4);
myMoneyBox(10);