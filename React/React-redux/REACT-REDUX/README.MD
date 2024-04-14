# React Redux

- No React nós precisamos instalar algumas dependências para que o redux funcione
    - `npm i redux`
    - `npm i react-redux`
- Primeiro passo: 
    - Crie o reducer 
        ```javascript
            export default function counterReducer(state = 0, action) {
                switch (action.type) {
                    case 'INCREMENT':
                        return state + 1;
                    case 'DECREMENT':
                        return state - 1;
                    default: 
                        return state;
                }
            }
        ```
- Segundo passo: 
    - Vá no arquivo que irá conter os componentes de Cabeçalho e Contador, nesse caso o app.js e importe o `createStore` do Redux e o arquivo `Provider` do React-Redux. Além disso, é importante importar o `counterReducer` criado anteriormente, pois é através dele que o estado vai ser alterado
    - O arquivo Provider é o que vai permitir que um estado seja alterado dentro dos componentes que sejam filhos desse provider.
    - ```javascript
        import { createStore } from 'redux'
        import { Provider } from 'react-redux'
        import CounterReducer from './reducers/counterReducer.js'
      ```
- Terceiro passo: 
    - Crie um `store` no arquivo principal, passando o reducer, ou lista de reducers como parâmetro:
        ```javascript
            const store = createStore(counterReducer)
        ```
    - Englobe os componentes Counter e Header no componente `Provider` importado do react-redux, passando como propriedade o store
        ```javascript
            <Provider store={store}>
                <Header>
                <Counter>
            </Provider>
        ```
- Quarto passo:
    - Agora para ter acesso ao estado do contador, vamos passar ter que importar os Hooks `useSelector` e `useDispatch`
    - Para acessar o estado e disparar uma action para o reducer faça o seguinte
        ```javascript
        const counter = useSelector(state => { return state });

        const dispatch = useDispatch();
        dispatch({type: 'DECREMENT'});  
        
        ```
