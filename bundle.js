"use strict";

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
function soma1(a, b) {
  return a + b;
}

console.log(soma1(1, 3)); //Depois

function soma2() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(soma2(1, 3, 4));

function soma3(a, b) {
  for (var _len2 = arguments.length, params = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    params[_key2 - 2] = arguments[_key2];
  }

  return params;
}

console.log(soma3(1, 3, 4, 5, 6, 7));
