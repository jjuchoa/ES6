const arr = [1,3,4,5,6]

//Antes
/*
const newArr = arr.map(function(item){
    return item * 2;
});

console.log(newArr);
*/
//Depois
const newArr = arr.map(item => item * 2);

console.log(newArr);

/*
const teste = () => 3;

console.log(teste);
*/

const teste = () => ({nome: 'Diego'});

console.log(teste());