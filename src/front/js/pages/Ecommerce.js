import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../../styles/home.css";

export const Ecommerce = () => {
  const [showModal, setShowModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [selectedCountry, setSelectedCountry] = useState({
    code: "+56",
    name: "Chile",
  });
  const [phoneNumber, setPhoneNumber] = useState("");

  // Lista completa de países con códigos telefónicos
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

  // Función para validar el formulario
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

  // Función para enviar el formulario con EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Combinar el código del país con el número ingresado antes de enviar
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
          setShowFormModal(false); // Cierra el modal después de enviar
        },
        (error) => {
          alert("Error al enviar el mensaje, intenta de nuevo.");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container mt-5 position-relative">
      <section className="mb-5 text-center">
        <h1 className="text-primary mb-4">
          ¿Por Qué Elegir Desarrollo de Ecommerce Personalizado?
        </h1>
        <p className="lead">Soluciones Integrales Adaptadas a Tu Visión</p>
        <div className="mt-4">
          <img
            src="https://ecommerce.institute/wp-content/uploads/2021/11/ecommerce_0jpg.jpg"
            alt="Ecommerce Personalizado"
            className="img-fluid rounded"
            style={{ maxWidth: "80%", maxHeight: "400px", margin: "0 auto" }}
          />
        </div>
      </section>

      <section className="mb-5">
        <h2 className="text-primary text-center">
          Características Diferenciales
        </h2>
        <p className="text-center">
          Soluciones que Entregamos: Habilitamos interacciones B2B y B2C,
          optimizando operaciones internas con software personalizado.
        </p>
        <div className="row text-center mt-4">
          <div className="col-md-2 mb-3 me-3">
            <div
              className="card h-100 bg-light p-3"
              style={{ minWidth: "150px" }}
            >
              <i className="fas fa-cloud fa-3x text-primary mb-3"></i>
              <p>Arquitectura MACH: Microservicios y Cloud-Native</p>
            </div>
          </div>
          <div className="col-md-2 mb-3 me-3">
            <div
              className="card h-100 bg-light p-3"
              style={{ minWidth: "150px" }}
            >
              <i className="fas fa-cogs fa-3x text-primary mb-3"></i>
              <p>Integración de sistemas empresariales</p>
            </div>
          </div>
          <div className="col-md-2 mb-3 me-3">
            <div
              className="card h-100 bg-light p-3"
              style={{ minWidth: "150px" }}
            >
              <i className="fas fa-user fa-3x text-primary mb-3"></i>
              <p>Experiencia de Usuario Excepcional</p>
            </div>
          </div>
          <div className="col-md-2 mb-3 me-3">
            <div
              className="card h-100 bg-light p-3"
              style={{ minWidth: "150px" }}
            >
              <i className="fas fa-mobile-alt fa-3x text-primary mb-3"></i>
              <p>Diseño responsivo para múltiples dispositivos</p>
            </div>
          </div>
          <div className="col-md-2 mb-3 me-3">
            <div
              className="card h-100 bg-light p-3"
              style={{ minWidth: "150px" }}
            >
              <i className="fas fa-paint-brush fa-3x text-primary mb-3"></i>
              <p>Interfaces elegantes y funcionales</p>
            </div>
          </div>
        </div>
        <div className="row text-center mt-4">
          <div className="col-md-2 mb-3 me-3">
            <div
              className="card h-100 bg-light p-3"
              style={{ minWidth: "150px" }}
            >
              <i className="fas fa-layer-group fa-3x text-primary mb-3"></i>
              <p>Frameworks modernos que garantizan escalabilidad</p>
            </div>
          </div>
          <div className="col-md-2 mb-3 me-3">
            <div
              className="card h-100 bg-light p-3"
              style={{ minWidth: "150px" }}
            >
              <i className="fas fa-tools fa-3x text-primary mb-3"></i>
              <p>Soluciones 100% personalizadas</p>
            </div>
          </div>
          <div className="col-md-2 mb-3 me-3">
            <div
              className="card h-100 bg-light p-3"
              style={{ minWidth: "150px" }}
            >
              <i className="fas fa-shopping-cart fa-3x text-primary mb-3"></i>
              <p>Creamos tiendas online que conectan y sorprenden</p>
            </div>
          </div>
          <div className="col-md-2 mb-3 me-3">
            <div
              className="card h-100 bg-light p-3"
              style={{ minWidth: "150px" }}
            >
              <i className="fas fa-user-check fa-3x text-primary mb-3"></i>
              <p>Procesos de compra centrados en el usuario</p>
            </div>
          </div>
          <div className="col-md-2 mb-3 me-3">
            <div
              className="card h-100 bg-light p-3"
              style={{ minWidth: "150px" }}
            >
              <i className="fas fa-tachometer-alt fa-3x text-primary mb-3"></i>
              <p>Rendimiento óptimo y velocidad de carga</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <h2 className="text-primary text-center">
          Servicios de Desarrollo Ecommerce que Transforman tu Negocio
        </h2>
        <div className="row text-center mt-4">
          <div className="col-md-4 mb-4">
            <div className="card h-100 bg-light p-3">
              <i className="fas fa-desktop fa-3x text-primary mb-3"></i>
              <h3>Frontend Personalizado</h3>
              <p>
                Interfaces únicas y optimizadas para una experiencia de usuario
                excepcional.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 bg-light p-3">
              <i className="fas fa-paint-brush fa-3x text-primary mb-3"></i>
              <h3>Diseño de Marca</h3>
              <p>
                Diseño que refleja y refuerza la identidad de tu marca,
                asegurando coherencia.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 bg-light p-3">
              <i className="fas fa-sitemap fa-3x text-primary mb-3"></i>
              <h3>Interfaces Intuitivas</h3>
              <p>
                Interfaces de usuario claras y fáciles de usar, enfocadas en
                eficiencia.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 bg-light p-3">
              <i className="fas fa-arrows-alt fa-3x text-primary mb-3"></i>
              <h3>Navegación Fluida</h3>
              <p>
                Navegación ágil y sin interrupciones para una experiencia
                óptima.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 bg-light p-3">
              <i className="fas fa-server fa-3x text-primary mb-3"></i>
              <h3>Backend Robusto</h3>
              <p>
                Arquitectura sólida y escalable para rendimiento y seguridad.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 bg-light p-3">
              <i className="fas fa-boxes fa-3x text-primary mb-3"></i>
              <h3>Gestión de Inventario</h3>
              <p>
                Control eficiente y en tiempo real de tu stock para optimizar
                operaciones.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 bg-light p-3">
              <i className="fas fa-credit-card fa-3x text-primary mb-3"></i>
              <h3>Pasarelas de Pago</h3>
              <p>
                Integración fluida con pasarelas de pago, garantizando
                transacciones seguras.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 bg-light p-3">
              <i className="fas fa-shield-alt fa-3x text-primary mb-3"></i>
              <h3>Sistemas Seguros</h3>
              <p>
                Sistemas de pago seguros que protegen transacciones y confianza.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 bg-light p-3">
              <i className="fas fa-truck fa-3x text-primary mb-3"></i>
              <h3>Gestión de Pedidos</h3>
              <p>
                Módulos que optimizan la gestión y entrega de pedidos de forma
                eficiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <div className="row align-items-center">
          <div className="col-md-8 order-md-2">
            <h2 className="text-primary">Nuestro Compromiso</h2>
            <p>
              Más que el Desarrollo es el Impulso para tu Crecimiento
              Empresarial. No solo creamos sitios web; desarrollamos
              herramientas estratégicas diseñadas para potenciar el crecimiento
              y la evolución de tu negocio.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => setShowModal(true)}
            >
              ¡Hablemos!
            </button>
          </div>
          <div className="col-md-4 order-md-1">
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRW5EE28UC7xDtPNf5xGAPgwF_VWgMKzSsWXhPfNc2sdB6W3FJL"
              alt="Laptop con Cohete"
              className="img-fluid rounded"
              style={{ maxWidth: "90%", maxHeight: "300px" }}
            />
          </div>
        </div>
      </section>

      {/* Modal para elegir entre WhatsApp o Formulario */}
      {showModal && (
        <div
          className="modal"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={() => setShowModal(false)}
        >
          <div
            className="modal-content"
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center",
              width: "300px",
            }}
            onClick={(e) => e.stopPropagation()} // Evita que el clic en el contenido cierre el modal
          >
            <h3 className="text-primary">¿Cómo deseas contactarnos?</h3>
            <button
              className="btn btn-success w-100 mb-2"
              onClick={() => {
                window.open(
                  "https://wa.me/56995334317?text=Hola,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios",
                  "_blank"
                );
                setShowModal(false);
              }}
            >
              <i className="fab fa-whatsapp"></i> Chatear por WhatsApp
            </button>
            <button
              className="btn btn-primary w-100"
              onClick={() => {
                setShowModal(false);
                setShowFormModal(true);
              }}
            >
              Enviar Formulario
            </button>
          </div>
        </div>
      )}

      {/* Modal para el Formulario */}
      {showFormModal && (
        <div
          className="modal"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={() => setShowFormModal(false)}
        >
          <div
            className="modal-content"
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              width: "500px",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
            onClick={(e) => e.stopPropagation()} // Evita que el clic en el contenido cierre el modal
          >
            <h3 className="text-primary text-center">Formulario de Contacto</h3>
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-3">
                <label htmlFor="service" className="form-label text-dark">
                  Seleccione el servicio a consultar
                </label>
                <select
                  className="form-select"
                  id="service"
                  name="service"
                  required
                >
                  <option value="">Selecciona</option>
                  <option>
                    ERP (SAP BUSINESS ONE, ASESORIAS Y MIGRACIONES)
                  </option>
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
                {errors.service && (
                  <p style={{ color: "#FF0000" }}>{errors.service}</p>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label text-dark">
                  Nombre completo
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  required
                />
                {errors.name && (
                  <p style={{ color: "#FF0000" }}>{errors.name}</p>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label text-dark">
                  Teléfono
                </label>
                <div className="input-group">
                  <select
                    className="form-select"
                    style={{ maxWidth: "150px" }}
                    value={selectedCountry.name}
                    onChange={(e) => {
                      const country = countries.find(
                        (c) => c.name === e.target.value
                      );
                      setSelectedCountry(
                        country || { code: "+56", name: "Chile" }
                      );
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
                {errors.phone && (
                  <p style={{ color: "#FF0000" }}>{errors.phone}</p>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label text-dark">
                  Correo corporativo
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                />
                {errors.email && (
                  <p style={{ color: "#FF0000" }}>{errors.email}</p>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="company" className="form-label text-dark">
                  Nombre de la empresa
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="company"
                  name="company"
                  required
                />
                {errors.company && (
                  <p style={{ color: "#FF0000" }}>{errors.company}</p>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="position" className="form-label text-dark">
                  Cargo
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="position"
                  name="position"
                  required
                />
                {errors.position && (
                  <p style={{ color: "#FF0000" }}>{errors.position}</p>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="industry" className="form-label text-dark">
                  Seleccione la industria
                </label>
                <select
                  className="form-select"
                  id="industry"
                  name="industry"
                  required
                >
                  <option value="">Selecciona</option>
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
                {errors.industry && (
                  <p style={{ color: "#FF0000" }}>{errors.industry}</p>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="employees" className="form-label text-dark">
                  Cantidad de empleados
                </label>
                <select
                  className="form-select"
                  id="employees"
                  name="employees"
                  required
                >
                  <option value="">Selecciona</option>
                  <option>1 - 49</option>
                  <option>50 - 99</option>
                  <option>100 - 499</option>
                  <option>1000 o mas</option>
                </select>
                {errors.employees && (
                  <p style={{ color: "#FF0000" }}>{errors.employees}</p>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label text-dark">
                  Mensaje
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="4"
                  required
                ></textarea>
                {errors.message && (
                  <p style={{ color: "#FF0000" }}>{errors.message}</p>
                )}
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Enviar
              </button>
              <button
                type="button"
                className="btn btn-secondary w-100 mt-2"
                onClick={() => setShowFormModal(false)}
              >
                Cancelar
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Ícono flotante de WhatsApp */}
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
  );
};
