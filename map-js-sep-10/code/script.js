

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }



// arr.map(function(value, index) {
//     console.log(value);
// });



// let result = arr.filter(function(value, index) {
//     if (value > 10) {
//         return value;
//     }
// });

// const result = arr.reduce(function(accumulator, currentValue, index) {
    //     console.log(accumulator, currentValue);
    //     return accumulator + currentValue;
    // }, 0);
    
// console.log(result);
   
// var arr = [30,10,11,1,5]; 

// arr.forEach(function(value, index) {
//     console.log(value);
// });


//rest operator

function sum(...args) {
    console.log(args);
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }
    console.log(result);
}

sum(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20);