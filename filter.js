const users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];

const filter = (condition) => {

    return users.reduce((newArray, currentEl) => {

         let result = condition(currentEl);
         
         if(result) {
             newArray.push(currentEl);
         }
     
         return newArray;
 
    }, []);
}

console.log(filter( (item) => item.id < 3) );


 