const redux = require('redux');
const createStore = redux.createStore;

const inititalState = {
    counter: 0
};

//Reducer
const rootReducer = (state = inititalState, action) => {
    return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

//Dispatching action

//Subscription