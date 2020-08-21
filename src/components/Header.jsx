// Header.js
import React from 'react';
import logo from "../images/logo.png";

export function Header () {
    
        return (
            <header>
    
              <div className="menu-header">
                <span className="logo-bg"></span>
                <nav className="navbar navbar-expand-lg navbar-light c-navbar-dark">  
                  <a className="navbar-brand" href="#">
                    <img src={logo} alt="logo" />
                    Letter
                  </a>

                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a className="nav-link" href="#">Plugins </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Sign in</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Free Trial</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </header>
        );
    
}