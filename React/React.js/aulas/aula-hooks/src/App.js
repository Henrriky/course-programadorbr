import React from 'react';
import Header from './Header'
import Counter from './Counter'
import './App.css';

function App() {

  const [show, setShow] = useState(true);

  let time = 0;

  useEffect(() => {
    let timer = setInterval(() => {
      time++
      if (time > 5) {
        clearInterval(timer);
        setShow(false);
      }
    }, 1000)
  }, [])

  if (show) {
    return (
      <div>
        <Header name="Henrriky" links={["Sobre", "Comprar", "Contato"]}></Header>
        <Counter count={3}></Counter>
      </div>
    );
  } else {
    <div>
      <Header name="Henrriky" links={["Sobre", "Comprar", "Contato"]}></Header>
      Sem contador
    </div>
  }

}

export default App;
