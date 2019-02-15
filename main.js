//Função normal
/*
function soma(a = 3, b = 6) {
    return a + b;
}

console.log(soma(1));
console.log(soma());
*/

//Arrow function
const soma = (a = 3, b = 6) => a + b;

console.log(soma(1));
console.log(soma());