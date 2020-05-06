compose = (...functions) => {

    return (array) => {
         
        let newArray = array;

        for(const func of functions) {
            newArray = func(newArray);
        }

        return newArray;
    }
}

const multiplyByTwo = (array) => {
    return array.map((x) =>  x *2);
}

const filterFive = (array) => {
    return array.filter((x) =>  x > 5);
}

const multiplyBySix = compose(multiplyByTwo, filterFive);

console.log(multiplyBySix([1, 2, 3]));

