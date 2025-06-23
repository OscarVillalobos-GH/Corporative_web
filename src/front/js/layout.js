import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { DesarrolloAplicacionesWeb } from "./pages/DesarrolloAplicacionesWeb";
import { Ecommerce } from "./pages/Ecommerce";
import { ApisIntegraciones } from "./pages/ApisIntegraciones";
import { Tecnologias } from "./pages/Tecnologias";
import injectContext from "./store/appContext";

import { Footer } from "./component/footer";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "")
    return <BackendURL />;

  return (
    <div>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Single />} path="/single/:theid" />
            <Route
              element={<DesarrolloAplicacionesWeb />}
              path="/desarrollo-aplicaciones-web"
            />
            <Route element={<Ecommerce />} path="/ecommerce" />
            <Route element={<ApisIntegraciones />} path="/apis-integraciones" />
            <Route element={<Tecnologias />} path="/tecnologias" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
