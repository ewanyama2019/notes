var a = [1,2,3,4];
var b = [1,2,3,4];
a===b
a.toString()
a.toString() === b.toString()



//Cloning Array
var originalArray = [1,2,3,4,5]
originalArray
var cloneArray = originalArray;
cloneArray.push(6);
cloneArray
cloneArray.push(7,8,9)
cloneArray

//to clone an array without simply making another pointer
var cloneArray = originalArray.slice()
cloneArray    ////expected [1,2,3,4,5,6,7,8,9]
cloneArray.push(10,11,12)
cloneArray     //expected  [1,2,3,4,5,6,7,8,9,10,11,12]
originalArray  //expected [1,2,3,4,5,6,7,8,9]

newCloneArray2 = cloneArray.slice(4)  //Clone the cloneArray from place holder 4
skipCloneArray = cloneArray.slice(4, 8)  ///clone the cloneArray from place holder 4 to 8 excludingthe 8th


var cloneArray = originalArray.slice()
cloneArray
cloneArray.push(10,11,12)
cloneArray
originalArray
newCloneArray2 = cloneArray.slice(4)
skipCloneArray = cloneArray.slice(4, 8)
largerCloneArray = cloneArray.slice(1,7);

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant', 'giraffe'];
animals
animals.slice()
animals.slice(2);
animals.slice(2, 4);
animals.slice(2,7);
