//SPREAD

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const usuario1 = {
    nome: 'Junior',
    idade: 35,
    cidade: 'Fortaleza',
};

const usuario2 = { ...usuario1, nome: 'Luna' };

console.log(usuario2);