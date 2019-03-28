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
//looping in Arrays
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
