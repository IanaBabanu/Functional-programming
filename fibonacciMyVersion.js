function fibonacci(index) {
    counter = index - 2;
    
    if (index == 0 || index == 1) {
        return index;
    } 
    else if(index == 2){
        return 1;
    } 
    else {
        calculate(counter);

    }

     function calculate (counter, current = 1, next = 1) {

            if(counter) {

                temp = current; 1

                current = next; 
                next = temp + next; 

                calculate(--counter, current, next);

            } else { 
                console.log('next',next);

                return next; 
            }

            return next;
    }
    
}

// 0 1 1 2 3 5 8 13 21 34 fibonacci
// 0 1 2 3 4 5 6 7  8  9  index
console.log(fibonacci(8));


