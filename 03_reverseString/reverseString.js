const reverseString = function(string) {

    // index = string.length
    
    let reversedString = '';

    for (i = string.length; i > 0; i--){

        let char = string.substr(i - 1, 1)

        reversedString += char;


        
    }

    console.log(reversedString);
    return reversedString;

};



// Algo
/*

Declarar index = string.length
Pegar o ultimo char com substr(index - 1, 1)
Armazenar let = char
A cada iteração index--
res += char enquanto index > 0

*/
// Do not edit below this line
module.exports = reverseString;
