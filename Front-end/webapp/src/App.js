
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Destinos from "./views/Destinos";
import Promocoes from "./views/Promocoes";
import Contato from "./views/Contato";
import Clientes from "./views/clientes";
import ClientesCreate from "./views/clientes/Create";
import Viagens from "./views/viagens";
import ViagensCreate from "./views/viagens/Create";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Destinos" element={<Destinos/>} />
        <Route path="/Promocoes" element={<Promocoes/>} />
        <Route path="/Contato" element={<Contato/>} />
        <Route path="/Clientes" element={<Clientes/>} />
        <Route path="/Clientes-Create" element={<ClientesCreate/>} />
        <Route path="/Clientes-Update/:idCliente" element={<ClientesCreate/>} />
        <Route path="/Viagens" element={<Viagens/>} />
        <Route path="/Viagens-Create" element={<ViagensCreate/>} />
        <Route path="/Viagens-Update/:idViagem" element={<ViagensCreate/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;