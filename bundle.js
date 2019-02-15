"use strict";

var usuario = {
  nome: 'Junior',
  idade: 23,
  endereco: {
    cidade: 'Fortaleza',
    estado: 'CE'
  }
}; //Sem Desestruturacao

/*
const nome = usuario.endereco;
const idade = usuario.idade;
const cidade = usuario.endereco.cidade;
*/
//Com Desestruturando

var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade);
