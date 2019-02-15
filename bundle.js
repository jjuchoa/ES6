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
function mostraNome(usuario) {
    console.log(usuario.nome);
}

mostraNome(usuario);
*/
//Com Desestruturacao

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraNome(usuario);
