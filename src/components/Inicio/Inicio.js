import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

export const Inicio = () => {
  return (
    <>
    <main className="inicio__main">
      <section className="inicio">
        <div className="inicio__contenedor">
          <h1 className="inicio__titutlo">MSCQ</h1>
          <h5 className="inicio__subtitutlo">La empresa numero #1 en viajes</h5>
          <Link to={`/productos`} className="linkRoutes">
            <button className="inicio__btn animate__animated animate__shakeX animate__repeat-2 animate__slow">
              Ver vuelos <i className="fas fa-plane logo-avion"></i>
            </button>
          </Link>
        </div>
      </section>
      
    </main>
    <div>
      <Footer />
    </div>
    </>
  );
};
