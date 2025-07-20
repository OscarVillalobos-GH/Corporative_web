import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../../styles/home.css";
import desarrolloWEB from "../../img/desarrolloWEB.png";
import appWeb from "../../img/appWeb.png";
import webGIF from "../../img/webGIF.gif";
import lenguajesWEB from "../../img/lenguajesWEB.jpg";
import frameworks from "../../img/frameworks.jpg";
import frameworksBack from "../../img/frameworksBack.webp";
import baseDatos from "../../img/baseDatos.webp";
import tecnologiasNUBE from "../../img/tecnologiasNUBE.webp";
import conclusionWEB from "../../img/conclusionWEB.jpg";

export const DesarrolloAplicacionesWeb = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [selectedCountry, setSelectedCountry] = useState({
    code: "+56",
    name: "Chile",
  });
  const [phoneNumber, setPhoneNumber] = useState("");

  const countries = [
    { code: "+93", name: "Afghanistan" },
    { code: "+355", name: "Albania" },
    { code: "+213", name: "Algeria" },
    { code: "+1-684", name: "American Samoa" },
    { code: "+376", name: "Andorra" },
    { code: "+244", name: "Angola" },
    { code: "+1-264", name: "Anguilla" },
    { code: "+1-268", name: "Antigua and Barbuda" },
    { code: "+54", name: "Argentina" },
    { code: "+374", name: "Armenia" },
    { code: "+297", name: "Aruba" },
    { code: "+61", name: "Australia" },
    { code: "+43", name: "Austria" },
    { code: "+994", name: "Azerbaijan" },
    { code: "+1-242", name: "Bahamas" },
    { code: "+973", name: "Bahrain" },
    { code: "+880", name: "Bangladesh" },
    { code: "+1-246", name: "Barbados" },
    { code: "+375", name: "Belarus" },
    { code: "+32", name: "Belgium" },
    { code: "+501", name: "Belize" },
    { code: "+229", name: "Benin" },
    { code: "+1-441", name: "Bermuda" },
    { code: "+975", name: "Bhutan" },
    { code: "+591", name: "Bolivia" },
    { code: "+387", name: "Bosnia and Herzegovina" },
    { code: "+267", name: "Botswana" },
    { code: "+55", name: "Brazil" },
    { code: "+246", name: "British Indian Ocean Territory" },
    { code: "+1-284", name: "British Virgin Islands" },
    { code: "+673", name: "Brunei" },
    { code: "+359", name: "Bulgaria" },
    { code: "+226", name: "Burkina Faso" },
    { code: "+257", name: "Burundi" },
    { code: "+855", name: "Cambodia" },
    { code: "+237", name: "Cameroon" },
    { code: "+1", name: "Canada" },
    { code: "+238", name: "Cape Verde" },
    { code: "+1-345", name: "Cayman Islands" },
    { code: "+236", name: "Central African Republic" },
    { code: "+235", name: "Chad" },
    { code: "+56", name: "Chile" },
    { code: "+86", name: "China" },
    { code: "+61", name: "Christmas Island" },
    { code: "+61", name: "Cocos Islands" },
    { code: "+57", name: "Colombia" },
    { code: "+269", name: "Comoros" },
    { code: "+242", name: "Congo" },
    { code: "+243", name: "Congo DRC" },
    { code: "+682", name: "Cook Islands" },
    { code: "+506", name: "Costa Rica" },
    { code: "+225", name: "Cote d'Ivoire" },
    { code: "+385", name: "Croatia" },
    { code: "+53", name: "Cuba" },
    { code: "+599", name: "Curacao" },
    { code: "+357", name: "Cyprus" },
    { code: "+420", name: "Czech Republic" },
    { code: "+45", name: "Denmark" },
    { code: "+246", name: "Diego Garcia" },
    { code: "+253", name: "Djibouti" },
    { code: "+1-767", name: "Dominica" },
    { code: "+1-809", name: "Dominican Republic" },
    { code: "+670", name: "East Timor" },
    { code: "+56", name: "Easter Island" },
    { code: "+593", name: "Ecuador" },
    { code: "+20", name: "Egypt" },
    { code: "+503", name: "El Salvador" },
    { code: "+240", name: "Equatorial Guinea" },
    { code: "+291", name: "Eritrea" },
    { code: "+372", name: "Estonia" },
    { code: "+251", name: "Ethiopia" },
    { code: "+500", name: "Falkland Islands" },
    { code: "+298", name: "Faroe Islands" },
    { code: "+679", name: "Fiji" },
    { code: "+358", name: "Finland" },
    { code: "+33", name: "France" },
    { code: "+594", name: "French Guiana" },
    { code: "+689", name: "French Polynesia" },
    { code: "+241", name: "Gabon" },
    { code: "+220", name: "Gambia" },
    { code: "+995", name: "Georgia" },
    { code: "+49", name: "Germany" },
    { code: "+233", name: "Ghana" },
    { code: "+350", name: "Gibraltar" },
    { code: "+30", name: "Greece" },
    { code: "+299", name: "Greenland" },
    { code: "+1-473", name: "Grenada" },
    { code: "+1-671", name: "Guam" },
    { code: "+502", name: "Guatemala" },
    { code: "+44-1481", name: "Guernsey" },
    { code: "+224", name: "Guinea" },
    { code: "+245", name: "Guinea-Bissau" },
    { code: "+592", name: "Guyana" },
    { code: "+509", name: "Haiti" },
    { code: "+504", name: "Honduras" },
    { code: "+852", name: "Hong Kong" },
    { code: "+36", name: "Hungary" },
    { code: "+354", name: "Iceland" },
    { code: "+91", name: "India" },
    { code: "+62", name: "Indonesia" },
    { code: "+98", name: "Iran" },
    { code: "+964", name: "Iraq" },
    { code: "+353", name: "Ireland" },
    { code: "+44-1624", name: "Isle of Man" },
    { code: "+972", name: "Israel" },
    { code: "+39", name: "Italy" },
    { code: "+225", name: "Ivory Coast" },
    { code: "+1-876", name: "Jamaica" },
    { code: "+81", name: "Japan" },
    { code: "+962", name: "Jordan" },
    { code: "+7", name: "Kazakhstan" },
    { code: "+254", name: "Kenya" },
    { code: "+686", name: "Kiribati" },
    { code: "+965", name: "Kuwait" },
    { code: "+996", name: "Kyrgyzstan" },
    { code: "+856", name: "Laos" },
    { code: "+371", name: "Latvia" },
    { code: "+961", name: "Lebanon" },
    { code: "+266", name: "Lesotho" },
    { code: "+231", name: "Liberia" },
    { code: "+218", name: "Libya" },
    { code: "+423", name: "Liechtenstein" },
    { code: "+370", name: "Lithuania" },
    { code: "+352", name: "Luxembourg" },
    { code: "+853", name: "Macau" },
    { code: "+389", name: "Macedonia" },
    { code: "+261", name: "Madagascar" },
    { code: "+265", name: "Malawi" },
    { code: "+60", name: "Malaysia" },
    { code: "+960", name: "Maldives" },
    { code: "+223", name: "Mali" },
    { code: "+356", name: "Malta" },
    { code: "+692", name: "Marshall Islands" },
    { code: "+222", name: "Mauritania" },
    { code: "+230", name: "Mauritius" },
    { code: "+262", name: "Mayotte" },
    { code: "+52", name: "Mexico" },
    { code: "+691", name: "Micronesia" },
    { code: "+1-808", name: "Midway Island" },
    { code: "+373", name: "Moldova" },
    { code: "+377", name: "Monaco" },
    { code: "+976", name: "Mongolia" },
    { code: "+382", name: "Montenegro" },
    { code: "+1-664", name: "Montserrat" },
    { code: "+212", name: "Morocco" },
    { code: "+258", name: "Mozambique" },
    { code: "+95", name: "Myanmar" },
    { code: "+264", name: "Namibia" },
    { code: "+674", name: "Nauru" },
    { code: "+977", name: "Nepal" },
    { code: "+31", name: "Netherlands" },
    { code: "+599", name: "Netherlands Antilles" },
    { code: "+1-869", name: "Nevis" },
    { code: "+687", name: "New Caledonia" },
    { code: "+64", name: "New Zealand" },
    { code: "+505", name: "Nicaragua" },
    { code: "+227", name: "Niger" },
    { code: "+234", name: "Nigeria" },
    { code: "+683", name: "Niue" },
    { code: "+672", name: "Norfolk Island" },
    { code: "+850", name: "North Korea" },
    { code: "+1-670", name: "Northern Mariana Islands" },
    { code: "+47", name: "Norway" },
    { code: "+968", name: "Oman" },
    { code: "+92", name: "Pakistan" },
    { code: "+680", name: "Palau" },
    { code: "+970", name: "Palestinian Territory" },
    { code: "+507", name: "Panama" },
    { code: "+675", name: "Papua New Guinea" },
    { code: "+595", name: "Paraguay" },
    { code: "+51", name: "Peru" },
    { code: "+63", name: "Philippines" },
    { code: "+48", name: "Poland" },
    { code: "+351", name: "Portugal" },
    { code: "+1-787", name: "Puerto Rico" },
    { code: "+974", name: "Qatar" },
    { code: "+242", name: "Republic of the Congo" },
    { code: "+262", name: "Reunion" },
    { code: "+40", name: "Romania" },
    { code: "+7", name: "Russia" },
    { code: "+250", name: "Rwanda" },
    { code: "+590", name: "Saint Barthelemy" },
    { code: "+290", name: "Saint Helena" },
    { code: "+1-869", name: "Saint Kitts and Nevis" },
    { code: "+1-758", name: "Saint Lucia" },
    { code: "+590", name: "Saint Martin" },
    { code: "+1-784", name: "Saint Vincent and the Grenadines" },
    { code: "+685", name: "Samoa" },
    { code: "+378", name: "San Marino" },
    { code: "+239", name: "Sao Tome and Principe" },
    { code: "+966", name: "Saudi Arabia" },
    { code: "+221", name: "Senegal" },
    { code: "+248", name: "Seychelles" },
    { code: "+232", name: "Sierra Leone" },
    { code: "+65", name: "Singapore" },
    { code: "+1-721", name: "Sint Maarten" },
    { code: "+421", name: "Slovakia" },
    { code: "+386", name: "Slovenia" },
    { code: "+677", name: "Solomon Islands" },
    { code: "+252", name: "Somalia" },
    { code: "+27", name: "South Africa" },
    { code: "+82", name: "South Korea" },
    { code: "+211", name: "South Sudan" },
    { code: "+34", name: "Spain" },
    { code: "+94", name: "Sri Lanka" },
    { code: "+249", name: "Sudan" },
    { code: "+597", name: "Suriname" },
    { code: "+268", name: "Swaziland" },
    { code: "+46", name: "Sweden" },
    { code: "+41", name: "Switzerland" },
    { code: "+963", name: "Syria" },
    { code: "+886", name: "Taiwan" },
    { code: "+992", name: "Tajikistan" },
    { code: "+255", name: "Tanzania" },
    { code: "+66", name: "Thailand" },
    { code: "+670", name: "Timor Leste" },
    { code: "+228", name: "Togo" },
    { code: "+690", name: "Tokelau" },
    { code: "+676", name: "Tonga" },
    { code: "+1-868", name: "Trinidad and Tobago" },
    { code: "+216", name: "Tunisia" },
    { code: "+90", name: "Turkey" },
    { code: "+993", name: "Turkmenistan" },
    { code: "+1-649", name: "Turks and Caicos Islands" },
    { code: "+688", name: "Tuvalu" },
    { code: "+256", name: "Uganda" },
    { code: "+380", name: "Ukraine" },
    { code: "+971", name: "United Arab Emirates" },
    { code: "+44", name: "United Kingdom" },
    { code: "+1", name: "United States" },
    { code: "+598", name: "Uruguay" },
    { code: "+998", name: "Uzbekistan" },
    { code: "+678", name: "Vanuatu" },
    { code: "+58", name: "Venezuela" },
    { code: "+84", name: "Vietnam" },
    { code: "+1-340", name: "Virgin Islands" },
    { code: "+681", name: "Wallis and Futuna" },
    { code: "+212", name: "Western Sahara" },
    { code: "+967", name: "Yemen" },
    { code: "+260", name: "Zambia" },
    { code: "+263", name: "Zimbabwe" },
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
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh", // Ajusta esta altura según necesites
          zIndex: 0,
          backgroundImage: `url(${desarrolloWEB})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingTop: "110px", // Espacio para el navbar
        }}
      ></div>

      {/* Contenido principal con fondo semitransparente */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <section className="hero-content mb-5">
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

        <section className="ecommerce-section" style={{ marginTop: "20px" }}>
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
            <div className="col-md-7">
              <h2 style={{ color: "#36b0a1" }} className="text-center mb-4">
                Tipos de Aplicaciones Web Más Utilizadas:
              </h2>
            </div>
            <div className="col-md-4">
              <img
                src={lenguajesWEB}
                alt="Proceso de Desarrollo"
                className="img-fluid rounded"
              />
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
            <div className="col-md-4">
              <div className="card p-4 border">
                <img
                  src={baseDatos}
                  alt="Bases de Datos"
                  className="img-fluid rounded mb-3"
                />
              </div>
            </div>
            <div className="col-md-8">
              <div className="card p-4 border">
                <h3 style={{ color: "#36b0a1" }}>Bases de Datos</h3>
                <p>Sistemas para gestionar datos de manera eficiente y segura.</p>
                <p> MySQL: Popular y relacional.</p>
                <p> PostgreSQL: Avanzado con estructuras complejas.</p>
                <p> MongoDB: NoSQL para grandes volúmenes de datos.</p>
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
              backgroundImage: `url(${conclusionWEB})`,
              backgroundSize: "cover",
              color: "white",
              width: "100%",
              height: "70vh"
            }}
          >
            <h2 style={{ color: "#36b0a1" }} className="mb-4">
              Conclusión
            </h2>
            <p style={{ color: "#FFFFF0" }}>
              El desarrollo de aplicaciones web se ha convertido en un pilar fundamental para la transformación digital de las empresas. En un entorno donde la rapidez, la eficiencia y la experiencia del usuario son determinantes, contar con soluciones web personalizadas permite automatizar procesos, integrar sistemas y brindar un acceso ágil y seguro desde cualquier dispositivo. Más allá de ser una simple herramienta tecnológica, una aplicación web bien diseñada representa una ventaja estratégica: impulsa la productividad, mejora la relación con los clientes y abre nuevas oportunidades de crecimiento. En nuestro equipo, combinamos innovación, experiencia y tecnologías modernas para desarrollar plataformas que no solo resuelven necesidades actuales, sino que también preparan a tu empresa para los desafíos del futuro.
            </p>
          </div>
        </section>

        <section className="mb-5 ecommerce-section" id="contact-form">
          <h2 style={{ color: "#ffff" }} className="text-center mb-4">
            Contáctanos
          </h2>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form ref={form} onSubmit={sendEmail} className="contact-form">
                <select name="service" required>
                  <option value="">Seleccione el servicio a consultar</option>
                  <option>ERP (SAP BUSINESS ONE, ASESORIAS Y MIGRACIONES)</option>
                  <option>Consultoría tecnológica</option>
                  <option>Data AnalIsis - Integración entre sistemas</option>
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