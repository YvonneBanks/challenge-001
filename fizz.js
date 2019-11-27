function fizzBuzz(array1, array2){
    let totalLength = array1.length + array2.length;
        if(totalLength % 15 ===0) console.log('FizzBuzz');
        else if (totalLength % 3 === 0) console.log('Fizz');
        else if (totalLength % 5 ===0) console.log('Buzz');
        else console.log (totalLength);
    

}
fizzBuzz([20,80], [40,67]);