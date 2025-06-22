import React from "react";
import "../../styles/home.css";

export const Ecommerce = () => {
  return (
    <div className="container mt-5">
      <section className="mb-5">
        <h1 className="text-center text-primary mb-4">Ecommerce</h1>
        <p>
          Desarrollamos tiendas online que impulsan el crecimiento de tu
          negocio, ofrecemos plataformas seguras, fáciles de gestionar y
          diseñadas para maximizar conversiones.
        </p>
        <ul>
          <li>Soluciones personalizadas o basadas en CMS.</li>
          <li>Integración de pasarelas de pago seguras.</li>
          <li>Gestión de inventarios y análisis de ventas.</li>
        </ul>
        <p>
          Trabajamos contigo para crear una tienda online que refleje tu marca y
          cumpla con los estándares más altos de usabilidad y seguridad.
        </p>
      </section>
    </div>
  );
};
