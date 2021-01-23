import React from "react";
import "../product.page/product.page.css";
import imagen1 from "../card.product/imagen1.jpg";
import imagen2 from "../card.product/imagen1.jpg";
import imagen3 from "../card.product/imagen1.jpg";
import { useParams } from 'react-router-dom';
import { servicio } from '../../services/commonService.jsx'

function ProductPage({productosList}) {
  var itemId = String(useParams().producto).split('$')[1];
  //var product = servicio.
  var product = productosList.find( item => {
                  if(item.id == itemId){
                    return item;
                  }
                });
console.log(product); 
  
  function agregarAlCarrito() {
    console.log("Comprando .....");
  }

  function comprar() {}

  // Esto se verá en pantalla
  return (
    <div className="container">
      <div className="general-container">
        <div className="container-images">
          <div className="container-col1">
            <div className="gallery-col">
              <img src={imagen1} className="mini-image"></img>
              <img src={imagen2} className="mini-image"></img>
              <img src={imagen3} className="mini-image"></img>
            </div>
          </div>
          <div className="container-col2">
            <div className="image-col">
              <img src={imagen1} className="image"></img>
            </div>
          </div>
        </div>
        <div className="container-external">
          <div className="container-conditions">
            <div className="product-name">{product.nombre}</div>
            <div className="cash-mercadopago-container">
              <div className="prize-page">$ {product.precio}</div>
              <div className="commentary">Efectivo o transferencia</div>
            </div>
            <div className="logistic-container">Recibi tu producto</div>
            <div className="buy-container">

            <div className="button buy" onClick={() => comprar()}>
              Comprar
            </div>
            <div className="button addCart" onClick={() => agregarAlCarrito()}>
              Agregar al carrito
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="specifications">
          <div className="specification-title-container">
            <div className="specification-title">Especificaciones</div>
            <progress max="100" value="50"></progress>
          </div>
          <div className="specification-product-container">
            <div className="specifications-first-column">
              <span className="specification-row">
                <p className="specification-item"><b>Marca : </b> Logitech </p>
              </span>
              <span className="specification-row">
                <p className="specification-item"><b>Modelo : </b> G305 </p>
              </span>
              <span className="specification-row">
                <p className="specification-item"><b>Dpi : </b> 12.000 </p>
              </span>
            </div>          
          </div>

        </div>
    </div>
  );
}

export default ProductPage;
