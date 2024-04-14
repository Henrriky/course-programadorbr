const redux = require('redux');

//Store - Responsável por armazenar o estado
const createStore = redux.createStore;

//Uma ação tem um tipo e a carga - Nesse caso a ação é Incremento, do tipo increment
const incrementAction = { type: 'INCREMENT'}
const decrementAction = { type: 'DECREMENT'}

//Reducer
function counterReducer(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state;
    }
}

//Criando store, o createStore recebe um argumento, que é exatamente o nosso reducer. E recebe outro argumento 
const store = createStore(counterReducer);

console.log(store.getState());

//Toda vez que o store mudar ele imprime algo na tela
store.subscribe( () => console.log(store.getState()))

//Dispatch
store.dispatch(incrementAction) //1
store.dispatch(incrementAction) //2
store.dispatch(incrementAction) //3

//Carga - Queremos agora incremental de 2 em 2
const incrementActionPayload = { type: 'INCREMENT', payload: 2}
function counterReducerPayload(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.payload
        case 'DECREMENT':
            return state - action.payload
        default:
            return state;
    }
}

//Ao invés de ficar criando várias action nós vamos fazer o seguinte:
//Se o valor não for informado será 1 o padrão
const incrementActionPayloadAutomatic = (value) => { return { type: "INCREMENT", payload: value || 1}}
store.dispatch(incrementActionPayloadAutomatic(2)); //2
store.dispatch(incrementActionPayloadAutomatic(2)); //4
store.dispatch(incrementActionPayloadAutomatic(2)); //6
store.dispatch(incrementActionPayloadAutomatic()); //1
