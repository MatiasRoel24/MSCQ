import { useEffect, useState } from 'react';
import './components/ItemListContainer/ItemListContainer.css';
import './components/NavBar/NavBar.css';
import './components/CartWidget/CartWidget.css';
import './components/ItemCount/ItemCount.css';
import NavBar from './components/NavBar/NavBar';
import Formulario from './components/Formulario/Formulario';
import Titulo from './components/Titulo/Titulo';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() { 

  /* const [bool, setBool] = useState(true)
  const [productos, setProductos] = useState([]) 
  
    useEffect(() => {
     fetch('./assets/DataProductos.json') */ /*  ???  */
  /*   .then( (resp) => console.log(resp) ) 
  }, []) */
  
  return (
    <div className="App">
      {/* <ItemCount /> */}
      <NavBar />
      <ItemListContainer /> 
    </div> 
  );
}
 
export default App;
