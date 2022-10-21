//FizzBuzz

function FizzBuzz(){
    for (let i = 0; i <= 100; i++){
        if(i% 3 === 0 && i % 5 ===0){
            console.log(i, 'FizzBuzz'); 
        } else if (i%3 ===0){
            console.log(i, 'Fizz'); 
        } else (i % 5 ===0){
            console.log(i, 'Buzz')
        }
    }
}