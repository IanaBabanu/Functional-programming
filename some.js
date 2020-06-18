const array = [1, 2, 3, 4, 5];

const some = (condition) => {

    return array.reduce((accumulator, currentEl) => {

         let result = condition(currentEl);
         
         if(result) {
             accumulator = true;
         } 
     
         return accumulator;
 
    }, false);
}

console.log(some( (element) => element % 2 === 0) );
// expected output: true

console.log(some( (element) => element === 0) );
// expected output: false


 