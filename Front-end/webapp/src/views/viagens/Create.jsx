import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ViagemService from "../../services/ViagemService";

// CREATE + UPDATE
export default function Create() {

    const [origem, setOrigem] = useState("");
    const [destino, setDestino] = useState("");
    const [dataIda, setDataIda] = useState("");
    const [dataVolta, setDataVolta] = useState("");
    const [precoTotal, setPrecoTotal] = useState("");

    const { idViagem } = useParams();
    const navigate = useNavigate();

    const criarOuEditarViagem = (e) => {
        e.preventDefault();

        const viagem = { origem, destino, dataIda, dataVolta, precoTotal };

        console.log(viagem)

        if (idViagem) {
            ViagemService.updateViagem(idViagem, viagem)
                .then((response) => {
                    navigate("/Viagens")
                })
        } else {
            ViagemService.createViagem(viagem)
                .then((response) => {
                    navigate("/Viagens")
                })
        }
    }

    useEffect(() => {
        function getViagemById() {
            if (idViagem) {
                ViagemService.getViagemById(idViagem)
                    .then((response) => {
                        setOrigem(response.data.origem);
                        setDestino(response.data.destino);
                        setDataIda(response.data.dataIda);
                        setDataVolta(response.data.dataVolta);
                        setPrecoTotal(response.data.precoTotal);
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
        }
        getViagemById()
    }, [idViagem]);

    return (
        <div className="container py-3">
            <form>
                <fieldset>
                    <legend>
                        <h2 className="text-center">{idViagem ? "Editar" : "Criar"}</h2>
                    </legend>
                    <div className="mb-3">
                        <label htmlFor="Origem" className="form-label">
                            Origem
                        </label>
                        <input
                            type="text"
                            id="Origem"
                            className="form-control"
                            placeholder="Digite o local de partida"
                            value={origem}
                            onChange={(e) => setOrigem(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Destino" className="form-label">
                            Destino
                        </label>
                        <input
                            type="text"
                            id="Destino"
                            className="form-control"
                            placeholder="Digite o local de destino"
                            value={destino}
                            onChange={(e) => setDestino(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="DataIda" className="form-label">
                            Data de Ida
                        </label>
                        <input
                            type="text"
                            id="DataIda"
                            className="form-control"
                            placeholder="Data de Ida"
                            value={dataIda}
                            onChange={(e) => setDataIda(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="DataVolta" className="form-label">
                            Data de Volta
                        </label>
                        <input
                            type="text"
                            id="DataVolta"
                            className="form-control"
                            placeholder="Data de Volta"
                            value={dataVolta}
                            onChange={(e) => setDataVolta(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="PrecoTotal" className="form-label">
                            Preço total da viagem
                        </label>
                        <input
                            type="number"
                            id="PrecoTotal"
                            className="form-control"
                            placeholder="Ex.: 1000,00"
                            value={precoTotal}
                            onChange={(e) => setPrecoTotal(e.target.value)}
                        />
                    </div>
                 
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={(e) => criarOuEditarViagem(e)}>
                        Enviar
                    </button>
                    <Link
                        to="/Viagens"
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