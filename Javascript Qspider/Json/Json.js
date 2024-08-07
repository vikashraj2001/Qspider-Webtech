/* 

  Json: it is leightweight format to storing and transporting
  json has two method
  1.StringFy
  2.parse
  Stringify: it is used to convert the object into string js to json
  parse: it is used to convert the string into object json to js

*/


let obj1={
    name:"Rahul",
    age:25,
    phone:8953710180
}
console.log(obj1)
let jsonData=JSON.stringify(obj1)
  console.log(JSON.parse(jsonData))

/*
Destructuring: it is the method use to extract the data from array and object

two types of Destructuring
1. array distructuring
2.  Object distructuring

// how to  perform destructuring we have
   1.Spread Operator 
   2.Rest Parameter
   
   Syntax 
     ...variable
  Advantage of destructuring
    1.while destructuring array we can use any variable name
    2.we can't skip element 
    3.we can use any variable name



   */
  /*
  let arr=[10,20,30,40,50,60,70,80,90,100];
  let [a,,b,,,d,...ar]=[... arr];//Spread Opreator


    console.log(a,b,d)



*/

/*
fetch('https://api.github.com/users').then(Response=>Response.json()).
then(({id,login,url})=>{
    console.log(`User Id: ${id}`)
    console.log(`User name: ${login}`)
    console.log(`User email: ${url}`)
})*/

// let [firstNum, secondNum]=[1,2]
// console.log(firstNum);
// console.log(secondNum);
// [firstNum, secondNum]=[secondNum,firstNum]
// console.log(firstNum)
// console.log(secondNum)


//=====================================================
/* Destructure of object

we can't use random variable name only we have to use key name
we can skip element
sequence doesn't matter

*/
//Q- Diff btw object destructuring and array destructuring
//Q- diff btw spread and rest operator

let emp={
  empName:"vikash",
  empId:123,
  empAge:25,
  mgrNo:3345,
  comm:2000,
  dob:"03/03/1999"
  
}
//let {empName,empAge,comm}={...emp};
//console.log(empName);
//console.log(empAge)


/* browser Storage
  1. session Storage: for a some interval of time while you are using that website or until the session is running

  2. local Storage: for a long time even after you close the browser
  3. cookie: for a long time even after you close the browser// cache and cookie stor the backend
  4. indexDB: for a long time even after you close the browser  
  5. cache Storage: for a long time even after you close the browser



localStorage.setItem("password","vikash@1");
localStorage.getItem("password")
console.log(localStorage.getItem("password"))
let a="password";
sessionStorage.setItem(`${a}`,"vikash@1");
console.log(sessionStorage.getItem(`${a}`))
*/

/*Math Object: it is used to perform mathmetical opertation
1. Math.abs() : returns absolute value of a number
2. Math.ceil() : returns smallest integer greater than or equal to a number
3. Math.floor() : returns largest integer less than or equal to a number
4. Math.max() : returns largest of zero or more numbers
5. Math.min() : returns smallest of zero or more numbers
6. Math.pow() : returns base to the exponent power
7. Math.random() : returns a random number between 0 (inclusive) and 1 (
8. Math.round() : returns the value of a number rounded to the nearest integer
9. Math.sqrt() : returns square root of a number



*/
console.log(Math.sqrt(25))
console.log(Math.floor(25.17745689))
console.log(Math.ceil(25.7))
console.log(Math.random())
console.log(Math.max(10,20,30,40,50))
console.log(Math.min(10,20,30,40,50))
console.log(Math.round(Math.random(10000)*10000));
/* let arr=[10,20,30,40,50];
// for (let index = 0; index < arr.length; index++) {
//   var element = Math.max(arr[index]);
  
  
// }
// console.log(element) */



