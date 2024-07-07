console.log("Riya");

const marvel_heroes= ["riya","rohit","rishiraj"]
const my_heroes= ["ronak","tani","bubun"]

const newheroes= [...marvel_heroes,...my_heroes]//in this ... dots are used to merge the array .
console.log(newheroes);

const tall=[1,2,3["riya"],7,8,[9,7,6]]
const tall1=(tall.flat(Infinity));
console.log(tall1);

console.log(Array.isArray("Riya"))//it lets to know though the data is present or not.
console.log(Array.from("riya"));//it spreads or convert an object into array.
console.log(Array.from({Name:"riya"}))//in this case it is not poissible to convert it into an array so it does't take  place.

let score1=200
let score2=300
let score3=500
console.log(Array.of(score1,score2,score3));//In this it just merges the elements..
