const leapYears = function(year) {

    if (year % 400 === 0) {
        
        console.log('case 1:', year % 400 === 0);
        return true

    } else if (year % 100 === 0 && !year % 400 === 0) {
        
        console.log('case 2:', year % 100 && !year % 400 === 0);
        return false

    } else if (year % 4 === 0) {

        console.log('case 3:', year % 4 === 0);
        return true

    } else {

        return false

    }
};

console.log(leapYears(1996));

/*
Must be:
Divisivel por 4


not:
Divisivel por 100 a menos que seja divisivel por 400
*/

// Do not edit below this line
module.exports = leapYears;
