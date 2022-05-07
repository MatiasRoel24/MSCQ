import './components/NavBar/NavBar.css';
import './components/CartWidget/CartWidget.css';
import NavBar from './components/NavBar/NavBar';
import Formulario from './components/Formulario/Formulario';
import Titulo from './components/Titulo/Titulo';
import CartWidget from './components/CartWidget/CartWidget';

function App() {
  const tit = 'Hola APP';
  return (
    <div className="App">
      <NavBar />
      <Titulo titulo = 'Soy titulo de Body'/>
      <CartWidget />
      <Formulario /> 
    </div>
  );
}
 
export default App;
