const users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
    {id: 4, name: "John"},

  ];

const findIndex = (condition) => {
    let flag = true;

    return users.reduce((accumulator, currentEl, index) => {

         let result = condition(currentEl);

         if(result && flag) {

            accumulator = index;
            flag = false;

         }

         return accumulator;
      
    }, []);
}

console.log(findIndex( (item) => item.name == "Pete") );


 