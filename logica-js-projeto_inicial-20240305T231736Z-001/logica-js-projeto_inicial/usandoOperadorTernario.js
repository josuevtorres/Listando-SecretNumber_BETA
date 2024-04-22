///
///SECRET NUMBER - OPERADORTERNARIO
///
///

alert("adivinha essa coisa");
// creating random number and passing to integer
let intNumber = Math.round(Math.random());
let userInput = prompt("Try the secret number: ");
// ternary operator javascript
userInput == intNumber
	? alert("Você não é tão burro quanto aparenta!")
	: alert(
			"Até uma criança de 2 anos acertaria (fizemos testes em laboratório :) )"
	  );
