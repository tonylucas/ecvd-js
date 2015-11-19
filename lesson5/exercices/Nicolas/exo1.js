function range(start,end){
	var array = [];
	for(var i = start; i <= end; i++){
		array.push(i);
	}
	return array;
}

array = range(10,20);
console.log(array);

//---------------------------------------------------------//

function sum(array){
	var result = null;
	for (var i = 0; i < array.length; i++) {
		result += array[i];
	}
	return result;
}

var result = sum([20,30,50]);
console.log(result);

//---------------------------------------------------------//

console.log(sum(range(1, 10)));