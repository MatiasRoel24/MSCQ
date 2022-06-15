/* import { useEffect, useState } from 'react'; */
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './Container/ItemListContainer/ItemListContainer.css';
import './components/NavBar/NavBar.css';
import './components/Cart/Cart.css';
import './components/CartWidget/CartWidget.css';
import './components/ItemCount/ItemCount.css';
import './components/Item/Item.css';
import './components/Cart/Cart.css';
import './components/ItemDetail/ItemDetail.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './Container/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Container/ItemDatailContainer/ItemDetailContainer';

import './components/Inicio/Inicio.css'
import './components/Nosotros/Nosotros.css'
import { Inicio } from './components/Inicio/Inicio';
import { Nosotros } from './components/Nosotros/Nosotros';
import CartContextProvider from './context/CartContext';
import Cart from './components/Cart/Cart';




function App() { 

/*   console.log(CartContext) */
  
  return (
    
    <BrowserRouter>
      <CartContextProvider>
        <div className="App">
          <NavBar />
            
          <Routes>
          
            <Route path="/" element = { <Inicio /> } />
            <Route path="/productos" element = { <ItemListContainer /> } />
            <Route path="/nosotros" element = { <Nosotros /> } />
            <Route path="/detalle/:detalleId" element = { <ItemDetailContainer />} />
            <Route path="/cart" element = { <Cart />} />
            <Route path="/*" element = { <Navigate to = '/' replace />} /> {/* "/*" -> indica cualquier otra ruta */}
            {/* Pagina de error 404 */}

          </Routes>

        </div> 
      
      </CartContextProvider>
    </BrowserRouter>
  );

}
 
export default App;
