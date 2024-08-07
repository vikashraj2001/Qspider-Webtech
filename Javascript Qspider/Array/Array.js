/* console.log(arr)
var arr=[10,"vikash",true, function name(){},{}] */



var arr =new Array(10,40,60);
       
      


     /*  person={ 
              fullname:"Vikash ",
              Lastname:"Singh",
              age: 23,
               fullnames:function(){
                     return this.fullname+" "+this.Lastname;
               }


       }
           let getfullnamed=person.fullnames.call(person);
           console.log(getfullnamed);*/

 const arr1=[10,60,30,1000,50,40];
 const arr2=[10,20,30,40,50,40];
  //  arr1.push(100);//  it push the element at the  end
  //  arr1.unshift(101);//add element on first index in array
  //   arr1.pop();// it delete the element at the end
  //   arr1.shift();// it delete the element at the first index
    //console.log(arr1.indexOf(40));  // it will return particular element on based on index and it will return first occurnce
  // console.log(arr1.lastIndexOf(40));// it will return last occurnce element
  // console.log(arr1.includes(50));// it will return element is present in array or not and it return type is bollen
   //console.log(arr1.at(5));//it will return  the value on specfic index
  // console.log(arr1.slice(1,4))// it will give some part of the array or slice //you have to pass exclude to last element to get the (n+1)
   // it doesn't effect existing array
  // console.log(arr1)
   //console.log(arr1.splice(1,5,100,1505,1602,20));// it will replace the element from the array and
   // it will effect original array

   // console.log(arr1)

  //  console.log( typeof arr1.join(" "))// it is used to convert array to string and if we passed a
    // string then it will add that string between the element
    //console.log(arr1.concat(arr2))// it is used to concat two array or add more than two array
  //  console.log(arr1.concat(arr2).reverse())// it is used to reverse the array //it will not effect to existing array
  //  console.log(arr1.concat(arr2).sort())// it is used to sort the array
 
   //  console.log(arr2)
  //   console.log(arr1)
  //  console.log(arr1.sort())
   // console.log(arr1.reverse())
 //   console.log(arr1.map())
 //console.log(arr1.sort((a,b)=>a-b))//(a,b)=>a-b=>compratble function // sort call back function for ascending order and descending
 //order (a,b)=>b-a 


     /*================== Advance Array methods====================== */

    /*   1.forEach();
         2.map();
         3.filter();// it will return the whole array
         4.find();// it will give single element of the array
        5.reduce(); */
  /*       
  console.log(arr1.forEach((a,b,arr)=>{
     
        console.log(a)
       //return arr; // it will not return any value

  }));// forEach is used to iterate in array for each is a call back function . so call back '
  // accept function as argument  we need to pass  three parameter inside the argument function
 // 1st parameter is element 2nd parameter is index 3rd parameter is complete array*/
/*
 let uparr=arr1.map((a,b,arr)=>{
    return a+5;
 })
   console.log(uparr)
   //every thing same in foreach and map but map method return new updated array
  // it return value  and it accept the expression or variable and value but it does not
  accept any condition */


  let  filter=arr1.filter((a,b,arr)=>{
  
   return a;


  })// it is used to filter the array and it return value but it doesn't except and expression
  // it except only condition and it doesn't accept any expression                                                                         b 
   console.log(filter)

   // it is used to filter the array and it return value but it doesn't except and expression

  /* reduce()=> it will give sumation of the array
   reduce will accept two parameter 1 is call back initial value
   and call back accept two parameter accumalator, currentvalue */

     let arr6=[20,30,34,56,80,90];
    let result= arr6.reduce((accumalator,currentval)=>{

     return accumalator+currentval;

     },0)
        console.log(result)

        /* reduceRight()=> every thing is same but it will add right to left element */


   let result1=arr6.reduceRight((accumalator,currentval)=>{
     return accumalator+currentval;
   },0)
      console.log(result1);