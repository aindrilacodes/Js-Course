const mynums=[1,2,4]
// const mytot=mynums.reduce(function (acc,curr) {
//     console.log(`${acc} and ${curr}`);
    
//     return acc+curr
// },0)
// mytot=mynums.reduce((acc,curr)=>(acc+curr),0)
// console.log(mytot);
const shoppingcart=[
    {
        subject:"Js",
        price:1999
    },
    {
        subject:"Backend Development",
        price:8999
    },
    {
        subject:"Data Science for Beginners",
        price:6999
    },

]
const total=shoppingcart.reduce((acc,item)=>(acc+item.price),0)
console.log(total);
