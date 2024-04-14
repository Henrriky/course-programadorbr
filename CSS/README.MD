# SELETORES

- `header + p` -> Pega o elemento p que for irmão direto do header
- `header ~ p` -> Pega todos os elementos p que estiverem no mesmo alinhamento do header e depois dele.
- `header > p` -> Pega os elementos p que forem filhos diretos do header
- `header p` -> Pega todos os elementos p dentro de header
- `[width] {} ` -> Pega todos os elementos que possuem um width
- `[width="500"] {} ` -> Pega todos os elementos que possuem um width de 500
- `[title~="titulo"]` -> Pega todos os elementos que possuem como titulo a palavra
- `[title^="t"]` -> Pega todos os elementos que possuem um title que começa com 't'
- `[title$="1"]` -> Pega todos os elementos que possuem um title que termina com '1'
- `[title*="1"]` -> Pega todos os elementos que possuem um title que possui o número '1'
- EXEMPLO
```javascript
    let titulos = document.querySelector("[title]");
    let titulos = document.querySelectorAll("[title]");
```

# PSEUDO-CLASS

- `input:focus` -> Aplica regra para quando o input ganhar foco;
- `li:first-child` -> Aplica regra para o primeiro filho de um elemento acima dele;
- `li:last-child` -> Aplica regra para o último filho de um elemento acima dele;
- `li:first-of-type` -> Aplica regra para o primeiro filho do tipo de um elemento acima dele;
- `li:last-of-type` -> Aplica regra para o último filho do tipo de um elemento acima dele;
- `li:nth-child(2)` -> Aplica a regra para o filho especificado
- `li:nth-of-type` -> Aplica a regra para o filho especificado do tipo de elemento

# TRANSFORMAÇÕES

- `transform: rotate(45deg)` -> Inclina a imagem
- `transform: scale(2)` -> Aumentar o tamanho da imagem
- `transform: skew(40deg)` -> Estica a imagem de acordo com o grau

# COMPATIBILIDADE

- [shouldiprefix.com]
- [https://caniuse.com]

# VARIAVEIS CSS
 
```css
:root {
    --var-color: aqua;
}
```

# FLEXBOX

- `flex-direction: row` -> Elementos ocupam 100% da altura e são distribuidos horizontalmente
- `flex-direction: column` -> Elementos ocupam 100% da largura e são distribuidos verticalmente;
- O flexbox permite que os nossos elementos se tornem flexíveis, ou seja, caso um elemento tenha 200px de largura e a tela atinja 100px de largura ele vai se adaptar a essa propriedade.
- `flex-wrap: wrap` -> Faz com que ele respeite a largura do elemento.
- `flex-flow: column wrap` -> Junção de flex-direction e flex-wrap
- `justify-content: center` -> Faz com que os elementos dentro do flex-box fiquem ao centro do eixo x;
- `align-items: center` -> Faz com que que os elementos dentro do flex-box fiquem ao centro do eixo y;
    - Quando aplicamos o align-items os elementos param de ter o comportamento de ocupar 100% do elemento pai.
- `align-content: center` -> Faz com que os elementos não tem espaço entre as linhas que são geradas pelo flex-wrap;

- `flex-shrink` -> O flexbox se adapta automaticamente por causa dessa propriedade, a mesma pode receber:
    - `flex-shrink: 0` -> Os elementos não vão se encolher
    - `flex-shrink: 1` -> Os elementos vão se enconlher (padrão)
- `flex-grow` -> Essa propriedade define se o elemento vai aumentar ou não em relação ao espaço que sobrar na tela;
    - `flex-grow: 0` -> O elemento não pode aumentar
    - `flex-grow: 1` -> O elemento pode aumentar
    - `flex-grow: 2` -> Quanto maior for o número maior vai ser sua ocupação;
- `order: 0` -> Tem como padrão zero, e vai pode ser alterado conforme a necessidade. Se ele for menor do que 0, ficará antes de qualquer elemento que não receber a propiedade, e se for maior que zero vai ficar após de qualquer elemento que também não receber a propriedade.
- `align-self: flex-end` -> Permite que apenas um elemento receba as propriedades que seriam recebidas no align-items

# GRID

- `display: grid`
- `grid-template-rows: auto auto` -> Define qual vai ser a disposição dos elementos em linhas
- `grid-template-columns: auto auto auto` -> Define qual vai ser a disposição dos elementos em colunas
    - Shorthand `grid-template: 200px 100px / 1fr 3fr 1fr`
    - `auto` -> Cada auto define uma coluna
    - `%` -> O valor pode ser uma porcentagem
    - `50px` -> O valor pode ser uma unidade de tela
    - `1fr 3fr 1fr` -> Unidade de medida do grid, representa a quantidade de frações em relação aos outros elementos
- `grid-row-gap` -> Espaçamento entre os elementos
- `grid-column-gap` -> Espaçamentos entre os elementos
- `grid-gap: 15px`
- `grid-justify`
    - `justify-items: strech(padrão)` Funciona que nem o flexbox, os itens irão parao final do eixo x
    - `align-items: stretch(padrão)` Funciona que nem o flexbox, os itens irão parao final do eixo y
    - `justify-content: flex-end` Faz com que os elementos ocupem apenas o tamanho necesário, respeitando o gap;
    - `align-content: flex-end` Faz com que os elementos ocupem apenas o tamanho necesário, respeitando o gap;
- `grid-template-areas: "A B B A"` -> Define como vai ser a distribuição dos elementos através de string
    `grid-area: A` -> Define qual vai ser a area do elemento
- `grid-column-start: 1` -> Define qual vai ser o tamanho do elemento de acordo com o número da coluna que ele vai começar
- `grid-column-end: 7` -> Define qual vai ser o tamanho do elemento de acordo com o número da coluna que ele vai terminar
- `grid-row-start: 1` -> Define qual vai ser o tamanho do elemento de acordo com o número da linha que ele inicia
- `grid-row-end: 3` -> Define qual vai ser o tamanho do elemento de acordo com o número da linha que ele termina

     