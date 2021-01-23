import React from 'react';
import imagen from '../card.product/image1.jpg';
import deliveryLogo from '../card.product/fast-delivery.svg'
import '../card.product/CardStyle.css'
import { Link } from "react-router-dom";

/*
interface producto{
    id: Number,
    nombre: string,
    precio: Number
}
*/

function CardProduct({producto}){

var numberFormat = 
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(producto.precio);

//new Intl.NumberFormat().format(number)


function abrirProducto(){
    
}


return(

<div className="CardStyle" onClick={() => abrirProducto()}>
    <div className="interno">
        <div>
            <img src={imagen} className="product-image" title="Mouse Logitech G305 Wireless"></img>
            <div className="content">
                <img src={deliveryLogo} className="delivery-logo" alt="Envíos a todo el país"></img>
                <span className="prize">
                    <div className="prize-special-container">
                        <span className="value">{numberFormat}</span>
                        <div className="special-commentary-container">
                            <span className="detail wrapper">Precio especial</span>
                        </div>
                    </div>
                </span>
                <div className="delivery">Envíos a todo el país</div>
                <div className="title">{producto.nombre}</div>
            </div>
        </div>
    </div>
</div>

)
}

export default CardProduct;

//      transition: box-shadow .2s ease-in-out;

  {/* 
                <div class="carousel-container arrow-visible">
                    <div class="slick-initialized slick-slider">
                        <button class="prev-button "></button>
                        <div role="presentation" class="slick-list">
                            
                            <div class="slick-track"
                                style="opacity: 1; transform: translate3d(-568px, 0px, 0px); width: 2840px;">
                                <div data-index="0" class="slick-slide" tabindex="-1"
                                    style="outline: none; width: 284px;">
                                    <img width="284" height="284"
                                        src="https://http2.mlstatic.com/D_NQ_NP_896154-MLA44064142054_112020-W.webp"
                                        class="ui-search-result-image__element"
                                        alt="Fuente Para Pc Gamer Aureox 600w Arxgp Conector Pcie 8 Pin"></img>
                                </div>
                                <div data-index="1" class="slick-slide" tabindex="-1"
                                    style="outline: none; width: 284px;">
                                    <img src="https://http2.mlstatic.com/D_678470-MLA44064118505_112020-O.jpg"
                                        class="ui-search-result-image__element"
                                        alt="Fuente Para Pc Gamer Aureox 600w Arxgp Conector Pcie 8 Pin"></img>
                                </div>
                                <div data-index="2" class="slick-slide slick-active" tabindex="-1"
                                    style="outline: none; width: 284px;">
                                    <img src="https://http2.mlstatic.com/D_942438-MLA44257861968_122020-O.jpg"
                                        class="ui-search-result-image__element"
                                        alt="Fuente Para Pc Gamer Aureox 600w Arxgp Conector Pcie 8 Pin"></img>
                                </div>
                                <div data-index="3" class="slick-slide" tabindex="-1"
                                    style="outline: none; width: 284px;">
                                    <img src="https://http2.mlstatic.com/D_773653-MLA44257861969_122020-O.jpg"
                                        class="ui-search-result-image__element"
                                        alt="Fuente Para Pc Gamer Aureox 600w Arxgp Conector Pcie 8 Pin"></img>
                                </div>
                                <div data-index="4" class="slick-slide" tabindex="-1"
                                    style="outline: none; width: 284px;">
                                </div>
                                <div data-index="5" class="slick-slide" tabindex="-1"
                                    style="outline: none; width: 284px;">
                                </div>
                                <div data-index="6" class="slick-slide" tabindex="-1"
                                    style="outline: none; width: 284px;">
                                </div>
                                <div data-index="7" class="slick-slide" tabindex="-1"
                                    style="outline: none; width: 284px;">
                                </div>
                            </div>
                            
                        </div>
                        <button class="next-button "></button>
                    </div>
                </div>
                */}