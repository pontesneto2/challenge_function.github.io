/*console.log("Ganhadores da Carteira de Motorista 2022")
//object
let candidatos = [
    { nome: 'Francisco Pontes', idade: 26, aprovado: true, categoria: 'AB'},
    { nome: 'Carlos José', idade: 31, aprovado: false, categoria: 'B'},
    { nome: 'Allan Moura', idade: 29, aprovado: false, categoria: 'A'},
    { nome: 'Maradona Silva', idade: 45, aprovado: true, categoria: 'AB'},
    { nome: 'Daniel Silva', idade: 60, aprovado: false, categoria: 'AB'},
    { nome: 'Ronaldinho Gaúcho', idade: 48, aprovado: false, categoria: 'A'},
    { nome: 'Pedro Alves Cabral', idade: 99, aprovado: true, categoria: 'B'},
    { nome: 'Cristovão Colombo', idade: 102, aprovado: false, categoria: 'AB'},
];

function myList(aprovado,categoria,candidatos,nome) {
    for(let i=0; i<candidatos; i++);{
        console.log("teste");
}
    if(aprovado === true && categoria === 'AB') {
        console.log(nome + ' -->   Aprovado a receber uma CNH de Categoria AB grátis')
    }else{
        console.log(nome + ' -->   Reprovado, não foi dessa vez :(')
    }
};

myList();*/

console.log("Ganhadores da Carteira de Motorista 2022")
//object
let candidatos = [
    { nome: 'Francisco Pontes', idade: 26, aprovado: true, categoria: 'AB'},
    { nome: 'Carlos José', idade: 31, aprovado: false, categoria: 'B'},
    { nome: 'Allan Moura', idade: 29, aprovado: false, categoria: 'A'},
    { nome: 'Maradona Silva', idade: 45, aprovado: true, categoria: 'AB'},
    { nome: 'Daniel Silva', idade: 60, aprovado: false, categoria: 'AB'},
    { nome: 'Ronaldinho Gaúcho', idade: 48, aprovado: false, categoria: 'A'},
    { nome: 'Pedro Alves Cabral', idade: 99, aprovado: true, categoria: 'B'},
    { nome: 'Cristovão Colombo', idade: 102, aprovado: false, categoria: 'AB'},
];

function myList(candidato) {
    if(candidato.aprovado === true && candidato.categoria === 'AB') {
        console.log(candidato.nome + ' -->   Aprovado a receber uma CNH de Categoria AB grátis');
    }else{
        console.log(candidato.nome + ' -->   Reprovado, não foi dessa vez :(');
    }
};
    
candidatos.forEach(myList);