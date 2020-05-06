compose = (...functions) => {

    return (array) => {
         
        let newArray = array;

        for(const func of functions) {
            newArray = newArray.map(func);
        }

        return newArray;
    }
}


const multiplyBySix = compose(x => x*2, x => x*3);

console.log(multiplyBySix([1, 2, 3]));

