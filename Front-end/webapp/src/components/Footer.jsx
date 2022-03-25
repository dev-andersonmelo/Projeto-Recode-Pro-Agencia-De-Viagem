import React from "react";
import img from "../assets/img/icones-redes-sociais.png";

export default function Footer()
{
    return (
        <footer className="text-center m-auto " id="footer">
            <h4>Siga-nos nas Redes Sociais:</h4>
            <img src={img} style={{width: "100px"}} alt="Ícones de redes sociais." />
            <p> &copy; <em>Agência de Viagens - 2022</em> </p>
        </footer>
    );
}