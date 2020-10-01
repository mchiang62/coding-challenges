const fizzBuzz = (n) => {

    //no objects or numbers or arrays to iterate over, so a manual for loop needs to be created
    //the order is very important
    //straight forward and 

    for (let i = 1; i <= n; i++) {

        //is the number a multiple of 3 and 5?

        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzBuzz")
        } else if (i % 3 === 0) {
            console.log("fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }

    }

}

fizzBuzz(50)