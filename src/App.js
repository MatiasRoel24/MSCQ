import './Container/ItemListContainer/ItemListContainer.css';
import './components/NavBar/NavBar.css';
import './components/CartWidget/CartWidget.css';
import './components/ItemCount/ItemCount.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './Container/ItemListContainer/ItemListContainer';



function App() { 

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
    </div> 
  );

}
 
export default App;
