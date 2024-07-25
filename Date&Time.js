const time = new Date()
console.log(typeof time);
console.log(time);
console.log(time.toDateString())
console.log(time.toJSON())
console.log(time.toTimeString());
console.log(time.toLocaleDateString());
console.log(time.toLocaleTimeString());
console.log(time.getFullYear());
console.log(time.getDate());
console.log(time.getDay());
console.log(time.getHours());

const newTime = new String(time)
console.log(newTime);