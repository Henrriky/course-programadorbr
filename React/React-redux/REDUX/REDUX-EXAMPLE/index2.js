const redux = require('redux');
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;

// ACTIONS
const incrementAction = payloadValue => { return { type: 'INCREMENT', payload: payloadValue || 1 }};
const decrementAction = payloadValue => { return { type: 'DECREMENT', payload: payloadValue || 1 }};

// REDUCER
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.payload
        case 'DECREMENT':
            return state - action.payload
        default:
            return state;
    }
}

// ACTIONS
const addItemAction = (item) => {
    return {
        type: 'ADD_ITEM',
        payload: item
    }
}

// REDUCER - MANIPULADOR DE ESTADO
const listReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload];
        default:
            return state;
    }
}

// ACESSANDO VARIOS REDUCERS
const allReducers = combineReducer({
    counter: counterReducer,
    list: listReducer
})

// STORE - ARMAZENANDO OS REDUCERS
const store = createStore(allReducers);

store.subscribe(() => console.log(store.getState()));
store.dispatch(addItemAction("Um novo item"))
store.dispatch(incrementAction(1));
store.dispatch(incrementAction(2));
store.dispatch(incrementAction(3));

