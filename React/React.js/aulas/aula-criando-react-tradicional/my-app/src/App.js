import React from 'react';
import Header from './Header'
import './App.css';

function App() {
  return (
    <Header name="Henrriky" links={["Sobre", "Comprar", "Contato"]}></Header>
  );
}

export default App;
