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
