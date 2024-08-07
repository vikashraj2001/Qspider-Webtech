let emp1={
    empName:"vikash Sing",
    empid:101,
    salary:3000,
    age:30


}
let emp2={
    empName:"Abhi Singh",
    empid:102,
    salary:3000,
    age:30


}
let emp3={
    empName:"Sachin singh",
    empid:103,
    salary:3000,
    age:30


}
  function printData(a,b,c){
    console.log(a,b,c);
    console.log(this.empName);
    console.log(this.empid);
    console.log(this.salary);
    console.log(this.age);

  }
  /*   Binding with arrow function */
     let arrow=(a,b)=>{
          console.log(this.empName)
          console.log(this.empid)
          console.log(this.salary)
          console.log(this.age)



     }
      console.log(arrow.call(emp1,20,30))
       console.log(arrow.bind(emp1))
        

//    printData.call(emp1,10,20,30)
//    printData.call(emp2)
//    printData.call(emp3)
//   console.log(printData.call(emp1));
// console.log(printData.apply(emp1,[10,20,30]));

// console.log(printData.bind(emp1)(10,'Vikash',30));

  //  printData.bind(emp1)


  /*  Example of binding by using return */
    // Implicit return with arrow function
        

    let a=(a,b)=>(console.log(a,b),a+b)

     console.log(a(10,30))
     
    // w