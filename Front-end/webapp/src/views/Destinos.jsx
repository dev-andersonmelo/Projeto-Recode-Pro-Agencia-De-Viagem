import React from "react";
import img1 from "../assets/img/caribe.jpg";
import img2 from "../assets/img/Porto-de-Galinhas-Resorts-Pousadas.jpg";
import img3 from "../assets/img/paris-no-inverno.jpg";

export default function Destinos()
{
    return(
        <main className="container">
            <h2>Destinos</h2>
        <div className="row">
            <div className="col-8">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={img1} alt="Caribe" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={img2} alt="Porto de Galinhas" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={img3} alt="Terceiro Slide" />
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
            </div>
        </div>
        <br /> <br /> <br /><br />
    </main>
    );
}