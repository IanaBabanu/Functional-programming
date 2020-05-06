const contcat = (array, newEl) => {

    return array.reduce((newArray, currentEl, index) => {

         newArray[index] = currentEl;

         if(index == array.length - 1) {
            newArray[index + 1] = newEl;
         }

         return newArray;
 
    }, []);
}

console.log(contcat([1, 2, 3, 4], 0));

 