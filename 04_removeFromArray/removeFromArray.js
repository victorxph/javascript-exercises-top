let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const removeFromArray = function(array) {

    for (i = 1; i <= arguments.length; i++){

        let toBeRemovedIndex = arguments[i];

        let index = array.indexOf(toBeRemovedIndex);

        if (index !== -1){

            array.splice(index, 1)

        }
        
    }
    
    // console.log(array)
    return array

};


// Do not edit below this line
module.exports = removeFromArray;
