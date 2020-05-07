
const every = (array, condition) => {

    return array.reduce((accumulator, currentEl) => {

         let result = condition(currentEl);
         let temp = accumulator;       
         
         if(!result) {
            temp = false;
         }
         return temp;
 
    }, true);
}

console.log(every([1, 30, 39, 29, 10, 13], (currentValue) => currentValue < 40) );
// expected output: true

console.log(every([1, 30, 39, 29, 10, 13], (currentValue) => currentValue > 40) );
// expected output: false


 