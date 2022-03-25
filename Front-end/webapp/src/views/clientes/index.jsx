import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ClienteService from "../../services/ClienteService";

// READ e DELETE
export default function Index() {

    const [clientes, setClientes] = useState([]);

    const getAllClientes = () => {
        ClienteService.getAllClientes().then((response) => {
            setClientes(response.data);
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    //Sanou a solicitação (get) infinita, vista (em teste) no console do browser
    useEffect(() => {
        getAllClientes();
    }, []);

    const deleteCliente = (clienteId) => {
        ClienteService.deleteCliente(clienteId)
        .then((response) => {
            getAllClientes();
        })
        .catch((error) => {
            console.log(error);
            
          });
    };    

    return (
        <div className="container py-3">
            <Link 
                to="/Clientes-Create" 
                className="btn btn-primary mb-2"
            >Cadastrar Cliente</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>E-mail</th>
                        <th>Telefone</th>
                        <th>Data de Nascimento</th>
                        <th>Endereço</th>
                        <th>AÇÕES</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map((cliente) => 
                        <tr key={cliente.idCliente}>
                            <td>{cliente.idCliente}</td>
                            <td>{cliente.nomeCliente}</td>
                            <td>{cliente.cpf}</td>
                            <td>{cliente.emailCliente}</td>
                            <td>{cliente.telefoneCliente}</td>
                            <td>{cliente.dataNasc}</td>
                            <td>{cliente.enderecoCliente}</td>
                            <td className="d-flex">
                                <Link 
                                    to={`/Clientes-Update/${cliente.idCliente}`} 
                                    className="btn btn-info"
                                >Editar</Link>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteCliente(cliente.idCliente)}
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