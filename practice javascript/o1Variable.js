let yourAge=40;
yourAge=50;
const name=''//if you declare in variable using const keyword you must need to  inntilize the value to the variable if you will not define it will show error
/* if you define any variable using const keyword you can't define the varibale with the  same name 
even you can't define with the Let and you  can define with the var easily it will show error during run time
 */
/*
var fullName=20;
var fullName=30;
console.log(yourAge);
console.log(fullName);
console.log(name);

const likeJavscript=true;
console.log(likeJavscript);
const randomNumber=Math.floor(Math.random()*10000)
console.log(randomNumber);
*/

// const num=20;
//  num=30;// can,t reasign the value

function diffBtwVariable(){
    let count =0;

     for(let i=0;i<5;i++){
       count++
     }
     console.log(count);
  
   
}

//diffBtwVariable();

//Scope variable: which is not accesible out side the scope 
/* here in this example i have declared one fnction with the name of scopevariable and in that i have declared one variable with the using of
 let keyword and varibale name is num and num1 and i stored the sum of two varibale in result varibale and i want to print the variable out
 the functio it shows error that variable is not definefd due to variable scope
 */
function scopeVariable(){
    let num=1;
    let num1=2;
    let result=num + num1;
}
// console.log(result);
scopeVariable();
/*
const fullName=12345
const  quantity="12.99";
console.log(+quantity);

const typeConversion=fullName.toString();
console.log(typeConversion);
console.log(typeof typeConversion);*/

//Vice versa means swaping or revarsing a value

let a=20;
 let b=30;
 let temp=a;
 a=b;
 b=temp;
console.log("Value of a : ",a);
console.log("value of b : ",b);
/*
const str="vikash singh";
let rev='';
for(let i=str.length-1;i>=0;i--){
    rev +=str[i]
}
console.log(rev);  */

const name1 = prompt("What is your name?"); // Add closing double quote

if (name1) {
  console.log(`My name is ${name1}`);
} else {
  console.log("You didn't enter a name."); // Use a more appropriate message
}