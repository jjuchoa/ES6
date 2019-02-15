const usuario = {
    nome: 'Junior',
    idade: 23,
    endereco: {
        cidade: 'Fortaleza',
        estado: 'CE'
    },
};

//Sem Desestruturacao
/*
const nome = usuario.endereco;
const idade = usuario.idade;
const cidade = usuario.endereco.cidade;
*/

//Com Desestruturando
const {nome, idade, endereco:{cidade}} = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);