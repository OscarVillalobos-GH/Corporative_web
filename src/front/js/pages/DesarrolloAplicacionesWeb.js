import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../../styles/home.css";
import desarrolloWEB from "../../img/desarrolloWEB.png";
import appWeb from "../../img/appWeb.png";
import webGIF from "../../img/webGIF.gif";
import frameworks from "../../img/frameworks.jpg";
import frameworksBack from "../../img/frameworksBack.webp";
import baseDatos from "../../img/baseDatos.webp";
import tecnologiasNUBE from "../../img/tecnologiasNUBE.webp";

export const DesarrolloAplicacionesWeb = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [selectedCountry, setSelectedCountry] = useState({
    code: "+56",
    name: "Chile",
  });
  const [phoneNumber, setPhoneNumber] = useState("");

  const countries = [
    { code: "+54", name: "Argentina" },
    { code: "+61", name: "Australia" },
    { code: "+56", name: "Chile" },
    { code: "+64", name: "New Zealand" },
    ];

  const validateForm = () => {
    const newErrors = {};
    if (!form.current["service"].value)
      newErrors.service = "Completa este campo obligatorio.";
    if (!form.current["name"].value)
      newErrors.name = "Completa este campo obligatorio.";
    if (!phoneNumber) newErrors.phone = "Completa este campo obligatorio.";
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

  const sendEmail = (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    form.current["phone"].value = `${selectedCountry.code}${phoneNumber}`;

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
          setSelectedCountry({ code: "+56", name: "Chile" });
          setPhoneNumber("");
        },
        (error) => {
          alert("Error al enviar el mensaje, intenta de nuevo.");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="position-relative">
      {/* Fondo del título principal con altura ajustada y sin margen superior */}
      <div
        className="hero-container"
        style={{
          position: "absolute",
          top: 0, // Ensure it starts at the very top
          left: 0,
          width: "100%",
          height: "100vh", // Full viewport height
          zIndex: 0,
          backgroundImage: `url(${desarrolloWEB})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginTop: 0, // Remove any top margin
          paddingTop: 0, // Remove any top padding
        }}
      ></div>

      {/* Contenido principal con fondo semitransparente */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <section className="hero-content mb-5" style={{ paddingTop: "18vh" }}>

          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="hero-title">Desarrollo de Aplicaciones Web</h1>
            </div>
            <div className="col-md-6">
              <p className="hero-subtitle">
                Desarrollamos aplicaciones web personalizadas que optimizan
                procesos, mejoran la experiencia del usuario y potencian la
                eficiencia de tu negocio. Nuestras soluciones están diseñadas
                para adaptarse a tus necesidades específicas, permitiendo
                escalabilidad, seguridad y un rendimiento óptimo.
              </p>
            </div>
          </div>
          <div className="text-center mt-4">
            <a
              href="https://wa.me/56995334317?text=Hola,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary me-2"
              style={{ backgroundColor: "#36b0a1", borderColor: "#36b0a1" }}
            >
              <i className="fab fa-whatsapp"></i> Escríbenos
            </a>
            <button
              className="btn btn-primary"
              style={{ backgroundColor: "#36b0a1", borderColor: "#36b0a1" }}
              onClick={() =>
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                })
              }
            >
              Contáctanos
            </button>
          </div>
        </section>

        <section className="ecommerce-section" style={{ paddingTop: "45vh" }}>

          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="card p-4" style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}>
                <h2 style={{ color: "#36b0a1" }} className="text-center mb-4">
                  ¿Qué es el Desarrollo Web y por qué es importante?
                </h2>
                <p>
                  El desarrollo web es el proceso de crear sitios y aplicaciones
                  accesibles a través de internet. En la era digital, las
                  empresas necesitan herramientas eficientes para mejorar sus
                  procesos, conectar con sus clientes y optimizar la gestión
                  interna. Este servicio ofrece soluciones escalables,
                  accesibles y seguras que permiten a las organizaciones
                  destacar en un mercado competitivo.
                </p>
                <p>
                  La importancia radica en su capacidad para transformar
                  negocios, mejorar la experiencia del usuario y proporcionar
                  una presencia online sólida. Desde sitios corporativos hasta
                  plataformas interactivas, el desarrollo web es clave para el
                  éxito empresarial.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4" style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}>
                <img
                  src={webGIF}
                  alt="Desarrollo Web"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5 ecommerce-section">
          <div className="row align-items-center">
            <div className="col-md-12">
              <h2 style={{ color: "#36b0a1" }} className="text-center mb-4">
                Tipos de Aplicaciones Web Más Utilizadas:
              </h2>
            </div>

            <div className="row text-center my-5">
              <div className="col-md-4 mb-4">
                <div className="card p-3 border h-100">
                  <i
                    className="fas fa-chart-line fa-3x"
                    style={{ color: "#36b0a1" }}
                  ></i>
                  <h3 style={{ color: "#36b0a1" }}>Análisis de Requisitos</h3>
                  <p>
                    Identificamos las necesidades del cliente y los objetivos del
                    software, asegurando una estructura eficiente, escalable y
                    adecuada a los datos.
                  </p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card p-3 border h-100">
                  <i
                    className="fas fa-cogs fa-3x"
                    style={{ color: "#36b0a1" }}
                  ></i>
                  <h3 style={{ color: "#36b0a1" }}>Aplicaciones ERP y CRM</h3>
                  <p>
                    Soluciones para gestionar recursos humanos, inventarios y
                    relaciones con clientes, optimizando procesos empresariales.
                  </p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card p-3 border h-100">
                  <i
                    className="fas fa-shopping-cart fa-3x"
                    style={{ color: "#36b0a1" }}
                  ></i>
                  <h3 style={{ color: "#36b0a1" }}>Plataformas de Comercio Electrónico</h3>
                  <p>
                    Impulsamos el crecimiento digital con tiendas online que
                    integran pagos y gestionan inventarios de forma eficiente.
                  </p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card p-3 border h-100">
                  <i
                    className="fas fa-calendar-alt fa-3x"
                    style={{ color: "#36b0a1" }}
                  ></i>
                  <h3 style={{ color: "#36b0a1" }}>Sistemas de Reservas</h3>
                  <p>
                    Facilitamos reservas en línea para hoteles, restaurantes y
                    servicios, reduciendo la carga administrativa.
                  </p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card p-3 border h-100">
                  <i
                    className="fas fa-chalkboard-teacher fa-3x"
                    style={{ color: "#36b0a1" }}
                  ></i>
                  <h3 style={{ color: "#36b0a1" }}>Aplicaciones de e-Learning</h3>
                  <p>
                    Ofrecemos plataformas educativas online con acceso a cursos y
                    material desde cualquier lugar.
                  </p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card p-3 border h-100">
                  <i
                    className="fas fa-code fa-3x"
                    style={{ color: "#36b0a1" }}
                  ></i>
                  <h3 style={{ color: "#36b0a1" }}>Desarrollo de Backend</h3>
                  <p>
                    Construimos la lógica y estructura del software, garantizando
                    eficiencia y seguridad en los datos.
                  </p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card p-3 border h-100">
                  <i
                    className="fas fa-paint-brush fa-3x"
                    style={{ color: "#36b0a1" }}
                  ></i>
                  <h3 style={{ color: "#36b0a1" }}>Diseño de UI/UX</h3>
                  <p>
                    Creamos experiencias atractivas y funcionales para los
                    usuarios con un diseño intuitivo.
                  </p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card p-3 border h-100">
                  <i
                    className="fas fa-tools fa-3x"
                    style={{ color: "#36b0a1" }}
                  ></i>
                  <h3 style={{ color: "#36b0a1" }}>Mantenimiento</h3>
                  <p>
                    Ofrecemos soporte continuo para mejoras y actualizaciones del
                    software.
                  </p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card p-3 border h-100">
                  <i
                    className="fas fa-tachometer-alt fa-3x"
                    style={{ color: "#36b0a1" }}
                  ></i>
                  <h3 style={{ color: "#36b0a1" }}>Optimización</h3>
                  <p>
                    Mejoramos el rendimiento y la velocidad para una experiencia
                    óptima.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5 ecommerce-section">
          <h2 style={{ color: "#36b0a1" }} className="text-center mb-4">
            Tecnologías Utilizadas en el Desarrollo de Aplicaciones Web
          </h2>
          <p>
            El desarrollo de aplicaciones web involucra diversas tecnologías y
            frameworks que permiten crear soluciones eficientes y escalables. A
            continuación, exploramos las herramientas más utilizadas.
          </p>

          <div className="row align-items-center mb-4">
            <div className="col-md-3">
              <div className="card p-4 border">
                <img
                  src={appWeb}
                  alt="Lenguajes de Programación"
                  className="img-fluid rounded mb-3"
                />
              </div>
            </div>
            <div className="col-md-9">
              <div className="card p-4 border">
                <h3 style={{ color: "#36b0a1" }}>Lenguajes de Programación</h3>
                <p>
                  Utilizamos lenguajes esenciales para desarrollar soluciones
                  robustas. Incluyen opciones versátiles para frontend, backend
                  y análisis de datos.
                </p>
                <p> JavaScript: Ideal para frontend y backend con Node.js.</p>
                <p> Python: Fácil de usar, ideal para IA y análisis.</p>
                <p> PHP: Perfecto para gestión de bases de datos.</p>
                <p> Ruby: Popular en startups con Ruby on Rails.</p>
              </div>
            </div>
          </div>

          <div className="row align-items-center mb-4">
            <div className="col-md-8">
              <div className="card p-4 border">
                <h3 style={{ color: "#36b0a1" }}>Frameworks Frontend</h3>
                <p>
                  Frameworks que facilitan la creación de interfaces dinámicas
                  y escalables.
                </p>
                <p> React.js: Para interfaces dinámicas y escalables.</p>
                <p> Angular: Ideal para aplicaciones empresariales.</p>
                <p> Vue.js: Ligero y flexible para interfaces interactivas.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 border">
                <img
                  src={frameworks}
                  alt="Frameworks Frontend"
                  className="img-fluid rounded mb-3"
                />
              </div>
            </div>
          </div>

          <div className="row align-items-center mb-4">
            <div className="col-md-5">
              <div className="card p-4 border">
                <img
                  src={frameworksBack}
                  alt="Frameworks Backend"
                  className="img-fluid rounded mb-3"
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="card p-4 border">
                <h3 style={{ color: "#36b0a1" }}>Frameworks Backend</h3>
                <p>
                  Herramientas para construir la lógica del servidor con alto
                  rendimiento.
                </p>
                <p> Node.js: Rápido y escalable con JavaScript.</p>
                <p> Django: Seguro y ágil con Python.</p>
                <p> Laravel: Avanzado y robusto con PHP.</p>
              </div>
            </div>
          </div>

          <div className="row align-items-center mb-4">
            <div className="col-md-8">
              <div className="card p-4 border">
                <h3 style={{ color: "#36b0a1" }}>Bases de Datos</h3>
                <p>Sistemas para gestionar datos de manera eficiente y segura.</p>
                <p> MySQL: Popular y relacional.</p>
                <p> PostgreSQL: Avanzado con estructuras complejas.</p>
                <p> MongoDB: NoSQL para grandes volúmenes de datos.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 border">
                <img
                  src={baseDatos}
                  alt="Bases de Datos"
                  className="img-fluid rounded mb-3"
                />
              </div>
            </div>
          </div>

          <div className="row align-items-center mb-4">
            <div className="col-md-3">
              <div className="card p-4 border">
                <img
                  src={tecnologiasNUBE}
                  alt="Tecnologías en la Nube"
                  className="img-fluid rounded mb-3"
                />
              </div>
            </div>
            <div className="col-md-9">
              <div className="card p-4 border">
                <h3 style={{ color: "#36b0a1" }}>Tecnologías en la Nube</h3>
                <p>Plataformas que ofrecen almacenamiento y cómputo escalable.</p>
                <p> AWS: Soluciones completas de hosting.</p>
                <p> Google Cloud: Alto rendimiento para aplicaciones.</p>
                <p> Microsoft Azure: Herramientas empresariales avanzadas.</p>
              </div>
            </div>
          </div>
        </section>

       <section className="mb-5 ecommerce-section">
        <div
          className="card p-4 border"
          style={{
            backgroundColor: "#000000cc", // fondo oscuro con opacidad
            backgroundSize: "cover",
            color: "white",
            width: "100%",
            height: "auto",
            minHeight: "60vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              color: "#36b0a1",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            Conclusión
          </h2>

          <p
            style={{
              textAlign: "justify",
              maxWidth: "800px",
              fontSize: "16px",
              lineHeight: "1.6",
              padding: "0 10px",
               color: "white",
            }}
          >
            El desarrollo de aplicaciones web se ha convertido en un pilar
            fundamental para la transformación digital de las empresas. En un
            entorno donde la rapidez, la eficiencia y la experiencia del usuario
            son determinantes, contar con soluciones web personalizadas permite
            automatizar procesos, integrar sistemas y brindar un acceso ágil y
            seguro desde cualquier dispositivo. Más allá de ser una simple
            herramienta tecnológica, una aplicación web bien diseñada representa
            una ventaja estratégica: impulsa la productividad, mejora la relación
            con los clientes y abre nuevas oportunidades de crecimiento. En
            nuestro equipo, combinamos innovación, experiencia y tecnologías
            modernas para desarrollar plataformas que no solo resuelven
            necesidades actuales, sino que también preparan a tu empresa para los
            desafíos del futuro.
          </p>
        </div>
      </section>


        <section className="mb-0 ecommerce-section" id="contact-form">
          <h2 style={{ color: "#ffff" }} className="text-center mb-4">
            Contáctanos
          </h2>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form ref={form} onSubmit={sendEmail} className="contact-form">
                <select name="service" required>
                  <option value="">Seleccione el servicio a consultar</option>
                  <option>ERP (SAP Business One, Consultoria y Migraciones)</option>
                  <option>Consultoría tecnológica</option>
                  <option>Data Analisis - Integración entre sistemas</option>
                  <option>Visualización de Datos</option>
                  <option>Desarrollo sofware</option>
                  <option>E-commerce y Marketplace</option>
                  <option>
                    Mantención y soporte de infraestructura tecnológica
                  </option>
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
                  <div className="input-group">
                    <select
                      className="form-select"
                      style={{ maxWidth: "150px" }}
                      value={selectedCountry.name}
                      onChange={(e) => {
                        const country = countries.find((c) => c.name === e.target.value);
                        setSelectedCountry(country || { code: "+56", name: "Chile" });
                        setPhoneNumber("");
                      }}
                    >
                      {countries.map((country) => (
                        <option key={country.code} value={country.name}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Número"
                      required
                    />
                  </div>
                  {errors.phone && <p style={{ color: "#FF0000" }}>{errors.phone}</p>}
                </div>

                <div className="form-row">
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
                </div>

                <div className="form-row">
                  <input
                    type="text"
                    name="position"
                    placeholder="Cargo*"
                    required
                  />
                  {errors.position && <p style={{ color: "#FF0000" }}>{errors.position}</p>}
                </div>

                <div className="form-row">
                  <select name="industry" required>
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
                </div>

                <div className="form-row">
                  <select name="employees" required>
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

                <button type="submit" className="submit-button">
                  ENVIAR
                </button>
              </form>
            </div>
          </div>
        </section>

        <a
          href="https://wa.me/56995334317?text=Hola,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            fontSize: "40px",
            color: "#25D366",
            textDecoration: "none",
          }}
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </div>
  );
};