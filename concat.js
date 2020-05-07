const concat = (array, newEl) => {

    return array.reduce((newArray, currentEl, index) => {

        let otherArray = [...newArray, currentEl];

         if(index == array.length - 1) {
            otherArray = [...otherArray, newEl]; 
         }

         return otherArray;
 
    }, []);
}

console.log(concat([1, 2, 3, 4], 0));


 