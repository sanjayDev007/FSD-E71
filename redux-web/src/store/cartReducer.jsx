
const cartReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD':
            // Check if item already exists in cart
            const existingItem = state.find(item => item.id === action.payload.id);
            if (existingItem) {
                // If exists, increment quantity
                return state.map(item => 
                    item.id === action.payload.id 
                        ? { ...item, quantity: (item.quantity || 1) + 1 }
                        : item
                );
            }
            // If new item, add with quantity 1
            return [...state, { ...action.payload, quantity: 1 }];
        case 'REMOVE':
            return state.filter(item => item.id !== action.payload);
        case 'SET_QUANTITY':
            return state.map(item => item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item);
        case 'CLEAR':
            return [];
        default:
            return state;
    }
};
export const addToCart = (item) => ({
    type: 'ADD',
    payload: item
});

export const removeFromCart = (id) => ({
    type: 'REMOVE',
    payload: id
});

export const clearCart = () => ({
    type: 'CLEAR'
});

export const setQuantity = (id, quantity) => ({
    type: 'SET_QUANTITY',
    payload: { id, quantity }
});

export default cartReducer;
