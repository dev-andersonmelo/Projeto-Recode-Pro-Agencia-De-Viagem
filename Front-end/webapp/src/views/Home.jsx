import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/img/disney-pluto_1280.jpg";
import img2 from "../assets/img/disney-day_1280.jpg";
import img3 from "../assets/img/disney-night_1280.jpg";

export default function Home() {
    return (
        <main className="container">
            <div className="jumbotron">
                <h1 className="display-4">Vamos viajar!</h1>
                <p className="lead">Uma pesquisa britânica demonstrou que viajar agrega muitos benefícios para a saúde, entre eles estão: melhora na qualidade do sono; diminui a pressão arterial, o que minimiza o risco de infarto e aumenta a absorção de vitaminas; e mais disposição física.</p>
                <hr className="my-4" />
                <p>Aproveite nossas ofertas imperdíveis.</p>
                <Link className="btn btn-success btn-lg" to="/Promocoes" role="button">Garanta sua próxima viagem</Link>
            </div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={img1} alt="Pluto." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Realize seu sonho de conhecer o Mickey, Minnie, Pateta e todas as princesas no mundo mágico da Disney! </h5>
                            <p>Divirta-se nos parques Walt Disney World Resort, Disneyland Resort e Disneyland Paris, ou ainda embarque nos Disney Cruise Line com a Agência de Viagens, que possui pacotes para a Disney a preços incríveis!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={img2} alt="Disney de dia." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Planeje as férias dos sonhos da sua família em um mundo de encanto e imaginação!</h5>
                            <p>
                            Explore atrações marcantes na Fantasyland, incluindo as diversões nas alturas de Dumbo the Flying Elephant, o mundo fantástico de The Many Adventures of Winnie the Pooh e as emoções musicais da Mickey’s PhilharMagic.
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={img3} alt="Disney a noite." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>No complexo Walt Disney World Resort a diversão não para nunca, para crianças e adultos.!</h5>
                            <p>Descubra experiências incríveis por todo o Walt Disney World Resort adicionando entradas válidas para os Parques Temáticos.</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Anterior</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Próximo</span>
                </a>
            </div>
            <br /> <br /> <br /> <br />
        </main>
    );
}