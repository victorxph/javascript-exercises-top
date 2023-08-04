const sumAll = function(min, max) {

    if (min > max) {
    
        let rev = min;
        min = max;
        max = rev;
    
    }

    if (min < 0 || max < 0){

        return 'ERROR'
        
    }
    
    if (Number.isInteger(min) === false || Number.isInteger(max) === false){
        
        return 'ERROR'
        
    }
    
    let sum = 0;

    for (i = min; i <= max; i++) {
        
        sum += i 
        
    }

    return sum;

};

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
