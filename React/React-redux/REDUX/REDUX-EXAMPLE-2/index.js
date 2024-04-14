const redux = require('redux');
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;

const { incrementAction, decrementAction } = require('./actions/CounterActions')
const { addItemAction } = require('./actions/ListActions');

const counterReducer = require('./reducers/CounterReducer')
const listReducer = require('./reducers/ListReducer');

//Combinando os dois reducers para gerenciar o estado de ambos através do store
const allReducers = combineReducer({
    counter: counterReducer,
    list: listReducer
})

//Criando um store que armazena dois reducers, logo dois store.
const store = createStore(allReducers);

//Se inscrevendo nas mudanças e pegando o estado de ambos (Objeto com os dois estados)
store.subscribe(() => console.log(store.getState()));

//Se inscrevendo nas mudanças e pegando o estado apenas de um reducer
store.subscribe(() => console.log(store.getState().counter));
store.subscribe(() => console.log(store.getState().list));

store.dispatch(addItemAction("Um novo item"))
store.dispatch(incrementAction(1));
store.dispatch(incrementAction(2));
store.dispatch(incrementAction(3));
store.dispatch(decrementAction(3));

