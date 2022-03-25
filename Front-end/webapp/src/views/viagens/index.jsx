import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ViagemService from "../../services/ViagemService";

// READ e DELETE
export default function Index() {

    const [viagens, setViagens] = useState([]);

    const getAllViagens = () => {
        ViagemService.getAllViagens().then((response) => {
            setViagens(response.data);
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    //Sanou a solicitação (get) infinita, vista (em teste) no console do browser
    useEffect(() => {
        getAllViagens();
    }, []);

    const deleteViagem = (viagemId) => {
        ViagemService.deleteViagem(viagemId)
        .then((response) => {
            getAllViagens();
        })
        .catch((error) => {
            console.log(error);
            
          });
    };    

    return (
        <div className="container py-3">
            <Link 
                to="/Viagens-Create" 
                className="btn btn-primary mb-2"
            >Cadastrar Viagem</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Origem</th>
                        <th>Destino</th>
                        <th>Data de Ida</th>
                        <th>Data de Volta</th>
                        <th>Preço Total</th>
                        <th>AÇÕES</th>
                    </tr>
                </thead>
                <tbody>
                    {viagens.map((viagem) => 
                        <tr key={viagem.idViagem}>
                            <td>{viagem.idViagem}</td>
                            <td>{viagem.origem}</td>
                            <td>{viagem.destino}</td>
                            <td>{viagem.dataIda}</td>
                            <td>{viagem.dataVolta}</td>
                            <td>{viagem.precoTotal}</td>
                            <td className="d-flex">
                                <Link 
                                    to={`/Viagens-Update/${viagem.idViagem}`} 
                                    className="btn btn-info"
                                >Editar</Link>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteViagem(viagem.idViagem)}
                                    style={{ marginLeft: "10px" }}
                                >Deletar</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}