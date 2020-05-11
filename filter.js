
const filter = (array, condition) => {

    return array.reduce((accumulator, currentEl) => {

         let result = condition(currentEl);

         if(result) {
             return [...accumulator, currentEl];
         }
     
         return accumulator;
 
    }, []);
}

console.log(filter([
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ], (item) => item.id < 3) );


 