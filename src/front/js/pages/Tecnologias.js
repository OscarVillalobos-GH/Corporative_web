import React from "react";
import "../../styles/home.css";

export const Tecnologias = () => {
  return (
    <div className="container mt-5">
      <div className="row mb-5">
        <div className="col-md-6">
          <section className="mb-5">
            <h2 className="text-primary">Tecnologías Cloud</h2>
            <p>
              Nos especializamos en soluciones basadas en la nube para maximizar
              la escalabilidad y la seguridad de tus proyectos. Ofrecemos
              servicios que aprovechan las últimas tecnologías para alojar,
              gestionar y optimizar tus aplicaciones.
            </p>
            <ul>
              <li>AWS, Azure y Google Cloud como plataformas principales.</li>
              <li>Infraestructura como código (IaC).</li>
              <li>Almacenamiento escalable y backups automáticos.</li>
            </ul>
            <p>
              Nuestro equipo está capacitado para implementar soluciones que se
              adapten a tus necesidades, desde despliegues simples hasta
              arquitecturas complejas en entornos híbridos.
            </p>
          </section>
        </div>
        <div className="col-md-6">
          <div className="cloud-image animate-cloud"></div>
        </div>
      </div>

      <section className="mb-5">
        <h2 className="text-primary">Tecnologías que utilizamos</h2>
        <div className="tech-sections">
          {/* Back-end */}
          <div className="tech-section">
            <h3>Back-end</h3>
            <div className="tech-icons">
              <a
                href="https://nodejs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-node-js"
                  style={{ fontSize: "2rem", color: "#68A063" }}
                ></i>
              </a>
              <a
                href="https://dotnet.microsoft.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-dotnet"
                  style={{ fontSize: "2rem", color: "#512BD4" }}
                ></i>
              </a>
              <a
                href="https://www.python.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-python"
                  style={{ fontSize: "2rem", color: "#3776AB" }}
                ></i>
              </a>
            </div>
            <p>
              Desarrollamos la lógica del servidor con tecnologías robustas como
              Node.js, .NET Core y Python, asegurando rendimiento y
              escalabilidad.
            </p>
          </div>

          {/* Front-end */}
          <div className="tech-section">
            <h3>Front-end</h3>
            <div className="tech-icons">
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-react"
                  style={{ fontSize: "2rem", color: "#61DAFB" }}
                ></i>
              </a>
              <a
                href="https://angular.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-angular"
                  style={{ fontSize: "2rem", color: "#DD0031" }}
                ></i>
              </a>
            </div>
            <p>
              Creamos interfaces modernas y responsivas utilizando React y
              Angular para una experiencia de usuario óptima.
            </p>
          </div>

          {/* Base de Datos */}
          <div className="tech-section">
            <h3>Base de Datos</h3>
            <div className="tech-icons">
              <a
                href="https://www.postgresql.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fas fa-database"
                  style={{ fontSize: "2rem", color: "#336791" }}
                ></i>
              </a>
              <a
                href="https://www.mongodb.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-envira"
                  style={{ fontSize: "2rem", color: "#47A248" }}
                ></i>
              </a>
              <a
                href="https://www.mysql.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fas fa-database"
                  style={{ fontSize: "2rem", color: "#00758F" }}
                ></i>
              </a>
            </div>
            <p>
              Gestionamos datos con bases robustas como PostgreSQL, MongoDB y
              MySQL para almacenamiento seguro y eficiente.
            </p>
          </div>

          {/* Tecnologías de Virtualización */}
          <div className="tech-section">
            <h3>Tecnologías de Virtualización</h3>
            <div className="tech-icons">
              <a
                href="https://www.vmware.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fas fa-server"
                  style={{ fontSize: "2rem", color: "#0071C5" }}
                ></i>
              </a>
              <a
                href="https://www.redhat.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-redhat"
                  style={{ fontSize: "2rem", color: "#EE0000" }}
                ></i>
              </a>
            </div>
            <p>
              Implementamos virtualización con VMware y Red Hat para entornos
              escalables y eficientes en la nube.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
