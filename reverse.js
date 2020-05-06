const pets = ['cat', 'dog', 'owl', 'rat'];

const reverse = (array) => {

    lastIndex = array.length -1;
    
    return array.reduce((newArray, currentEl, index) => {

         newArray[lastIndex] = currentEl;

         lastIndex--;

         return newArray;
 
    }, []);
}

console.log(reverse(pets));
