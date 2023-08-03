const repeatString = function(string, num) {

    let res = ''

    if (num < 0) {

        return 'ERROR'

    }

    for (i = 1; i <= num; i++) {

        res += string
        
    }
    
    // console.log(res)
    return res

};

repeatString('hey', 3)

// Do not edit below this line
module.exports = repeatString;
