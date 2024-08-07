
   function factorial(){
         let input=prompt("Please Enter Num: ");
       let num= parseInt(input);
        let result=1;       
        for( num=5;num>=1;num--){
        
             result=result*num
     
 
    }
       document.write(`Factorial of ${input} is`,result)

   }
   factorial()