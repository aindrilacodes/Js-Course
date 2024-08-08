const mv=["thor","ironman","loki","hulk"]
const dc=["superman","flash","batman"]
// mv.push(dc)
// console.log(mv[4][1]);
// const ms=mv.concat(dc)

// console.log(typeof ms);
const mdv=[...mv,...dc]
console.log(mdv);
const arr1=[1,2,3,[4,8,[7,8,9,],9],45,78,98]
const realrr=arr1.flat(Infinity);
console.log(realrr);
console.log(Array.isArray("Aindrila"))
console.log(Array.from({name:"Aindrila"}))//interesting
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));