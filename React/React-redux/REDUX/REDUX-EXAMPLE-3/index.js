const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk').default;
const fetch = require('node-fetch');




//Action -> É a ação que será passada para o reducer executador, acompanha o tipo da ação e a carga/payload
const addItem = (item) => {
    return { 
        type: "ADD_ITEM",
        payload: item
    }
}

//Função que faz uma requisição para uma api e dispara a action de adição no reducer passado como parâmetro
const loadItemAndAdd = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                dispatch(addItem(json))
            })
    }
}


//Reducer -> É toda a parte da aplicação aonde vai ocorrer a manipulação e retorno do estado
const initialState = [ { id: 0, title: "Tarefa", completed: false}]
const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload]
        default:
            return state

    }
}

//Colocando o applyMidleware para utilizar o Thunk
const store = createStore(listReducer, applyMiddleware(thunk));

store.dispatch(loadItemAndAdd())
// store.dispatch(addItem({id: 1, title: "Novo item", completed: true}))



//Exibição dos valores
console.log(store.getState())
store.subscribe(() => { console.log(store.getState())});

