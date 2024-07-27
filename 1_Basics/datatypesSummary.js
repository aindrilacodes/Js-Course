//the datatypes are classified based on how they are stored in the memory and how they can be accessed
/* Primitive datatypes and non-primitive(referenced)
7 types:String,Number,Boolean,Null,Symbol,Undefined,bigint(they are call by value)
reference types:memory refererence are accessed
Array,Objects,Functions
Js is dynamically typed language
*/
const id=Symbol('123')
const id1=Symbol('123')
console.log(id==id1);
//Array,Objects and Functions
const heros=["thanos","ironman","hulk"]
let def={
    name:"Aindrila",
    age:21
}
console.log(def);
const myFunc=function() {
    console.log("hello world");
}
console.log(typeof myFunc);