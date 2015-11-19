function range (start, end) {

var arr = [];

for (i= start; i<= end; i++) {

	arr.push(i);
	}

	return arr;
}

console.log(range(1,10));