import React from "react";
import img1 from "../assets/img/email.jpg";
import img2 from "../assets/img/whatsapp.png";

export default function Contato() {
    return (
        <main class="container ">
            <div class="row ">
                <div class="col-7">
                    <header>
                        <h2>Fale conosco</h2>
                    </header>
                    <section>
                        <form action="" id="form_contato" class="alert alert-dark">
                            <div className="form-group">
                                <label htmlFor="name">Nome:</label>
                                <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Digite o seu nome..." />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">E-mail:</label>
                                <input className="form-control" type="email" id="email" placeholder="Digite o seu melhor e-mail..."/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="assunto">Assunto:</label>
                                <input type="text" className="form-control" id="assunto" placeholder="Digite aqui o motivo do contato..." />
                            </div>
                            <div className="form-group">
                                <label htmlFor="msg">Mensagem:</label> <br />
                                <textarea className="form-control" id="msg" cols="50" rows="2" placeholder="Digite aqui a sua mensagem..." />
                            </div>
                            <button type="submit" className="btn btn-dark">Enviar</button> <br /> <br /> <br />
                        </form>

                        <section id="contatos">
                            <div id="contato" class="row">
                                <div class="col-1">
                                    <img src={img1} style={{ width: "50px" }} alt="email" />
                                </div>
                                <div class="col-10">
                                    <p>contato@agenciadeviagens.com</p>
                                </div>
                            </div>
                            <div id="contato" class="row">
                                <div class="col-1">
                                    <img src={img2} style={{ width: "40px" }} alt="whatsapp" />
                                </div>
                                <div class="col-10">
                                    <p>(81) 99999-9999</p>
                                </div>
                            </div>
                        </section>
                    </section>
                </div>
            </div>
        </main>
    );
}