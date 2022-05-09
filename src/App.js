import './components/NavBar/NavBar.css';
import './components/CartWidget/CartWidget.css';
import './components/ItemCount/ItemCount.css';
import NavBar from './components/NavBar/NavBar';
import Formulario from './components/Formulario/Formulario';
import Titulo from './components/Titulo/Titulo';
import ItemCount from './components/ItemCount/ItemCount';


function App() { 
  
  return (
    <div className="App">
      <NavBar />
      <Titulo titulo = 'Soy titulo de APP'/> {/* Soy titulo es prop */}
      <Formulario />
      <ItemCount />
    </div> 
  );
}
 
export default App;
