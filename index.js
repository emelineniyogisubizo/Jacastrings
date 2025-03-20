//QUESTION 1
let x = "Extravaganza";
let y = x.substring(8);
console.log(y);

//QUESTION 2
const food = "The quick fox jumped over the lazy dog"
const p = food.slice(0,4) + "eat" + food.slice(4);
console.log(p);

//QUESTION 3
const story = "The quick brown fox jumps over the lazy dog";
const a = story.toLowerCase();
const the = a.split("the").length-1;
const brown = a.split("brown").length-1;
console.log(the);
console.log(brown);

//QUESTION 4
const string1 = "The pupils are readind in the library";
const string2 = "The child was sitting on the table before it fell"
const are = string1.includes("are")
const sitting = string2.includes("sitting") ? true:false;
console.log(are);
console.log(sitting); 

//QUESTION 5
let upper = "wonderful";
console.log(upper.toUpperCase());
let lower = "UndERneath";
let lower1 = "amazing";
console.log(lower.toLowerCase());
console.log(lower1.toLowerCase()); 
let title = "A wonderful world"
   .split(" ")
   .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
   .join(" ");
console.log(title);