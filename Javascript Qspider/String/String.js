/* String   
we can create a string in three way
1. By using single quote
2. By using double quote
3. By using backtick ${}String inter polation




===================About string=======================

*/
/*
    let input=prompt("Enter Company name")

  let str="velocitai"
   console.log(str)
   let str1='velocitai';
   console.log(str1)
   let str2=`velocitai`
   console.log(str2)
   let str3=` ${input} is very famous compnay`// template string: when we use interpolation in string is 
   // as template string
   console.log(str3)
   //===================String length=======================
   console.log(str.length)// is a property and insted of this all are method
   //===================String concatination=======================
   let str4="velocitai"
   let str5="is very famous compnay"
   console.log(str4.concat(str5))
   //===================String reverse=======================
   console.log(str4.concat(str5).reverse())
   //===================String toUpperCase=======================
   console.log(str4.concat(str5).toUpperCase())
   //===================String toLowerCase=======================
   console.log(str4.concat(str5).toLowerCase())
   //===================String indexOf=======================
   console.log(str4.concat(str5).indexOf("v"))
   //===================String lastIndexOf=======================
   console.log(str4.concat(str5).lastIndexOf("v"))
   //===================String charAt=======================
   console.log(str4.concat(str5).charAt(0))
   //===================String charCodeAt=======================
   console.log(str4.concat(str5).charCodeAt(0))
   //===================String slice=======================
   console.log(str4.concat(str5).slice(0,5))
   //===================String substring=======================
   console.log(str4.concat(str5).substring(0,5))
   //===================String split=======================
   console.log(str4.concat(str5).split(" "))
   //===================String replace=======================
   console.log(str4.concat(str5).replace("v","V"))
   //===================String search=======================
   console.log(str4.concat(str5).search("v"))
   //===================String match=======================
   console.log(str4.concat(str5).match("v")) */
 let str="velocitai"
 //  console.log(str.slice(-9,-5))// starting index and ending indedx it will not consider  ending index
// it will accept postive and  negative index
  // console.log(str.substring(5,9));// substring will not accept negative index
   
 //  console.log(str.substr(5,2));// starting index an length of subtring
 //  console.log(str.substr(-5,2));// starting index an length of subtring
 //  console.log(str.substr(5));// starting index an length of subtring (------ depricated : no laonger use)
  

/*
  let str2=" Saas     is a css framework"
  console.log(str2.replace("is","are"));
  let str3="java and java script both r diff"
  console.log(str3.replace("java","python"));// it will replace only one occurence
  console.log(str3.replaceAll("java","Python"))// it is used to replace all occurnece
  console.log(str3.replace(/java/g,"Python"))// it is used to replace all occurence
     */
/*
  console.log(str.concat(str2 ,str3))
  console.log(str.concat(str2 ,str3).split(" "))
  console.log(str.concat(str2 ,str3).split(" ").join(" "))
  */
 let str2="saas is a css framework"
  console.log(str2)
  console.log(str2.trim())


  let mobileno="8953710180"
   let nos=mobileno.slice(6)
  console.log(nos.padStart(10,"*"))// it will add 0 in
  console.log(nos.padEnd(10,"*"))// it will add 0 in
 
    console.log(mobileno.charAt(7))// we can't pass negative index in char att
    console.log(String.fromCharCode(mobileno.charCodeAt(2)));
    



