import React from 'react'
import { Link } from 'react-router-dom'; 


const Inputregion = () => {

  const select = document.querySelector('#select')
  const opciones = document.querySelector('#opciones')
  
  const desplegar = () =>{
    select.classList.toggle('active')
    opciones.classList.toggle('active') 
  }
  
  return (
    <div className="contenedor">
      <form >
          <div className="selectbox" >
            <div className="select" id="select" onClick={desplegar}>
              <div className="contenido-select">
                <h1 className="titulo">Selecciona tu pais</h1>
                
              </div>
              <i className="fas fa-angle-down"></i>
            </div>

            <div className='opciones' id='opciones'>
              <Link to='/productos' className="linkRoutes">
                      <div className='contenido-opcion' onClick={desplegar}>
                        <h2 className="opcion titulo">Todos los destinos</h2>
                      </div>                    
              </Link>
              <Link to='/categoria/Argentina' className="linkRoutes">
                      <div className='contenido-opcion' onClick={desplegar}>
                        <h2 className="opcion titulo">Argentina</h2>
                      </div>                    
              </Link>
              <Link to='/categoria/Uruguay' className="linkRoutes">
                      <div className='contenido-opcion' onClick={desplegar}>
                        <h2 className="opcion titulo">Uruguay</h2>
                      </div>                    
              </Link>
            </div>
          </div>
      </form>
    </div>             
  )
}

export default Inputregion