//REST ...
//Em Objetos
/* 
const usuario = {
    nome: 'Junior',
    idade: 35,
    cidade: 'Fortaleza'
};

const { nome, ...resto } = usuario

console.log(nome);
console.log(resto);
*/

//Em Vetores
/*
const arr = [1, 2, 3, 4];

const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);
*/

//Parametros de funções
//Antes
function soma1 (a, b) {
    return a + b;
}

console.log(soma1(1, 3));

//Depois
function soma2 (...params) {
    return params.reduce((total, next) => total + next);
}

console.log(soma2(1, 3, 4));

function soma3 (a, b, ...params) {
    return params;
}

console.log(soma3(1, 3, 4, 5, 6, 7));