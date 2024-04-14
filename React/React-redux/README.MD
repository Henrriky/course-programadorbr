# O que é o Redux?

- `npm i redux react-redux`
- Assim como o ContextAPI o Redux é um gerenciador de estados.
- Como que ele resolve?
    - Ele retira a responsabilidade da aplicação de gerenciar o estado, e coloca ela para um "Store".
- Para ele funcionar ele possui:
    - Store
        - Reducer: Manipula o estado e manda ele para a gente modificado.
            - Manipula o estado através do return
        - State: Estado da aplicação
    - Action: Alguma ação que será enviada para o reducer.
    - Dispatch: É um meio de campo entre o reducer e a action.

## Fluxo

- Cria-se o Reducer mapeando as actions
- Cria-se as Actions
- Cria-se o store passando o reducer criado
    ```js
        console.log(store.getState());

        //Toda vez que o store mudar ele imprime algo na tela
        store.subscribe( () => console.log(store.getState()))

        //Dispatch
        store.dispatch(incrementAction) //1
    
    ```
- Dispara o dispatch no store criado passando a action

# Redux thunk

- Permite que a gente execute uma função assincrona, e mesmo assim, quando ela terminar disparar a atualização do nosso estado.
- `npm i redux-thunk`