const arr = [1,3,4,5,8,9]

const newArr = arr.map(function(item, index){
    //return item * 2;
    return item + index;
});

console.log(newArr);