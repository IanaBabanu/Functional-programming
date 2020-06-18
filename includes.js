const pets = ['cat', 'dog', 'owl', 'rat'];

const includes = (pet) => {

    return pets.reduce((accumulator, currentEl) => {

            if(currentEl === pet) {

                accumulator = true;
    
             }
         
         return accumulator;
      
    }, false);
}

console.log(includes('cat'));
// expected output: true

console.log(includes('at'));
// expected output: false


 