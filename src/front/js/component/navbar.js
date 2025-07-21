import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import logo from "../../img/logo-blanco.png"; // tu logo

export const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="navbar-logo">
				<Link to="/">
					<img src={logo} alt="Logo" />
				</Link>
			</div>
			<ul className="navbar-links">

				<li><Link to="/erpservicios-page">ERP Servicios</Link></li>
				<li><Link to="/sapb1">SAP B1</Link></li>
				<li><Link to="/bi">Business Intelligence</Link></li>
				<li><Link to="/apis-integraciones">Integraciones-APIs</Link></li>
				<li><Link to="/desarrollo-aplicaciones-web">Desarrollo Web</Link></li>
				<li><Link to="/tecnologias">Tecnologías</Link></li>
				<li><Link to="/ecommerce">ecommerce</Link></li>
				<li><Link to="/aboutus">Nosotros</Link></li>
				<li>
					<Link to="/contact" className="contact-button">Contacto</Link>
				</li>
			</ul>
		</nav>
	);
};
