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
