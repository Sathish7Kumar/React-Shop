import React from 'react';

export default function Navbar({cart}){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a href="#"  className="navbar-brand">React-Kart</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#dropdown"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="dropdown">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a href="#" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">About</a>
                </li>
                <li className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" id="ddmenu" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop</a>
                    <div className="dropdown-menu" aria-labelledby="ddmenu">
                        <a href="#" className="dropdown-item">All Products</a> <hr/>
                        <a href="#"  className="dropdown-item">New-Product</a>
                        <a href="#" className="dropdown-item">Popular-Items</a>
                    </div>
                </li>
            </ul> <hr/>
            <form action="" className="d-flex">
                <button className="btn btn-outline-dark" type="submit">
                    <i className="fa fa-shopping-cart me-1" aria-hidden="true"></i> Cart <span className="badge bg-dark text-white ms-1 rounded-pill">{cart}</span>
                </button>
            </form>
        </div>
    </nav>
    )
}