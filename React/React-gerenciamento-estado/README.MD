# Problemas gerados pelo comportamento padrão

- Quando a gente usa um estado, a gente sempre trata ele em um componente, caso esse Estado precisasse ser acessado pelo componente filho nós passariamos ele como proprieade para o componente filho, e muitas vezes isso pode acarretar em problemas.
    ```jsx
            const [count, setCount] = useState(0)

            return (
                <div>
                    <div>{count}</div>
                    <button onClick={() => setCount(previous => previous-1)}>-</button>
                    <button onClick={() => setCount(previous => previous+1)}>+</button>
                </div>
            )
    ```
- Caso a gente queira usar o estado count dentro do componente Contador em um componente irmão dele nós não somos capazes de fazer isso. Uma maneira de resolver isso é subir o estado para o App, para assim passar ele para os dois filhos, porém isso é ruim para a regra de negócio e para manutenção do código.

# Context API
- Uma das soluções para isso é a utilização do `ContextAPI`. E o que ele faz?
    - Ele vai criar um contexto que vai ter os componentes Header e Contador, e o nosso estado passará a ser gerenciado pelo nosso contexto, ou seja, ambos terão acesso ao nosso estado
- Como fazer isso?
    - Crie um novo arquivo, como por exemplo `CounterContext.js`
    - Importe o `useState e o createContext`
    - ```javascript
        export const CounterContext = createContext();
        export function CounterProvider(props) {
            return (
                <CounterContext.Provider>
                    {props.children}
                </CounterContext.Provider>
            )
        }
      ```
    - ```javascript
      <CounterProvider>
            <Header></Header>
            <Counter></Counter>
      </CounterProvider>
      ```
    - Agora caso a gente coloque um valor no componente <CounterContext.Provider> nós vamos conseguir acessar esse valor nos seus filhos dessa forma:
        ```javascript
            //Criamos um contexto lá atras
            export const CounterContext = createContext();

            //Adicionamos filhos ao contexto quando o componente provider é chamado, e passamos um valor do estado no contexto
            const [count, setCount] = useState(0);
            <CounterContext.Provider value={[count, setCount]}>
                {props.children}
            </CounterContext.Provider>

            //Criamos os filhos do CounterProvider, aonde poderão acessar o contexto
            <CounterProvider>
                <Header></Header>
                <Counter></Counter>
            </CounterProvider>

            //Acessamos dentro de um dos filhos o valor passado por contexto
            const value = useContext(CounterContext)
        ```