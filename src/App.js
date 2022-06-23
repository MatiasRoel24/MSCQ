import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import NavBar from './components/NavBar/NavBar';
import { Inicio } from './components/Inicio/Inicio';
import { Nosotros } from './components/Nosotros/Nosotros';

import CartContextProvider from './context/CartContext';

import Cart from '../src/Container/Cart/Cart';
import ItemListContainer from './Container/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Container/ItemDatailContainer/ItemDetailContainer';

import './components/CartList/CartList.css';
import './components/CartWidget/CartWidget.css';
import './components/Formulario/Formulario.css';
import './components/Inicio/Inicio.css'
import './components/Item/Item.css';
import './components/ItemCount/ItemCount.css';
import './components/ItemDetail/ItemDetail.css';
import './components/NavBar/NavBar.css';
import './components/Nosotros/Nosotros.css'

import './Container/ItemListContainer/ItemListContainer.css';
import './Container/Cart/Cart.css';




function App() { 


  
  return (
    
    <BrowserRouter>
      <CartContextProvider>
        <div className="App">
          <NavBar />
            
          <Routes>
          
            <Route path="/" element = { <Inicio /> } />
            <Route path="/productos" element = { <ItemListContainer /> } />
            <Route path="/categoria/:id" element = { <ItemListContainer /> } />
            <Route path="/nosotros" element = { <Nosotros /> } />
            <Route path="/detalle/:detalleId" element = { <ItemDetailContainer />} />
            <Route path="/cart" element = { <Cart />} />
            <Route path="/*" element = { <Navigate to = '/' replace />} /> {/* "/*" -> indica cualquier otra ruta */}
            

          </Routes>

        </div> 
      
      </CartContextProvider>
    </BrowserRouter>
  );

}
 
export default App;
