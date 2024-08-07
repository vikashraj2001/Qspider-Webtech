/* how to fetch() data in javascript
   fetch() is a function in javascript which is used to fetch data from server
   we can fetch two ways 
   1. by using Promises
   2. by using async and await
   
   Async Keyword is use to make any code Asynchronous
  
 
   const fetchData=fetch("https://api.github.com/users").then((res)=>{
  //   console.log( res)
      return res.json()//
         
   }).then((data)=>{
    console.log(data)
   }) */
 
     const fetchdata=async()=>{
        const res=await fetch("https://jsonplaceholder.typicode.com/todos")//it will return response     
        const data=await res.json();

        data.forEach((elements) => {
            const {userId,id,title}=elements;
            console.log(`UserId: ${userId}, Id: ${id}, Title: ${title}`);
            
        });
     }
       fetchdata();

       