///### Wednesday: Practice - JavaScript Arrays ####

var movieChar =['Thor','Bumblebee','Optimus','robotboy','Nikita']; //Make an array of your siblings' names or your favorite movie characters' names.
var parents = ['Francis','Flo'];  //Make an array of your parents' names.
var parentsnMovieChar = parents.concat(movieChar); //Combine these two arrays using concat().
parentsnMovieChar
parentsnMovieChar.push('Tezzie');  //Add your pets' names using push().
parentsnMovieChar; //parentsnMovieChar n Pet name
reverseParentsnMovieChar = parentsnMovieChar.reverse() //Reverse the order of the array.
parents[0]; //Access one of your parents' names using the square bracket notation



/////////////////////////////////////////////////////////////////////////////////
//looping in Arrays  ## forEach ##
var languages = ['HTML','CSS','JavaScript'];
  languages.forEach(function(language){
    alert('I love ' + language + '!');
  })

  //Adding Numbers with Loops
  var total =0;
  var summands = [1,2,3,4,5];
  summands.forEach(function(summand){
    total += summand;
  });
  alert(total)


//Adding Numbers with Loops inproved code
var total =0;
var summands = [1,2,3,4,5];
summands.forEach(function(summand){
  alert(total += summand)  //alert the subtotals
});
alert(total)   //the final total


///#################################################
//Wednesday: Practice - Looping in Arrays  --code  Make an array of your friends' names. Loop through it and alert() a greeting to each
var myFriends = ['Robert','George','Sam','Beatrice','David','Naomi','mike','Maggie','Kim'];
myFriends.forEach(function(myFriend) {
  alert('Hallo ' + myFriend + '!');
});

///#################################################
//Wednesday: Practice - Looping in Arrays  --Write a loop to multiply an arbitrary amount of numbers.
var result = 1  ;
var multiplys = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
multiplys.forEach(function(multiply) {
  alert(result *= multiply);
  });


////// ----  Array Mapping  -----///////
//1st case using Array.forEach
var numbers = [1,2,3,4,5];
var doubleNumbers = [];
numbers.forEach(function(number) {
  doubleNumbers.push(number * 2);
});
alert(doubleNumbers);

//2nd case using Array.Mapping
var numbers = [1,2,3,4,5];

var doubleNumbers = numbers.map(function(number){
return(number * 2);
});
alert(doubleNumbers);


///#####  Array.map  --- multiply numbers in an array
var result = 1;
var numbers = [1,2,3,4,5,6,7,8,9,10];
var arraymultiplied = numbers.map(function(number){
return (result *= number);
});
alert(arraymultiplied)

//############ Array.map  -using fat Arrow --- multiply numbers in an array
var result = 1;
var oddNumbers = [1,3,5,7,9,11,13,15,17,19];
var arrayOddMultiply = oddNumbers.map(number => result *= number);
alert(arrayOddMultiply);


///======PRACTICE ARRAYS.MAP MAPPING ARRAYS=========================================######################
// Practice - Arrays.map CODE - Make an array of numbers, then use .map() to return an array containing each of the original numbers + 1.

var twentyNumbers = [1,2,3,4,5,6,7,8,9,10,12,13,15,16,171,18,99,98,233,44];
var twentyNumbersPlusOne = twentyNumbers.map(function(twentyNumber){
  return(twentyNumber +=1)
});
alert(twentyNumbersPlusOne);


var twentyNumbers = [1,2,3,4,5,6,7,8,9,10,12,13,15,16,171,18,99,98,233,44];
var twentyNumbersPlusOne = twentyNumbers.map(twentyNumber => twentyNumber +=1);
alert(twentyNumbersPlusOne);

// Practice - Arrays.map CODE - Create an array of words. Use .map() to return an array of the same words in all uppercase
var lowerCases = ['today','tomorrow','care','little','now','want','original','great'];
var upperCases = lowerCases.map(function(lowerCase){
  return(lowerCase.toUpperCase());
});
alert(upperCases);
