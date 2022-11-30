import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Geem</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Portfolio</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://github.com/" className="footer__social-link" target="_blank">
                    <i class='bx bxl-github'></i>
                </a>
            </div> 

            <span className="footer__copy">&#169; MJPlayground. All rights reserved</span> 
        </div>
    </footer>
  )
}

export default Footer