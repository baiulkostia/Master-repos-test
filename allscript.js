const hoursNow = prompt('Скільки зараз годин?');

const secondInMinuts = 60;
const minutsInHour = 60;
const secondInHour = secondInMinuts * minutsInHour;

alert(hoursNow * secondInHour);
console.log('Код валідний');