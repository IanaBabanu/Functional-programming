
const find = (array, condition) => {
    let flag = true;

    return array.reduce((accumulator, currentEl) => {

         let result = condition(currentEl);
         let temp = {...accumulator};

         if(result && flag) {

          temp = currentEl;
            flag = false;

         }

         return temp;
      
    }, []);
}

console.log(find( [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"},
  {id: 4, name: "John"},
] ,(item) => item.name == "John") );


 