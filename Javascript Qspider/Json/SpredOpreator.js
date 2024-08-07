// Spread Operator: is used to create a shallow copy of an array and Object
// it copies the values of the elements in the original array to a new array    

const originalArray=[1,2,3];
const array2 = [4, 5, 6];
 let [a,b ,...ab]=[...array2]
const copiedArray=[...originalArray];
//console.log(copiedArray)


const str="Vikash";
const characters=[...str];
console.log(characters)

const user={
    name:"Jhon",
    age:24,
    email:"vikash@gmail.com"
}

const user2={
     ...user,
    email:"vikashraj@gmail.com",
    isAdmin:true
}
//console.log(user2)

const person={
    name:"john",
    age:300,
    email: "john@example.com"
};
const {name:fullname,age:year,email:emailAddress}=person;
//console.log(fullname,year,emailAddress)

const fetchUserData = async () => {
   const response = await fetch('https://api.github.com/users');
  const  users = await response.json();

   users.forEach(user => {
       const {login,id, url}=user;
       console.log(`Name: ${login}, Age: ${id}, Email: ${url}`);
       
   });
 
};

fetchUserData();
