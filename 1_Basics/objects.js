//singleton
//Object.create
//object literals
const mysym=Symbol("key1")
const jsuser={
    name:"Hitesh",
    age:18,
    [mysym]:"mykey",
    "full name":"Aindrila Dutta",
    location:"jaipur",
    isloggedIn:false,
    lastlogindays:["Monday","Saturday","Sunday"]
}
// console.log(jsuser.lastlogindays)
// console.log(jsuser["age"]);
// console.log(typeof (jsuser[mysym]));
// jsuser.name="rupsa";
// Object.freeze(jsuser)
// jsuser.age=58;
// console.log(jsuser);

jsuser.greeting=function() {
   console.log("Hello Js User")
}
jsuser.greeting2=function() {
    console.log(`Hello Js user, ${this.age}`)
 }
console.log(jsuser.greeting());
console.log(jsuser.greeting2());