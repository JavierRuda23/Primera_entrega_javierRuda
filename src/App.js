
import NavBar from './components/NavBar/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Header from './components/NavBar/CartWidget/ItemListContainer';




function App() {
  
  const [contador, SetContador]=useState(0)
  
  function sumar (){
    SetContador(contador+1)
  }
  return (
    <div>
      <NavBar texto= 'soy un texto'/>
    <br/>
    <div>
      <h1>Contador</h1>
      <button onClick={sumar}>{contador}</button>
    </div>
    <div>
  <Header title='Task Tracker' />
  </div>

    </div>
    
  );
}

export default App;
