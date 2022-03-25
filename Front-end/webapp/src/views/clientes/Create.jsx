import React, {useState, useEffect} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ClienteService from "../../services/ClienteService";

// CREATE + UPDATE
export default function Create() {

    const [nomeCliente, setNomeCliente] = useState("");
    const [cpf, setCpf] = useState("");
    const [emailCliente, setEmailCliente] = useState("");
    const [telefoneCliente, setTelefoneCliente] = useState("");
    const [dataNasc, setDataNasc] = useState("");
    const [enderecoCliente, setEnderecoCliente] = useState("");

    const {idCliente} = useParams();
    const navigate = useNavigate();

    const criarOuEditarCliente = (e) => {
        e.preventDefault();

        const cliente = { nomeCliente, cpf, emailCliente, telefoneCliente, dataNasc, enderecoCliente};
    
        //console.log(cliente)

        if (idCliente) {
            ClienteService.updateCliente(idCliente, cliente)
            .then((response) => {
                navigate("/Clientes")
            })
        } else {
            ClienteService.createCliente(cliente)
            .then((response) => {
                navigate("/Clientes")
            })
        }
    }

    useEffect(() => {
        function getClienteById() {
          if (idCliente) {
              ClienteService.getClienteById(idCliente)
              .then((response) => {
                  setNomeCliente(response.data.nomeCliente);
                  setCpf(response.data.cpf);
                  setEmailCliente(response.data.emailCliente);
                  setTelefoneCliente(response.data.telefoneCliente);
                  setDataNasc(response.data.dataNasc);
                  setEnderecoCliente(response.data.enderecoCliente);
              })
              .catch((error) => {
                  console.log(error);
              })
          }
        }
        getClienteById()
    }, [idCliente]);

    return (
        <div className="container py-3">
            <form>
                <fieldset>
                    <legend>
                        <h2 className="text-center">{idCliente ? "Editar" : "Criar"}</h2>
                    </legend>
                    <div className="mb-3">
                        <label htmlFor="NomeCliente" className="form-label">
                            Nome
                        </label>
                        <input
                            type="text"
                            id="NomeCliente"
                            className="form-control"
                            placeholder="Nome completo"
                            value={nomeCliente}
                            onChange={(e) => setNomeCliente(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Cpf" className="form-label">
                            CPF
                        </label>
                        <input
                            type="text"
                            id="Cpf"
                            className="form-control"
                            placeholder="Ex.: 123.456.789-01"
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Email" className="form-label">
                            E-mail
                        </label>
                        <input
                            type="text"
                            id="Email"
                            className="form-control"
                            placeholder="E-mail"
                            value={emailCliente}
                            onChange={(e) => setEmailCliente(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="TelefoneCliente" className="form-label">
                            Nº Telefone
                        </label>
                        <input
                            type="text"
                            id="TelefondeCliente"
                            className="form-control"
                            placeholder="Ex.: (99) 9.8765-4321"
                            value={telefoneCliente}
                            onChange={(e) => setTelefoneCliente(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="DataNasc" className="form-label">
                            Data de Nascimento
                        </label>
                        <input
                            type="text"
                            id="DataNasc"
                            className="form-control"
                            placeholder="Ex.: 01/01/1900"
                            value={dataNasc}
                            onChange={(e) => setDataNasc(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="EnderecoCliente" className="form-label">
                            Endereço
                        </label>
                        <input
                            type="text"
                            id="EnderecoCliente"
                            className="form-control"
                            placeholder="Endereço completo"
                            value={enderecoCliente}
                            onChange={(e) => setEnderecoCliente(e.target.value)}
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="btn btn-primary" 
                        onClick={(e) => criarOuEditarCliente(e)}>
                        Enviar
                    </button>
                    <Link
                        to="/Clientes"
                        className="btn btn-danger"
                        style={{ marginLeft: "10px" }}
                    >
                        Cancelar
                    </Link>
                </fieldset>
            </form>
        </div>
    );
}