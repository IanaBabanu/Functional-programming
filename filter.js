
const filter = (array, condition) => {

    return array.reduce((newArray, currentEl) => {

         let result = condition(currentEl);
         let tempArray = [...newArray];

         if(result) {
             tempArray.push(currentEl);
         }
     
         return tempArray;
 
    }, []);
}

console.log(filter([
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ], (item) => item.id < 3) );


 