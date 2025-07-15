import React from "react";
import "../../styles/home.css";

import SAP_one from "../../img/01_SAP-Business_one.png";
import SAP_two from "../../img/02_SAP-Business_one.png";
import SAP_three from "../../img/03_support_banner.jpg";

export const Erpservicios = () => {
  const services = [
    {
      id: 1,
      title: "Implementación y Reimplementación ERP",
      description:
        "Apoyo en la implementación inicial o reimplementación de sistemas ERP: levantamiento de procesos, migración de datos, capacitación de usuarios y gestión del cambio.",
      image: SAP_one,
    },
    {
      id: 2,
      title: "Soporte Post-Implementación",
      description:
        "Asistencia continua para resolver incidencias, mejorar procesos, y asegurar la estabilidad del sistema ERP.",
      image: SAP_two,
    },
    {
      id: 3,
      title: "Consultoría y Optimización",
      description:
        "Análisis y mejora de procesos, optimización de informes, KPIs, y adaptaciones del sistema ERP a nuevas necesidades.",
      image: SAP_three,
    },
  ];

  return (
    <section className="erp-page" style={{ padding: "40px", backgroundColor: "#f9f9f9" }}>
      <h2 className="text-center mb-5">Nuestros Servicios ERP</h2>

      <div
        className="services-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        {services.map((service) => (
          <div
            key={service.id}
            className="service-box"
            style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              width: "300px",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <img
              src={service.image}
              alt={service.title}
              style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "6px" }}
            />
            <h4 style={{ marginTop: "15px" }}>{service.title}</h4>
            <p style={{ fontSize: "15px", marginTop: "10px" }}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
