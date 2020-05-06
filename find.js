const users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
    {id: 4, name: "John"},

  ];

const find = (condition) => {
    let flag = true;

    return users.reduce((accumulator, currentEl) => {

         let result = condition(currentEl);

         if(result && flag) {

            accumulator = currentEl;
            flag = false;

         }

         return accumulator;
      
    }, []);
}

console.log(find( (item) => item.name == "John") );


 