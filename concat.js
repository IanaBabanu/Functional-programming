const concat = (array1, array2) => {

    return array2.reduce((accumulator, currentEl) => {
          
         return [...accumulator, currentEl];
 
    }, array1);
}

console.log(concat([1, 2, 3], [4, 5]));


