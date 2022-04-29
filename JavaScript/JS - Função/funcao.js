const alunos = [
{
    nome: 'Korn',
    nota: 5,
    turma:'1B',
},
{
    nome: 'Yiwha',
    nota: 10,
    turma: '1B',
},
{
    nome:'Pharm',
    nota: 7,
    turma:'1C',
},
{
    nome:'Lot',
    nota: 4,
    turma:'1C',
},
];

function alunosAprovados(arr,media) {
    let aprovados = [];  

    for (let i = 0; i < arr.length; i++){
        const {nota, nome} = arr[i];

        if(nota >= media) {
            aprovados.push(nome);
        }
    }

    return(aprovados);
}

console.log(alunosAprovados(alunos, 5));

//

function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos } anos de idade.`;
} 

const pessoa1 = {
    nome: "Maria",
    idade:30
}
const pessoa2 = {
    nome: "João",
    idade:30
}

const animal = {
    nome: "Yor",
    idade: 2000,
    race: "dragon"
}

console.log(calculaIdade.apply(pessoa1, [30]));