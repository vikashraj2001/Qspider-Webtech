/*
Modules:it is used to share the code in multiples files
Modules are used to organize the code in a program
we can export variable and function


two types of Export Statement
1.Named Export: 
  -> in name export while exporting in code we used export keyword
  -> while importing we have to use curly braces
  -> while importing we should have same name
  -> in one file we can use multiple named export statement

2.Default Export
-> in default export while exporting in code we used export keyword and default keyword;
-> while importing we don't have to use curly braces
-> while importing we can use any name
-> we can't use multiple default export statement
-> we can use any name




*/

 
  export function sum(a,b){
        return a+b;
}
//console.log(sum(20,30))
  export function sub(a,b){
    return a-b;
}