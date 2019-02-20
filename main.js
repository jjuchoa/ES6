const nome = "Junior";
const idade = 35;

//Antes
/*
const usuario = {
    nome: nome,
    idade: idade,
    cidade: "Fortaleza",
};
*/
//Depois
const usuario = {
    nome,
    idade,
    cidade: "Fortaleza",
};

console.log(usuario);