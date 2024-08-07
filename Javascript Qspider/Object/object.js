// first way using object literals
/*
1. in javascript object store in key value pair
2. we perform CRUD operation on object
3. we can access property of object using Object.property (obj.hobbies) using dot notation we access object 
  property
5. we can also access the object property using bracket notation (obj['hobbies']
6. we can also create object using object literal
7. if the key is not present inside the object then it will give undefined


*/

let obj={
    name:"sachin",
    age:20,
    address:"mumbai",
    hobbies:["cricket","reading"]
}


// console.log(obj['hobbies'])
// console.log(obj.hobbies)
//   console.log(obj.hobbies[1])
//How to create a object 
  obj.movie='Tom & jerry';
  obj['movie']='Tom & jerry';
  
  // if we reintialize the value then value will override
   obj.age=25;
// console.log(obj)
   

// How to delete a specfice key using delete key we can delete
delete obj.age;
// console.log(obj)


// Second way to create a object 

let obj1=new Object();
obj1.fruit="BANANA"
obj1.listOfFruit=['banana','orange','Mango']
obj1.fun=function (){
    console.log("hello world")
}

// console.log(obj1.listOfFruit[1])
// console.log(obj1.fruit)

// console.log(obj1.fun())
// console.log(obj1)


function fun(a,b,c,d){
    console.log(a,b,c,d)
}
// let fun1=new fun(10,20,30);
//  console.log(fun1)

// Third way to create a object using constructor function


// create a object of emp
let val=30<50?"login":"logout";
let emp={
    name:"Rahul",   
    age:25,
    salary:25000,
    hobbies:['cricket','football','reading'],

   [val]:'jaduu'// it is a way to use a variable value as key we can wrap in brackets[]
}
// console.log(emp)

/*
function fun(a,b,c){
    console.log(a,b,c)
}
  let fun12=new fun(10,20,30);

  console.log(fun12)
  /*  ======================Object  Method===================== 
  
  1.keys: it will return arrays of keys
  2.values: it will return arrays of values
  3.entries: it will return arrays of key and values as subarray
  4.has: it will return true or false if the key is present in the object
  5.assign: it is used to merge two object  if you want that our original object will not effect then you can pass
     Dummy Object as target (Object.assign({},target,source)) then it will not effect on the maine  object
6.seal: we can only update the properties
7.freeze: we can't update the properties
8.isFrozen: it will return true or false if the object is frozen
9.isSealed: it will return true or false if the object is sealed
10.isExtensible: it will return true or false if the object is extensible

  
  */
let obj2={
    name:"sachin",
    age:20,
    address:"mumbai",
    hobbies:["cricket","reading"],
      dancing(){
      console.log("Hello")

    }
}
let obj3={
    name1:"sachin",
    age2:20,
    address3:"mumbai",
    hobbies4:["cricket","reading"],
      dancing(){
      console.log("Hello")

    }
}
  /* to find the keys 
// console.log(Object.keys(obj2));
// Object.keys(obj2).forEach(item=>{
//     console.log(obj2[item])

// })
console.log(obj2)
   obj2.dancing()*/
     
// console.log(Object.values(obj2))
   
// console.log(Object.entries(obj2))

// console.log(Object.assign({},obj2,obj3))
// console.log(obj2)

/* Seal and freeze  

 console.log( Object.seal(obj2))
 delete obj2.age;// Deletion is not possible

   obj2.mgr=3030;// insertion is not possible with freeze
   console.log(obj2)

   obj2.age=40;//Updation is possible
   console.log(obj2)
   console.log(Object.isSealed(obj1))// it will show that item is sealed or not and it will give you boolean value*/

   /* freeze ====
   console.log(Object.freeze(obj2));
   obj2.mgr=3030;// insertion is not possible with freeze
   console.log(obj2)
   console.log(Object.isFrozen(obj2))// it will show that item is Frozzen or not and */

   /* hasOwnProperty 

   console.log(obj2.hasOwnProperty("age"));  */
   
