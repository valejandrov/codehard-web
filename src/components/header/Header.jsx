import React from 'react';
import logo from './logo-u2.png';
import cart from './shopping-cart.svg';
import './Header.css'
import { NavLink } from "react-router-dom";

const Header = () => {
    return (  
        <div className="container-header">
            <img src={logo} className="logo" alt="codehard"></img>
            <div>
                
                    <button><NavLink className="navbar-item" activeClassName="is-active" to="/">Main</NavLink></button>
                    <button><NavLink className="navbar-item" activeClassName="is-active" to="/productPage">Product Page</NavLink></button>
                
            </div>
            <div className="cart-container">
                <div className="circle-cart"></div>
                <img src={cart} className="cart" alt="Carrito"></img>
            </div>
        </div>
    );
}
 
export default Header;