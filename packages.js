//............for random numbers.............
const _= require('lodash');
const random_numbers = _.random(304, 6060);
console.log(random_numbers);
// ................function to run only once .....

const greetings= _.once(()=>{
    console.log('Asalaam Alaikum Warhamatullah ');
})
greetings();
greetings();
greetings();