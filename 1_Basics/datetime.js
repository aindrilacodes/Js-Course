// dates 
let myDate=new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);
// let mycreatedDate=new Date(2023,0,23)
// let mycreatedDate=new Date(2023,0,23,5,3)
// let mycreatedDate=new Date("2023-01-14")
let mycreatedDate=new Date("12-14-2023")
console.log(mycreatedDate.toLocaleDateString());
let myTimeStamp=Math.floor(Date.now()/1000);
console.log(myTimeStamp);
console.log(mycreatedDate.getTime());
let newDate=new Date();
console.log(newDate.getTime());
console.log(newDate.getMonth()+1);
// `${newDate}is the time`
newDate.toLocaleString('default',{
    weekday:"long",
})