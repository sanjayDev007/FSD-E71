const useState = (initialValue) => {
    let value = initialValue; // local variable to hold the state value
    const setValue = (newValue) => {
        value = newValue;
        console.log("State updated to:", value);
    };
    return [value, setValue];// number, function
};


const [count, setCount] = useState("hello");
setCount("world");
console.log(count);