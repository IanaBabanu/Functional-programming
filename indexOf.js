const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

const indexOf = (element, start) => {
    let flag = true;

    return beasts.reduce((accumulator, currentEl, index) => {

         if (start == undefined) {

            // Apply simple search if there's no fromIndex
            if(currentEl == element && flag) {

                accumulator = index;
                flag = false;
    
             }

           // Search starting from index that was given 
         } else if(currentEl == element && flag && index >= start) {
            accumulator = index;
                flag = false;
         } 
         
         return accumulator;
      
    }, -1);
}

console.log(indexOf('bison'));
// expected output: 1

// start from index 2
console.log(indexOf('bison', 2));
// expected output: 4

console.log(indexOf('giraffe'));
// expected output: -1

 