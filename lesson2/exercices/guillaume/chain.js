function loopSize(node){

  var the_node = node;
  var i = 0;

  //console.log(the_node);

  while(typeof node.next != 'undefined' && i < 10) {
    //console.log(the_node);
    the_node = node.next;
    i = i + 1;
  }

  return i;
}

// Testing environment
function createChain(tailLength, loopLength){
  list = [];
  for(i=0; i < tailLength + loopLength; i++){
    list.push({ next: null });
    console.log('1', list);
    if(i > 0){
      list[i-1].next = list[i];
    }
  }
  console.log(list);
  list[tailLength + loopLength - 1].next = list[tailLength];
  console.log(list[0]);

  return list[0];
}

// Test 1
var list = createChain(0, 1);
var result = loopSize(list)
if(result != 1){
  console.log("Test 1: Expected 1 got " + result)
} else {
  console.log("Test 1: success");
}

// Test 2
// list = createChain(8778, 23);
// result = loopSize(list)
// if(result != 23){
//   console.log("Test 2: Expected 23 got " + result)
// } else {
//   console.log("Test 2: success");
// }

// // Test 3
// list = createChain(23, 8778);
// result = loopSize(list)
// if(result != 8778){
//   console.log("Test 3: Expected 8778 got " + result)
// } else {
//   console.log("Test 3: success");
// }

// // Test 4
// for(i = 0 ; i < 2 ; i ++){
//   var a = Math.floor(Math.random()*999) + 9000;
//   var b = Math.floor(Math.random()*999) + 9000;
//   list = createChain(a, b);
//   result = loopSize(list)
//   if(result != b){
//     console.log("Test 4: Expected " + b + " got " + result)
//   } else {
//     console.log("Test 4: success");
//   }
// } 