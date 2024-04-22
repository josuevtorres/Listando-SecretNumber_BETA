
///
///LISTANDO 1° JOSUÉ VTORRES;
///

// Na tela deverá aparecer um campo de input
// Nele vai pedir para eu colocar uma palavra
// Vai me perguntar se qro adicionar outra ou não
// se nn ==> alert(as palavras que adicionei)

// Lista/array e laço de repetição


let Seelist = 1;
let AddToList = 2;
let RemoveItemList = 3;
let Exit = 0;

let Lista = ["Buy apples", "Buy bananas"];
let exit = true;

do {
    let choose1 = prompt(`Olá usuário, o que deseja fazer em sua lista? 
    ${Seelist} Ver itens da lista;
    ${AddToList} Adicionar itens à lista;
    ${RemoveItemList} Remover último item da lista;
    ${Exit} Sair da lista`);
//parseInt = converte seu primeiro argumento para uma string, analisa, e retorna um inteiro ou NaN
    choose1 = parseInt(choose1);

    if (choose1 === Seelist) {
        alert(`Esta é a sua lista no momento:
        ${Lista}`);
    } else if (choose1 === AddToList) {
        let adicionado = prompt("Informe o item que deseja adicionar à sua lista: ");
        Lista.push(adicionado);
        alert(Lista);
    } else if (choose1 === RemoveItemList) {
        alert("O último item da sua lista foi removido.");
        Lista.pop();
        alert(`Agora, esta é a sua lista: ${Lista}`);
    } else if (choose1 === Exit) {
        exit = false;
    }
} while (exit);

close();