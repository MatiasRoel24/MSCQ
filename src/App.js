import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './Container/ItemListContainer/ItemListContainer.css';
import './components/NavBar/NavBar.css';
import './components/CartWidget/CartWidget.css';
import './components/ItemCount/ItemCount.css';
import './components/Item/Item.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './Container/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Container/ItemDatailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';



function App() { 

  const [productoss, setproductoss] = useState([])
  

  /* useEffect(() => {
    fetch('') 
    
    
  }, []) */
  

  return (
    
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element = { <ItemListContainer /> } />
          <Route path="/detalle/:detalleId" element = { <ItemDetailContainer />} />
          <Route path="/cart" element = { <Cart />} />


          <Route path="/*" element = { <Navigate to = '/' replace />} /> {/* "/*" -> indica cualquier otra ruta */}
          {/* Pagina de error 404 */}
        </Routes>
      </div> 
    </BrowserRouter>
  );

}
 
export default App;
