const user={
    username:"hitesh",
    price:799,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`)
        //console.log(this);
        
    }
}
user.username="sam"
user.welcomeMessage()
console.log(this);//this is empty i.e in nodejs the object refers to nothing
//this works with objects
// function chai() {
//     let username="hitesh"
//     console.log(this);
    
// }
// chai()
// const chai=function(){
//     let username="aindrila"
//     console.log(this.username);
    
// }
// console.log(chai());
const chai=()=>{
    let username="aindrila"
    console.log(this);
    
}
chai();
/* Arrow function**********/
// const addnums=(num1,num2)=>{
//     return num1+num2
// }
//const addnums=(num1,num2)=>(num1+num2) //implicit return
const addnums=(num1,num2)=>({username:"hitesh"})//object return
console.log(addnums(8,9));

const myArray=[5,9,105,7]
