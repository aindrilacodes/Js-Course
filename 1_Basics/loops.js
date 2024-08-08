
// for (let index = 0; index < 5; index++) {
//     const element=index
//     console.log(element);
    
// }
// console.log("\n");

// //for of
// const arr=[1,2,4,8,9]
// for (const val of arr) {
//     console.log(val);
    
// }
// console.log("\n");
// const greetings="Hello JIII"
// for (const greet of greetings) {
//     console.log(`the characters are ${greet}`);
    
// // }
// // //maps
// const map=new Map()
// map.set("IN","INDIA")
// map.set("UK","UNITED KINGDOM")
// map.set("EU","EUROPE")
// console.log(map);
// //destructuring it
// for (const [key,value] of map) {
//     console.log(key);
    
// // }
// const myObject={
//     js:"Javascript",
//     cpp:"C++",
//     py:"Python",
//     java:"JAVA"
// }
// for (const key in myObject) {
//    console.log(`${key} shortcut for ${myObject[key]}`); 
// }
// const prog=["c","java","python","js","golang"]
// for (const key in prog) {
//  //   console.log(prog[key]);
    
// }
// //not possible for for in loop
// for (const key in map) {
//   //  console.log(key);
    
// }
// //for each loop
//  const friends=["Monica","Ross","Chandler","Joey","phoebe","Rachel"]
// friends.forEach( function name(item) {
//     console.log(item);
// } 
// )
// friends.forEach((f,index,arr)=> {
//     console.log(f,index,arr);
    
// });
// function printme(item) {
//     console.log(item);
    
// }
// friends.forEach(printme)
const mycode=[
    {
        language:"Javscript",
        ext:"js"
    },
    {
        language:"Python",
        ext:"py"
    },
    {
        language:"C++",
        ext:"cpp"
    }

]
mycode.forEach((item) =>{
    console.log(item.language);
    
})