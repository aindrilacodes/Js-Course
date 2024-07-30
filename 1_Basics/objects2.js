const tinderUser=new Object()//singleton object
const user={}

tinderUser.id='123anc'
tinderUser.name="Sam"
tinderUser.isLoggedIn=true;
// console.log(tinderUser);
// console.log(user);
const reguser={
email:"someuser.com",
"fullname":{
    username:{
        fname:"Aindrila",
        lname:"dutta"
    }
}
}
//console.log(reguser.fullname?.username.fname);
const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}
//const ob3={obj1,obj2}
//const ob3=Object.assign({},obj1,obj2)//{}for another object that is source
const ob3={...obj1,...obj2}//mostly used spread process
console.log(ob3);
//for values that comes from database
const user1=[1,
    {id:1,
    email:"aindmfd.com"}
]
user1[1].email
// console.log(tinderUser)
// console.log(Object.keys(tinderUser));//imp
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));