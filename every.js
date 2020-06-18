
const every = (array, condition) => {

    return array.reduce((accumulator, currentEl) => {
         
         if(condition(currentEl)) {
            return true;
         }
         return accumulator;
 
    }, false);
}

console.log(every([1, 30, 39, 29, 10, 13], (currentValue) => currentValue < 40) );
// expected output: true

console.log(every([1, 30, 39, 29, 10, 13], (currentValue) => currentValue > 40) );
// expected output: false


 