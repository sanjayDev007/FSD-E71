import { legacy_createStore } from 'redux';

//  let initialValue = {
//     count: 0
// }
// function countReducer(prevState = initialValue, action) {
//     switch (action.type) {
//         case 'INCREMENT':
//             return { ...prevState, count: prevState.count + 1 };
//         case 'DECREMENT':
//             return { ...prevState, count: prevState.count - 1 };
//         default:
//             console.log("No action matched, returning previous state");
//     }
//     return prevState;
// }
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.payload;
        case 'DECREMENT':
            return state - action.payload;
        case 'RESET':
            return 0;
        default:
            return state;
    }
};

const store = legacy_createStore(counterReducer);

export default store;