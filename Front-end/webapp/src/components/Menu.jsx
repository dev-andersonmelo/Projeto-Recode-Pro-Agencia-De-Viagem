import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/"><strong>Agência de Viagens</strong></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(página atual)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Destinos">Destinos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Promocoes">Promoções</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Contato">Contato</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Clientes">Clientes</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Viagens">Viagens</Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Pesquisar" aria-label="Pesquisar"/>
                        <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Pesquisar</button>
                </form>
            </div>
        </nav>
    );
}

