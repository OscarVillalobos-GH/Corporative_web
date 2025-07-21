import React from "react";
import emailjs from "@emailjs/browser";
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
  const [errors, setErrors] = useState({});
  const form = useRef();

  // Función para validar el formulario
  const validateForm = () => {
    const newErrors = {};
    if (!form.current["service"].value)
      newErrors.service = "Completa este campo obligatorio.";
    if (!form.current["name"].value)
      newErrors.name = "Completa este campo obligatorio.";
    if (!form.current["phone"].value)
      newErrors.phone = "Completa este campo obligatorio.";
    if (!form.current["email"].value)
      newErrors.email = "Completa este campo obligatorio.";
    if (!form.current["company"].value)
      newErrors.company = "Completa este campo obligatorio.";
    if (!form.current["position"].value)
      newErrors.position = "Completa este campo obligatorio.";
    if (!form.current["industry"].value)
      newErrors.industry = "Completa este campo obligatorio.";
    if (!form.current["employees"].value)
      newErrors.employees = "Completa este campo obligatorio.";
    if (!form.current["message"].value)
      newErrors.message = "Completa este campo obligatorio.";
    return newErrors;
  };

  // Función para enviar el formulario con EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          alert("Mensaje enviado con éxito!");
          form.current.reset();
          setErrors({});
        },
        (error) => {
          alert("Error al enviar el mensaje, intenta de nuevo.");
          console.log(error.text);
        }
      );
  };

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
            ¡Hablemos de tu proyecto! <span className="arrow">➜</span>
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
            <h3>Consultoria ERP y BI</h3>
            <p>
            Bindamos apoyo en mejorar la experiencia con SAP Business One, tanto a nivel de procesos como de reporteria. Generando dashboard dinamicos,
            reportes a midida con Crystal report o escalando a Power BI una poderosa herramienta para la construccion de reportes de gestión.
            </p>
          </div>

          <div className="service-card">
            <div className="icon-circle">
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

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <select
              name="service"
              required
            >
              <option value="">Seleccione el servicio a consultar</option>
              <option>ERP (SAP BUSINESS ONE, ASESORIAS Y MIGRACIONES)</option>
              <option>Consultoría tecnológica</option>
              <option>Data Analisis-Business Intelligence</option>
              <option>Desarrollo sofware</option>
              <option>E-commerce y Marketplace</option>
              <option>Mantención y soporte de infraestructura tecnológica</option>
              <option>Migración a la nube</option>
              <option>Seguridad de la informacion</option>
              <option>Aplicaciones web</option>
              <option>Otros</option>
            </select>
            {errors.service && <p style={{ color: "#FF0000" }}>{errors.service}</p>}

            <input
              type="text"
              name="name"
              placeholder="Nombre completo*"
              required
            />
            {errors.name && <p style={{ color: "#FF0000" }}>{errors.name}</p>}

            <div className="form-row">
              <input
                type="tel"
                name="phone"
                placeholder="Teléfono*"
                required
              />
              {errors.phone && <p style={{ color: "#FF0000" }}>{errors.phone}</p>}
              <input
                type="email"
                name="email"
                placeholder="Correo corporativo*"
                required
              />
              {errors.email && <p style={{ color: "#FF0000" }}>{errors.email}</p>}
            </div>

            <div className="form-row">
              <input
                type="text"
                name="company"
                placeholder="Nombre de la empresa*"
                required
              />
              {errors.company && <p style={{ color: "#FF0000" }}>{errors.company}</p>}
              <input
                type="text"
                name="position"
                placeholder="Cargo*"
                required
              />
              {errors.position && <p style={{ color: "#FF0000" }}>{errors.position}</p>}
            </div>

            <div className="form-row">
              <select
                name="industry"
                required
              >
                <option value="">Seleccione la industria*</option>
                <option>Agricultura</option>
                <option>Agua y gas</option>
                <option>Alimentación</option>
                <option>Automotriz</option>
                <option>Banca e inversiones</option>
                <option>Comercio y retail</option>
                <option>Comunicaciones (medios y tecnología)</option>
                <option>Construcción</option>
                <option>Educación</option>
                <option>Energía</option>
                <option>Hotelería y turismo</option>
                <option>Industria química</option>
                <option>Mercado de capitales</option>
                <option>Mineria</option>
                <option>Producción</option>
                <option>Salud</option>
                <option>Seguros</option>
                <option>Servicios públicos</option>
                <option>Telecomunicaciones</option>
                <option>Transporte</option>
                <option>Textiles</option>
                <option>Productos varios</option>
                <option>Emprendimiento personal</option>
                <option>Otra</option>
              </select>
              {errors.industry && <p style={{ color: "#FF0000" }}>{errors.industry}</p>}
              <select
                name="employees"
                required
              >
                <option value="">Cantidad de empleados*</option>
                <option>1 - 49</option>
                <option>50 - 99</option>
                <option>100 - 499</option>
                <option>1000 o mas</option>
              </select>
              {errors.employees && <p style={{ color: "#FF0000" }}>{errors.employees}</p>}
            </div>

            <textarea
              name="message"
              placeholder="Mensaje"
              required
            ></textarea>
            {errors.message && <p style={{ color: "#FF0000" }}>{errors.message}</p>}

            <button type="submit" className="submit-button">ENVIAR</button>
          </form>
        </div>
      </section>
    </div>
  );
};