// const friends=["Monica","Ross","Chandler","Joey","phoebe","Rachel"]
// const val=friends.forEach((item)=>{
//     console.log(item);
//     return item
// })
// console.log(val);
//filtering
const nums = [5, 61, 8, 2, 6, 18, 6]
// const newnums=nums.filter((num)=>num>6)
// console.log(newnums);
// const newnums1=nums.filter((num)=>{
//     if(num>6)
//     return num
// })
// console.log(newnums1);
// const nnums=[]
// nums.forEach((n)=>{
//     if(n>6)
//     {
//         nnums.push(n)
//     }
// })
// console.log(nnums);
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];
//const userBooks=books.filter((bk)=>(bk.genre==="History"))
const userBooks1 = books.filter((bk) => (bk.publish >= 1995 && bk.genre == "Science"))
//console.log(userBooks1);
const munum = [5, 7, 6, 9, 3, 4]
const n = munum.map((num) => num + 10)
const newnums = munum
    .map((num) => num * 10)
    .map((num) => num * 2)
    .filter((num) => (num > 120))
console.log(newnums);

