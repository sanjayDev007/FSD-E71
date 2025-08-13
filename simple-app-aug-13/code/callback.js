// console.log("1")
// setTimeout(()=>{
//     for (let i = 0; i < 500000; i++) {}
//     console.log("3");
// }, 0);
// console.log("2")


//use case 1
//Dev 1
// function onClick(callback) {
//     let data = {
//         x: 10,
//         y: 20
//     }
//     callback(data);
// }

// //dev 2
// onClick(function (data) {
//     console.log(data);
//     console.log("Callback executed");
// });


//use case 2
//dev 1
function getData(callback) {
    setTimeout(() => {
        let data = {
            name: "John",
            age: 30
        };
        if (data) {
            callback(data, null);
        } else {
            callback(null, "Error fetching data");
        }
    }, 2000);
}

//dev 2
getData(function (data, error) {
    if (error) {
        console.error(error);
    }
    else {
        console.log("Data received:", data);
        console.log("Name:", data.name);
        console.log("Age:", data.age);
    }
});