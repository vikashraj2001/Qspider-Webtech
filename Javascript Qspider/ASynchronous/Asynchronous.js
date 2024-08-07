/*
ASynchronous: 
 we can make our javascript Asynchronous by three way
 all the asynchronous code execute separately in one file
 1> call back
     i. setTimeout()
     ii.setInterval()
2> Promises
   


*/

/*
 1. call backs: it is used to make javascript Asynchronous
   i. setTimeOut(): it accept two parameter call backFunction, timeInterval
    ->  when ever you want to some delay you can use set time out
      -> it will execute only once

   ii. setInterval():
    
 */ 

/*
   setTimeout(()=>{
     console.log("hello");
     setTimeout(()=>{
        console.log("hello bhai")
     },5000)
     
   },5000)*/
/*
  let setdata= setInterval(()=>{
      console.log("hello")
   },3000)
   setTimeout(()=>{
    clearInterval(setdata);
 },10000)*/

 /* Promises : it is a mechanism to handle asynchronous operation 
 ->it is used to handle the asynchronous operation in a synchronous way
-> it is used to handle the error in a synchronous way

   -> when ever fetching data from backend we got promises 
     1.if the server have data then it will be resolve
     2.if the server don't have data then it will be reject
     3. if the server have big data then it will create pending state
 we have three state
 1. pending
 2. resolved
 3. rejected

 
 */
 /*how to create dummy promise
   Promise constructor accept one call back function 
   and  call back function accept 2 parameter 1. resolve 2. reject
  -> if promise are not  performing any action then it is pending


To handel promise  we have three block
  1.then
  2.catch
  3.finally
we have four Promise  method
   1.all
   2.allSettled
   3.race
   4.any
   use two thing 
   setTimeout
   promises

 
 */
 let promise=new Promise((resolve,reject)=>{
       if (10>30) {
        resolve("promise is resolved"); 
       }else{
         reject(" Promise is rejected");
       }
 })
 /*
   -> Then and catch: is a way to handel the error separately
 promise.then((data)=>{
   console.log(data);
 });-> when ever promise is resolved  we use then and it accept one call back function
  ->call back function accept one parameter
  -> when ever promise is rejected then we use catch to handle error 
  -> it accept one call back function
  -> finlay is default it also accept call back function

promise.catch((error)=>{
   console.log(error)
})

*/

promise.then((data)=>{
console.log(data)
}).catch((error)=>{
   console.log(error)
}).finally(()=>{
   console.log("finally block");
})



    

