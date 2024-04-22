///
///SECRET NUMBER
///
///
alert("adivinha essa coisa");

let secretNumber = Math.round(Math.random() * 100 + 1);
let userInput = prompt("Try the secret number: ");
let userTries = 1;

while (userInput != secretNumber) {
	userInput = prompt("Try the secret number: ");
	if (userInput == secretNumber) {
		break;
	} else {
		if (secretNumber > userInput) {
			alert(`O número secreto é maior que ${userInput}`);
		} else {
			alert(`O número secreto é menor que ${userInput}`);
		}
	} ///atribuir +1 = ++
	userTries++;
}
alert(
	`Você não é tão burro quanto aparenta, o Secret Nubmer era ${secretNumber};`
);
alert(`só demorou ${userTries} para acertar.`);
