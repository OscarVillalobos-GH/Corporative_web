import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../../styles/home.css";
import APIs from "../../img/APIs.png";
import apiGif from "../../img/apiGif.gif";
import AiChatGif from "../../img/AiChatGif.gif";
import ProtocolosGif from "../../img/ProtocolosGif.gif";
import lenguajesGif from "../../img/lenguajesGif.gif";
import BDGif from "../../img/BD-Gif.gif";
import seguridadGif from "../../img/seguridadGif.gif";
import cloud from "../../img/cloud.gif";

export const ApisIntegraciones = () => {
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
      {/* Opcional: Espacio para imagen de fondo (puedes agregar una si lo deseas) */}
      <div
        className="hero-container"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: 0,
          backgroundImage: `url(${APIs})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginTop: 0,
          paddingTop: 0,
        }}
      ></div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <section className="hero-content mb-5" style={{ paddingTop: "25vh" }}>
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="hero-title">Desarrollo de APIs e Integraciones</h1>
            </div>
            <div className="col-md-6">
              <p className="hero-subtitle">
                Conectamos sistemas, automatizamos procesos y mejoramos la eficiencia operativa de tu empresa a través de APIs seguras y escalables.
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

        <section className="mb-5 ecommerce-section" style={{ paddingTop: "45vh" }}>
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="card p-4 border">
                <h2 style={{ color: "#36b0a1" }} className="text-center mb-4">
                  ¿Qué es el Desarrollo de APIs e Integraciones?
                </h2>
                <p>
                  Las APIs (Application Programming Interfaces) son interfaces
                  que permiten que diferentes aplicaciones y sistemas se
                  comuniquen entre sí. Funcionan como «puentes digitales» que
                  permiten intercambiar datos y ejecutar funciones sin necesidad
                  de intervención manual.
                </p>
                <p>
                  Por otro lado, las integraciones hacen posible que los
                  sistemas trabajen en conjunto de manera eficiente. Por
                  ejemplo, una empresa que usa un software de facturación, un
                  CRM y una plataforma de e-commerce puede integrar estos
                  sistemas mediante APIs para que compartan información en
                  tiempo real.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 border">
                <img
                  src={apiGif}
                  alt="API e Integraciones"
                  className="img-fluid rounded"
                  style={{ maxWidth: "60%", margin: "0 auto", display: "block" }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5 ecommerce-section">
          <div className="row align-items-center">
            <div className="col-md-12">
              <h3 style={{ color: "#36b0a1" }} className="text-center mb-4">
                El proceso de desarrollo de APIs e integraciones incluye varias
                etapas:
              </h3>
            </div>
            <div className="row text-center my-4">
              <div className="col-md-4 mb-4">
                <div className="card p-3 border h-100">
                  <i
                    className="fas fa-solid fa-book fa-3x"
                    style={{ color: "#36b0a1" }}
                  ></i>
                  <h3 style={{ color: "#36b0a1" }}>
                    Implementación y documentación:
                  </h3>
                  <p>
                    Se lanza la API y se proporciona documentación clara para
                    su uso.
                  </p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card p-3 border h-100">
                  <i
                    className="fas fa-tools fa-3x"
                    style={{ color: "#36b0a1" }}
                  ></i>
                  <h3 style={{ color: "#36b0a1" }}>Mantenimiento y optimización:</h3>
                  <p>
                    Se monitorea el rendimiento y se realizan mejoras continuas.
                  </p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card p-3 border h-100">
                  <i
                    className="fas fa-search fa-3x"
                    style={{ color: "#36b0a1" }}
                  ></i>
                  <h3 style={{ color: "#36b0a1" }}>Análisis de necesidades:</h3>
                  <p>
                    Se identifican los sistemas que necesitan comunicarse y los
                    datos que deben compartirse.
                  </p>
                </div>
              </div>
              <div className="col-md-6 mb-6">
                <div className="card p-3 border h-100">
                  <i
                    className="fas fa-code fa-3x"
                    style={{ color: "#36b0a1" }}
                  ></i>
                  <h3 style={{ color: "#36b0a1" }}>Diseño y desarrollo de la API:</h3>
                  <p>
                    Se crea una API segura, escalable y optimizada para el
                    rendimiento.
                  </p>
                </div>
              </div>
              <div className="col-md-6 mb-6">
                <div className="card p-3 border h-100">
                  <i
                    className="fas fa-shield-alt fa-3x"
                    style={{ color: "#36b0a1" }}
                  ></i>
                  <h3 style={{ color: "#36b0a1" }}>
                    Pruebas de seguridad y compatibilidad:
                  </h3>
                  <p>Se validan la integridad y seguridad de los datos.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5 ecommerce-section">
          <h2 style={{ color: "#36b0a1" }} className="text-center mb-4">
            Beneficios del Desarrollo de APIs para Empresas
          </h2>
          <p>
            Contar con APIs e integraciones bien diseñadas puede transformar la
            operatividad de una empresa, mejorando la eficiencia y reduciendo
            costos. Algunos de los beneficios más importantes incluyen:
          </p>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="card p-3 border h-100">
                <i
                  className="fas fa-robot fa-3x"
                  style={{ color: "#36b0a1" }}
                ></i>
                <h3 style={{ color: "#36b0a1" }}>Automatización de Procesos:</h3>
                <p>
                  Las APIs permiten que los sistemas se comuniquen sin
                  intervención manual, reduciendo errores y acelerando flujos
                  de trabajo.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card p-3 border h-100">
                <i
                  className="fas fa-users fa-3x"
                  style={{ color: "#36b0a1" }}
                ></i>
                <h3 style={{ color: "#36b0a1" }}>
                  Mejora en la Experiencia del Cliente:
                </h3>
                <p>
                  Las integraciones ofrecen servicios rápidos y personalizados,
                  como pagos en segundos en e-commerce.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card p-3 border h-100">
                <i
                  className="fas fa-money-bill-wave fa-3x"
                  style={{ color: "#36b0a1" }}
                ></i>
                <h3 style={{ color: "#36b0a1" }}>Reducción de Costos Operativos:</h3>
                <p>
                  La automatización minimiza trabajo manual, optimizando
                  recursos.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card p-3 border h-100">
                <i
                  className="fas fa-chart-line fa-3x"
                  style={{ color: "#36b0a1" }}
                ></i>
                <h3 style={{ color: "#36b0a1" }}>Escalabilidad y Flexibilidad:</h3>
                <p>
                  Permite crecer sin restricciones, agregando funcionalidades
                  y plataformas.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card p-3 border h-100">
                <i
                  className="fas fa-shield-alt fa-3x"
                  style={{ color: "#36b0a1" }}
                ></i>
                <h3 style={{ color: "#36b0a1" }}>Seguridad y Control de Datos:</h3>
                <p>
                  Incluye autenticación, cifrado y control de accesos para
                  proteger información.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card p-3 border h-100">
                <i
                  className="fas fa-plug fa-3x"
                  style={{ color: "#36b0a1" }}
                ></i>
                <h3 style={{ color: "#36b0a1" }}>
                  Integración con Software Externo:
                </h3>
                <p>
                  Conecta con CRM, ERP, pasarelas de pago y más para un flujo
                  eficiente.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5 ecommerce-section">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src={AiChatGif}
                alt="Aplicaciones de APIs"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-5">
              <p className="fs-4">
                Las APIs y las integraciones pueden aplicarse en múltiples sectores y mejorar diversos procesos empresariales. Algunas de sus principales aplicaciones incluyen:
              </p>

            </div>
          </div>
        </section>

        <section className="mb-5 ecommerce-section">
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="card p-3 border h-100">
                <i
                  className="fas fa-briefcase fa-3x"
                  style={{ color: "#36b0a1" }}
                ></i>
                <h3 style={{ color: "#36b0a1" }}>
                  Integraciones con Sistemas ERP y CRM:
                </h3>
                <p>Automatiza facturación, gestión de clientes e inventario.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card p-3 border h-100">
                <i
                  className="fas fa-shopping-cart fa-3x"
                  style={{ color: "#36b0a1" }}
                ></i>
                <h3 style={{ color: "#36b0a1" }}>
                  Conexión de Plataformas de Comercio Electrónico:
                </h3>
                <p>Actualización de inventarios y procesamiento de pedidos.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card p-3 border h-100">
                <i
                  className="fas fa-credit-card fa-3x"
                  style={{ color: "#36b0a1" }}
                ></i>
                <h3 style={{ color: "#36b0a1" }}>
                  APIs de Pagos y Facturación Electrónica:
                </h3>
                <p>Transacciones seguras con pasarelas como PayPal o Stripe.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card p-3 border h-100">
                <i
                  className="fas fa-users-cog fa-3x"
                  style={{ color: "#36b0a1" }}
                ></i>
                <h3 style={{ color: "#36b0a1" }}>
                  Gestión de Recursos Humanos y Nómina:
                </h3>
                <p>Conecta talento con nómina y asistencia.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card p-3 border h-100">
                <i
                  className="fas fa-chart-pie fa-3x"
                  style={{ color: "#36b0a1" }}
                ></i>
                <h3 style={{ color: "#36b0a1" }}>
                  Análisis de Datos e Inteligencia de Negocios:
                </h3>
                <p>Reportes en tiempo real con herramientas BI.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card p-3 border h-100">
                <i
                  className="fas fa-lock fa-3x"
                  style={{ color: "#36b0a1" }}
                ></i>
                <h3 style={{ color: "#36b0a1" }}>Seguridad y Control de Accesos:</h3>
                <p>Autenticación multifactor y monitoreo de seguridad.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5 ecommerce-section">
          <h2 style={{ color: "#36b0a1" }} className="text-center mb-4">
            Tecnologías Utilizadas en el Desarrollo de APIs
          </h2>
          <p>
            El desarrollo de APIs requiere el uso de tecnologías avanzadas para
            garantizar rendimiento, seguridad y escalabilidad. Algunas de las
            más utilizadas incluyen:
          </p>

          <div className="row align-items-center mb-4">
            <div className="col-md-3">
              <div className="card p-4 border">
                <img
                  src={ProtocolosGif}
                  alt="Protocolos de Comunicación"
                  className="img-fluid rounded mb-3"
                />
              </div>
            </div>
            <div className="col-md-9">
              <div className="card p-4 border">
                <h3 style={{ color: "#36b0a1" }}>Protocolos de Comunicación</h3>
                <p>
                  REST (Representational State Transfer): Es el estándar más
                  utilizado en APIs, basado en HTTP.
                </p>
                <p>
                  GraphQL: Permite consultas más flexibles y optimizadas en
                  comparación con REST.
                </p>
                <p>
                  SOAP (Simple Object Access Protocol): Utilizado en sistemas
                  empresariales que requieren alta seguridad.
                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center mb-4">
            <div className="col-md-8">
              <div className="card p-4 border">
                <h3 style={{ color: "#36b0a1" }}>Lenguajes de Programación</h3>
                <p>
                  JavaScript (Node.js): Ideal para desarrollo backend y APIs
                  escalables.
                </p>
                <p>
                  Python (Flask, Django): Popular en aplicaciones empresariales
                  y análisis de datos.
                </p>
                <p>
                  Java y C#: Ampliamente utilizados en entornos corporativos y
                  software empresarial.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 border">
                <img
                  src={lenguajesGif}
                  alt="Lenguajes de Programación"
                  className="img-fluid rounded mb-3"
                />
              </div>
            </div>
          </div>

          <div className="row align-items-center mb-4">
            <div className="col-md-5">
              <div className="card p-4 border">
                <img
                  src={BDGif}
                  alt="Bases de Datos"
                  className="img-fluid rounded mb-3"
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="card p-4 border">
                <h3 style={{ color: "#36b0a1" }}>Bases de Datos</h3>
                <p>
                  PostgreSQL y MySQL: Opciones relacionales para almacenamiento
                  de datos estructurados.
                </p>
                <p>MongoDB: Base de datos NoSQL flexible y escalable.</p>
                <p>
                  Firebase: Base de datos en tiempo real utilizada en
                  aplicaciones móviles y web.
                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center mb-4">
            <div className="col-md-8">
              <div className="card p-4 border">
                <h3 style={{ color: "#36b0a1" }}>
                  Herramientas de Seguridad y Autenticación
                </h3>
                <p>
                  OAuth 2.0: Protocolo de autorización seguro para compartir
                  datos.
                </p>
                <p>
                  JWT (JSON Web Tokens): Sistema de autenticación segura para
                  APIs.
                </p>
                <p>
                  SSL/TLS: Cifrado de datos en tránsito para proteger la
                  comunicación.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 border">
                <img
                  src={seguridadGif}
                  alt="Seguridad y Autenticación"
                  className="img-fluid rounded mb-3"
                />
              </div>
            </div>
          </div>

          <div className="row align-items-center mb-4">
            <div className="col-md-4">
              <div className="card p-4 border">
                <img
                  src={cloud}
                  alt="Infraestructura en la Nube"
                  className="img-fluid rounded mb-3"
                />
              </div>
            </div>
            <div className="col-md-8">
              <div className="card p-4 border">
                <h3 style={{ color: "#36b0a1" }}>Infraestructura en la Nube</h3>
                <p>
                  Amazon Web Services (AWS): Ofrece API Gateway, Lambda y bases
                  de datos escalables.
                </p>
                <p>
                  Google Cloud: Proporciona herramientas para desarrollo e
                  implementación de APIs.
                </p>
                <p>
                  Microsoft Azure: Plataforma con soluciones de integración para
                  entornos empresariales.
                </p>
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
             
              El desarrollo de APIs e integraciones es fundamental para cualquier
              empresa que busque optimizar procesos, mejorar la experiencia del
              cliente y aumentar la eficiencia operativa. Al conectar sistemas,
              automatizar tareas y garantizar la seguridad de los datos, las
              APIs permiten a las empresas crecer y adaptarse a las nuevas
              exigencias del mercado.

                     Si deseas transformar tu empresa con soluciones tecnológicas
            avanzadas, un equipo experto en desarrollo de APIs puede ayudarte
              a diseñar e implementar integraciones eficientes y seguras.

              ¡Contáctanos hoy y descubre cómo las APIs pueden impulsar tu
              negocio al siguiente nivel!

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