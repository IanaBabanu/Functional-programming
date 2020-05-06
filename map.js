const array = [1, 4, 9, 16];

const map = (condition) => {

    return array.reduce((accumulator, currentEl, index) => {

         let result = condition(currentEl);
         
         accumulator[index] = result;
     
         return accumulator;
 
    }, []);
}

console.log(map( (x => x * 2) ));
// expected output: Array [2, 8, 18, 32]


 