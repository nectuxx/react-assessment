// Header.js
import React from 'react';

export function Footer () {
    
        return (
          <footer>
              <div className="section-footer">
                <ul className="nav-footer justify-content-between">
                <li className="footer-item">
                  <a className="nav-link active" href="#!">About</a>
                </li>
                <li className="footer-item">
                  <a className="nav-link" href="#!">Sign in</a>
                </li>
                <li className="footer-item">
                  <a className="nav-link" href="#!">Community</a>
                </li>
              </ul>
              <ul className="nav-footer justify-content-between">
                <li className="footer-item">
                  <a className="nav-link active" href="#!">Pricing</a>
                </li>
                <li className="footer-item">
                  <a className="nav-link" href="#!">Free Trial</a>
                </li>
                <li className="footer-item">
                  <a className="nav-link" href="#!">Updates</a>
                </li>
              </ul>
            </div>
            <div className="text-center text-copy">
                <p>2020. Terms - Privacy. By the teams behind Greenhouse.</p>
              </div>
            </footer>
        );
    
}