import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__contenedor">
          <h2 className="logo__footer">MCSQ</h2>

          <div className="contenedor-iconos">
            <i className="fa-brands fa-instagram icono-footer"></i>
            <i className="fa-brands fa-facebook icono-footer"></i>
            <i className="fa-brands fa-youtube icono-footer"></i>
          </div>
        </div>
        <h5 className="copy no-margin no-padding">
          ©Copyright 2022 | Creada por MatiasRoel
        </h5>
      </footer>
  )
}

export default Footer