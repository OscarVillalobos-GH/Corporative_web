import React from "react";
import "../../styles/home.css";
import heroImage from "../../img/fondo.jpg";
import fondop from "../../img/fondop.jpg";
import angular from "../../img/angular.png";
import node from "../../img/node.png";
import python from "../../img/python.png";
import postgresql from "../../img/postgresql.png";
import mysql from "../../img/mysql.png";
import react from "../../img/react.png";
import mongodb from "../../img/mongodb.png";


export const Home = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <div
        className="hero-container"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-content">
          <h1 className="hero-title">
            Digitalizamos tu visión <br /> Donde la tecnología se adapta a tu negocio.
          </h1>
          <p className="hero-subtitle">
            Software a la medida, integraciones eficientes <br /> y tecnología que impulsa tu negocio al siguiente nivel.
            
          </p>
          <button className="hero-button">
            👉 ¡Hablemos de tu proyecto! <span className="arrow">➜</span>
          </button>
        </div>
      </div>

      <section className="what-we-do">
        <div className="what-we-do-container">
          <div className="what-we-do-image">
            <img src={fondop} alt="programming" />
          </div>
          <div className="what-we-do-text">
            <h2>¿QUÉ HACEMOS?</h2>
            <p>
              El servicio de desarrollo de software de nuestra empresa es una solución
              integral para resolver problemáticas de talento y capacidad en la construcción
              de soluciones digitales con tecnologías cloud. Nos destacamos por combinar
              experiencia técnica, buenas prácticas y un enfoque centrado en la calidad.
            </p>
            <button className="contact-button">CONTÁCTANOS</button>
          </div>
        </div>
      </section>

      <div className="tech-section">
        <h2 className="tech-title">TECNOLOGÍAS QUE UTILIZAMOS</h2>
        <div className="tech-grid">

          <div className="tech-card">
            <img src={angular} alt="Angular" />
            <img src={react} alt="React" />
          </div>

          <div className="tech-card">
            <img src={node} alt="Node.js" />
            <img src={python} alt="Python" />
          </div>

          <div className="tech-card">
            <img src={postgresql} alt="PostgreSQL" />
             <img src={mysql} alt="MySQL" />
             <img src={mongodb} alt="MongoDB" />
          </div>

        </div>
      </div>

      {/* SERVICES SECTION */}
      <section className="services-section">
  <h2 className="section-title">¿QUÉ OFRECEMOS?</h2>
  <div className="cards-container">
    <div className="service-card">
      <div className="icon-circle">
        {/* Icono laptop animado con SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
          viewBox="0 0 64 64"
          fill="none"
          stroke="#36b0a1"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="8" y="12" width="48" height="32" rx="2" ry="2" />
          <line x1="2" y1="48" x2="62" y2="48" />
          <line x1="22" y1="48" x2="22" y2="52" />
          <line x1="42" y1="48" x2="42" y2="52" />
        </svg>
      </div>
      <h3>Desarrollo a la medida</h3>
      <p>
        Diseñamos y desarrollamos soluciones digitales personalizadas que se ajustan a las necesidades específicas de tu negocio. Utilizamos tecnología moderna, buenas prácticas y un equipo comprometido con la calidad y la innovación.
      </p>
    </div>
    <div className="service-card">
      <div className="icon-circle">
        {/* Icono caja (software factory) animado con SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
          viewBox="0 0 64 64"
          fill="none"
          stroke="#36b0a1"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="8 20 32 4 56 20 56 44 32 60 8 44 8 20" />
          <line x1="32" y1="4" x2="32" y2="60" />
          <line x1="8" y1="44" x2="56" y2="44" />
        </svg>
      </div>
      <h3>Software factory</h3>
      <p>
        Creamos aplicaciones escalables y robustas en la nube, pensadas para empresas que necesitan eficiencia, rendimiento y velocidad de desarrollo. Aplicamos metodologías ágiles y estándares de excelencia técnica en cada proyecto.
      </p>
    </div>
  </div>
</section>

      {/* CONTACT SECTION */}
<section className="contact-section">
  <div className="contact-content">
    <div className="contact-text">
      <h2>CONTÁCTANOS</h2>
    </div>

    <form className="contact-form">
      <select required>
        <option value="">Seleccione el servicio a consultar</option>
        <option value="software">Desarrollo de Software</option>
        <option value="apps">Desarrollo de Apps</option>
        <option value="integraciones">Integraciones</option>
      </select>

      <input type="text" placeholder="Nombre completo*" required />
      <div className="form-row">
        <input type="tel" placeholder="Teléfono*" required />
        <input type="email" placeholder="Correo corporativo*" required />
      </div>
      <div className="form-row">
        <input type="text" placeholder="Nombre de la empresa*" required />
        <input type="text" placeholder="Cargo*" required />
      </div>
      <div className="form-row">
        <select required>
          <option value="">Seleccione la industria*</option>
          <option value="educacion">Educación</option>
          <option value="finanzas">Finanzas</option>
          <option value="salud">Salud</option>
        </select>
        <select required>
          <option value="">Cantidad de empleados*</option>
          <option value="1-10">1-10</option>
          <option value="11-50">11-50</option>
          <option value="51+">51 o más</option>
        </select>
      </div>
      <textarea placeholder="Mensaje"></textarea>
      <button type="submit" className="submit-button">ENVIAR</button>
    </form>
  </div>
</section>

    </div>
  );
};
