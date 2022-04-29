function calculadora() {
    const operacao = Number(prompt('Escolha uma Operação:\n 1 - Soma (+)\n 2 - Substação (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potêncianção (**)'));

if (!operacao || operacao >= 7) {
    alert ('Erro');
    calculadora ();
}

else {let n1 = Number(prompt('Insira o Primeiro Valor:'));
let n2 = Number(prompt('Insira o segundo valor:'));
let resultado;
          
   

function soma() {
    resultado = n1 + n2;
    alert(`${n1} + ${n2} = ${resultado}`);
    novaOperacao();
}
function subtracao() {
    resultado = n1 - n2;
    alert(`${n1} - ${n2} = ${resultado}`);
    novaOperacao();
}
function multiplicacao() {
    resultado = n1 * n2;
    alert(`${n1} * ${n2} = ${resultado}`);
    novaOperacao();
}
function divisaoReal() {
    resultado = n1 / n2;
    alert(`${n1} / ${n2} = ${resultado}`);
    novaOperacao();
}
function divisaoInteira() {
    resultado = n1 % n2;
    alert(`O resto da divisão entre ${n1} e ${n2} é igual a: ${resultado}`);
    novaOperacao();
}
function potenciacao() {
    resultado = n1 ** n2;
    alert(`${n1} elevando a ${n2}ª é igual a ${resultado}`);
    novaOperacao();
}
 }

function novaOperacao() {
    let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim \n 2 - Não \n' );
    
    if (opcao ==1) {
        calculadora();

    } else if (opcao ==2) {
        alert('by bitch');
    } else {
            alert('escolhe um NUMERO')
            novaOperacao();
        }
    }



if (operacao == 1) {
    soma();
} else if (operacao == 2) {
    subtracao();
} else if (operacao == 3) {
    multiplicacao();
} else if (operacao == 4) {
    divisaoReal ();
} else if (operacao == 5) {
    divisaoInteira ();
} else if (operacao == 6) {
    potenciacao ();
    }
}

calculadora();
