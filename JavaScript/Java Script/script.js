
//var VouF = false;
//console.log(typeof(VouF));


//var numero = 1;
//console.log(typeof(numero));

//var nome = 'hella';
//console.log (typeof(nome));

//let variavel2 = 'iry';
//console.log(variavel2);

//const constante = 'loki';
//console.log(constante)

var escopoGLobal = 'global';
console.log(escopoGLobal);

function escopoLocal() {
    let escopoLocalInterno = 'local'
    console.log(escopoLocalInterno);
}

escopoLocal();