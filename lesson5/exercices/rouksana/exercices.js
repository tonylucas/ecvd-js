// EXERCICE 1
function range(start, end){ 
  var myArray = [];
  for (var i = start; i <= end; i++) {
    myArray.push(i);
  };
  return myArray;
}
console.log(range(1,10));

function sum(array){
  var result = 0;
  for (var i = 0; i < array.length; i++) {
      result += array[i];
  }
  return result;
}

console.log(sum(range(1,10)));

// EXERCICE 2

var list = {
  value: 1, 
  next: {
    value: 2, 
    next: {
      value: 3,
      next: null 
    }
  } 
};

function arrayToList(array) {
    var list = {};

    return list;
}
//console.log(arrayToList([1, 2, 3]));

function listToArray(list) {
}
//console.log(listToArray(list));

// var data = [2, "test", false, {"ref": 3}];
// console.log(data === arrayToList(listToArray(data)));