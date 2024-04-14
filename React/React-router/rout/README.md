# Introdução

- O React Route serve para a gente conseguir navegar entre páginas com React

# Criando rotas

- `npm i react-router-dom`
- O `BrowserRouter` é responsável por gerenciar as rotas e determinar o que eles devem fazer, então toda a aplicação deve estar dentro do BrowserRouter
- O componente `Route` é responsável por criar uma rota. Agora devemos englobar os componetes que representam "rotas" no componente Route, após isso, é necessário colocar a propriedade `path`, especificado a url que vai permitir que o componete seja renderizado.
- Na nova versão do Route o componente é renderizado dessa forma:
    ```javascript
            <Router>
            <div className="App">
                <Nav/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/aulas" element={<Aulas/>}/>
                    <Route path="/sobre" element={<Sobre/>}/>
                </Routes>
            </div>
            </Router>
    ```
- O elemento é passado através da propriedade ao invés do filho. Além disso, na nova versão o erro que vamos tratar a seguir ja foi corrigido

# Switch

- Vimos que se utilizarmos o BrowserRouter puro a aplicação vai exibindo as outras rotas se ela tiver incluida o path, o que é um problema
- Para isso, devemos importar o componente Switch e englobar o Route

# Lidando com rotas inexistetes

```javascript
          <Route path="*">
            <div className="">
              <h1>Rota inexistente</h1>
            </div>
          </Route>

```

- Outra forma de criar o Route
    ```javascript
        <Route path="/" component={Home}/>
    ```

# Links

- Devemos importar a tag link do React Router
- ```javascript
    <li><Link to="/aulas">Aulas</Link></li>
    <li><Link to="/sobre">Sobre</Link></li>
  ```
- Existe um problema de compatibilidade com a versão 5.1.2 do React Route e Do React 18, o que faz com que a tag Link não funcione como deveria. Para resolver esse erro, devemos colocar o StrictMode dentro da tag BrowserRoute

# Use Match

- Trasformar cada aula em um link que leva para uma página da aula
- Para acessar a url `/aulas/0` ao invés do comportamento de ir para `/0`, nós devemos utilizar o `useRouteMatch`, que é um Hook do useRoute, e ele retorna a url a qual a aplicação se encontra.
```javascript
    const match = useRouteMatch()

    <ul className="aulas">
        {data.map(aula => {
            return <li key={aula.id}><Link className="link" to={`${match.url}${aula.id}`}>{aula.title}</Link></li>
        })}
    </ul>
```
- Agora o próximo passo é exibir os dados das aulas de acordo com o id acessado na url
- `match.url.slice(-1)` Pega o último caracter

# Use params

- Para conseguirmos acessar o parâmetro que está sendo passado na url podemos usar o useRouteMatch()
    ```javascript
          const match = useRouteMatch();
          useEffect(() => {
            console.log(ma)
          })
    ```
    - Será exibido no console o `path`, `url` e `params`
- Outra opção é o `useLocation()`, que nos permite acessar também as querys , como `aulas/1?src="youtube"`
- Nesse caso vamos utilizar o Hook `useParams`, que traz apenas os parâmetros
- Agora é só nós utilizarmos o `useEffect` para alterar o estado aula toda vez que o params mudar
```javascript
      const params = useParams();
      const [aula, setAula] = useState({});

      useEffect(() => {
        // let aula = data[params]
        setAula(data.filter(aula => aula.id == params.id)[0]);
      }, [params])
```

# Criando seu próprio Hook

- Podemos utilizar toda a nossa lógica usada no Aula.js e transformar ela em um CustomHook
- ```javascript
    function useAula() {
        const id = useParams().id;
        return data.filter(aula => aula.id == id)[0]
    }
  ```

# Use Location

- Para conseguirmos pegar as querys da url podemos fazer o seguinte:
    - Usar o `const location = useLocation();`, que vai retornar um atributo "search"