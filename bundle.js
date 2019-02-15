"use strict";

var arr = [1, 3, 4, 5, 6]; //Antes

/*
const newArr = arr.map(function(item){
    return item * 2;
});

console.log(newArr);
*/
//Depois

var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr);
/*
const teste = () => 3;

console.log(teste);
*/

var teste = function teste() {
  return {
    nome: 'Diego'
  };
};

console.log(teste());
