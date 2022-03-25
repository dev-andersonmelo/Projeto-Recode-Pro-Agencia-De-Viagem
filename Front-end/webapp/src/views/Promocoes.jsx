import React from "react";
import img1 from "../assets/img/bahia.jpg";
import img2 from "../assets/img/foz-do-iguacu.jpg";
import img3 from "../assets/img/Gramado.jpg";
import img4 from "../assets/img/rio-de-janeiro.jpg";
import img5 from "../assets/img/grecia-santorini_640.jpg";
import img6 from "../assets/img/holanda-amsterdam_640.jpg";
import img7 from "../assets/img/italia_640.jpg";
import img8 from "../assets/img/inglaterra-londres_640.jpg";

export default function Promocoes() {
    return (
        <main className="container" >
            <div>
                <h2>Promoções</h2>
                <br /> <br />
            </div>

            <div className="col-11 m-auto">
                <h3>Conheça o Brasil</h3>
                <div className="card-group">
                    <div className="card border m-2">
                        <img className="card-img-top" style={{height:"150px"}} src={img1} alt="Elevador Lacerda - Bahia" />
                        <div className="card-body">
                            <h5 className="card-title">Salvador-BA</h5>
                            <p className="card-text"><small className="text-muted">Aéreo + Hotel a partir de</small></p>
                            <p className="card-text"><strong>R$795,90</strong></p>
                            <p className="card-text"><small className="text-muted">Pague em até 12x</small></p>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-success" type="submit">COMPRAR</button>
                        </div>
                    </div>
                    <div className="card border m-2">
                        <img className="card-img-top" style={{height:"150px"}} src={img2} alt="Topo de Foz do Iguaçu" />
                        <div className="card-body">
                            <h5 className="card-title">Foz do Iguaçu-PR</h5>
                            <p className="card-text"><small className="text-muted">Aéreo + Hotel a partir de</small></p>
                            <p className="card-text"><strong>R$998,90</strong></p>
                            <p className="card-text"><small className="text-muted">Pague em até 12x</small></p>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-success" type="submit">COMPRAR</button>
                        </div>
                    </div>
                    <div className="card border m-2">
                        <img className="card-img-top" style={{height:"150px"}} src={img3} alt="Gramado" />
                        <div className="card-body">
                            <h5 className="card-title">Gramado-RS</h5>
                            <p className="card-text"><small className="text-muted">Aéreo + Hotel a partir de</small></p>
                            <p className="card-text"><strong>R$1.089,90</strong></p>
                            <p className="card-text"><small className="text-muted">Pague em até 12x</small></p>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-success" type="submit">COMPRAR</button>
                        </div>
                    </div>
                    <div className="card border m-2">
                        <img className="card-img-top" style={{height:"150px"}} src={img4} alt="Calçadão de Copacabana - Rio de Janeiro" />
                        <div className="card-body">
                            <h5 className="card-title">Rio de Janeiro-RJ</h5>
                            <p className="card-text"><small className="text-muted">Aéreo + Hotel a partir de</small></p>
                            <p className="card-text"><strong>R$699,90</strong></p>
                            <p className="card-text"><small className="text-muted">Pague em até 12x</small></p>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-success" type="submit">COMPRAR</button>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="col-11 m-auto">
                <h3>Conheça a Europa</h3>
                <div className="card-group">
                    <div className="card border m-2">
                        <img className="card-img-top" style={{height:"150px"}} src={img5} alt="Elevador Lacerda - Bahia" />
                        <div className="card-body">
                            <h5 className="card-title">Grécia</h5>
                            <p className="card-text"><small className="text-muted">Aéreo + Hotel a partir de</small></p>
                            <p className="card-text"><strong>R$2.795,90</strong></p>
                            <p className="card-text"><small className="text-muted">Pague em até 12x</small></p>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-success" type="submit">COMPRAR</button>
                        </div>
                    </div>
                    <div className="card border m-2">
                        <img className="card-img-top" style={{height:"150px"}} src={img6} alt="Topo de Foz do Iguaçu" />
                        <div className="card-body">
                            <h5 className="card-title">Holanda</h5>
                            <p className="card-text"><small className="text-muted">Aéreo + Hotel a partir de</small></p>
                            <p className="card-text"><strong>R$2.998,90</strong></p>
                            <p className="card-text"><small className="text-muted">Pague em até 12x</small></p>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-success" type="submit">COMPRAR</button>
                        </div>
                    </div>
                    <div className="card border m-2">
                        <img className="card-img-top" style={{height:"150px"}} src={img7} alt="Gramado" />
                        <div className="card-body">
                            <h5 className="card-title">Itália</h5>
                            <p className="card-text"><small className="text-muted">Aéreo + Hotel a partir de</small></p>
                            <p className="card-text"><strong>R$3.089,90</strong></p>
                            <p className="card-text"><small className="text-muted">Pague em até 12x</small></p>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-success" type="submit">COMPRAR</button>
                        </div>
                    </div>
                    <div className="card border m-2">
                        <img className="card-img-top" style={{height:"150px"}} src={img8} alt="Calçadão de Copacabana - Rio de Janeiro" />
                        <div className="card-body">
                            <h5 className="card-title">Londres</h5>
                            <p className="card-text"><small className="text-muted">Aéreo + Hotel a partir de</small></p>
                            <p className="card-text"><strong>R$4.699,90</strong></p>
                            <p className="card-text"><small className="text-muted">Pague em até 12x</small></p>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-success" type="submit">COMPRAR</button>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </main>
    );
}