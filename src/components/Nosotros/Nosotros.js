import Footer from "../Footer/Footer";

export const Nosotros = () => {
  return(
  <>
  <main className="nosotros">
      <h1 className="nosotros_title">Acerca de Nosotros</h1>
      <section className="nosotros__container">
        <img className="nosotros__imagen" src="../assets/empresa.jpg" alt=""/>
        <h5 className="nosotros__description">MSCQ es la empresa de viajes líder en Latinoamérica. Desde hace 22 años revoluciona la industria del turismo a través de la tecnología, y, con su continua apuesta al desarrollo del sector, hoy forma un Grupo consolidado que integra a Best Day, Viajes Falabella y Koin, convirtiéndose en una de las Compañías más relevantes de la región y capaz de ofrecer una experiencia personalizada a más de 29 millones de clientes.
          MSCQ opera en 20 países, acompañando a los latinoamericanos desde el momento en que sueñan con viajar hasta cuando están compartiendo recuerdos. Con el propósito de crear experiencias para que los viajes enriquezcan la vida de las personas y transformar la experiencia de compra, ha desarrollado métodos de pago alternativos y financiamiento, democratizando el acceso al consumo y acercando a los latinoamericanos a su próxima experiencia de viaje.</h5>
      </section>
  </main>
  <Footer/>   

  </>
  ); 
};
