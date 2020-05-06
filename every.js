const array = [1, 30, 39, 29, 10, 13];

const every = (condition) => {

    return array.reduce((accumulator, currentEl) => {

         let result = condition(currentEl);
         
         if(!result) {
             accumulator = false;
         }
     
         return accumulator;
 
    }, true);
}

console.log(every( (currentValue) => currentValue < 40) );
// expected output: true

console.log(every( (currentValue) => currentValue > 40) );
// expected output: false


 