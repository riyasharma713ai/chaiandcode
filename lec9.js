console.log("riya");
console.log("Data types");
console.log("There are two types of data types:Primitive and non-Primitive");
//Primitive
console.log("There are 7 types of datatyes in primitive datatypes:string,boolean,number,null,bigInt,symbol,undefined");
//undifined
console.log("There are 3 types of datatypes in non-primitive datatypes :function,object,array");
const score=100;//we don't need to declear datatype in java ..it itself identifies the datatype and gets the output..
const scorevalue=100.3
const isloggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId =Symbol('123')
console.log(id===anotherId);
const bignumber = 9876403778389875n
//we use "n"at the end of bigint as it is a rule of java while using bigint.

//ARRAY,OBJECT,FUNCTION


//array
//for array we use square brackets[]
const heroes=["saktiman","naagraj","doga"];

//object
//for object we use curle brackets{}and  comma, at the end of every line
const riya={
    name: "riyaa",
    age :22,
    place :"west bengal",
}


//function
//for function we use circular brackets and curle bracets together(){}
 
const variableName =function(){
    console.log("Hello world");
}

variableName()
variableName()
variableName()
variableName()
variableName()
variableName()


console.log(typeof variableName);
//THe datatype of null is object
