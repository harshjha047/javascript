const num = new Number(100)
console.log(num)

// *************************MATHS************************

console.log(Math)
console.log(Math.sqrt(16))
console.log(Math.floor(4.7))
console.log(Math.ceil(4.3))
console.log(Math.round(4.5))
console.log(Math.min(1,2,3,4,5));
console.log(Math.max(1,2,3,4,5));

// ************************************************
console.log(Math.random());
console.log(Math.random()*10+1); // +1 to awoid 0
console.log(Math.round(Math.random()*10)+1);
const min = 10
const max = 100
console.log(Math.round(Math.random()*(max-min+1))+min);