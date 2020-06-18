const concat = (array1, newEl) => {

    if(Array.isArray(newEl)) {
        return newEl.reduce((accumulator, currentEl) => {
          
            return [...accumulator, currentEl];
    
       }, array1);
    } else return [...array1, newEl]; 
   
}

console.log(concat([1, 2, 3], 4));
console.log(concat([1, 2, 3], [4, 5]));


