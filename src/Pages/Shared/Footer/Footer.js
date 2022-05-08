import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className="pg-footer mt-5">
            <footer className="footer mt-5">
                <div className="footer-content">
                    <div className="footer-content-column">
                        <div className="footer-logo">
                            <a className="footer-logo-link" href="#">
                                <span className="hidden-link-text">LOGO</span>
                                <h1>Warehouse Management</h1>
                            </a>
                        </div>
                        <div className="footer-menu">
                            <h2 className="footer-menu-name"> Get Started</h2>
                            <ul id="menu-get-started" className="footer-menu-list">
                                <li className="menu-item menu-item-type-post_type menu-item-object-product">
                                    <a href="#">Start</a>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-product">
                                    <a href="#">Documentation</a>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-product">
                                    <a href="#">Installation</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-content-column">
                        <div className="footer-menu">
                            <h2 className="footer-menu-name"> Company</h2>
                            <ul id="menu-company" className="footer-menu-list">
                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                    <a href="#">Contact</a>
                                </li>
                                <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                                    <a href="#">News</a>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                    <a href="#">Careers</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-menu">
                            <h2 className="footer-menu-name"> Legal</h2>
                            <ul id="menu-legal" className="footer-menu-list">
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                                    <a href="#">Privacy Notice</a>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                    <a href="#">Terms of Use</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-content-column">
                        <div className="footer-menu">
                            <h2 className="footer-menu-name"> Quick Links</h2>
                            <ul id="menu-quick-links" className="footer-menu-list">
                                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                                    <a target="_blank" rel="noopener noreferrer" href="#">Support Center</a>
                                </li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                                    <a target="_blank" rel="noopener noreferrer" href="#">Service Status</a>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                    <a href="#">Security</a>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                    <a href="#">Blog</a>
                                </li>
                                <li className="menu-item menu-item-type-post_type_archive menu-item-object-customer">
                                    <a href="#">Customers</a></li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                    <a href="#">Reviews</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-content-column">
                        <div className="footer-call-to-action">
                            <h2 className="footer-call-to-action-title"> Let's Chat</h2>
                            <p className="footer-call-to-action-description"> Have a support question?</p>
                            <a className="footer-call-to-action-button button" href="#" target="_self"> Get in Touch </a>
                        </div>
                        <div className="footer-call-to-action">
                            <h2 className="footer-call-to-action-title"> You Call Us</h2>
                            <p className="footer-call-to-action-link-wrapper"> <a className="footer-call-to-action-link" href="tel:0124-64XXXX" target="_self"> 0124-64XXXX </a></p>
                        </div>
                    </div>

                </div>
                <div className="footer-copyright">
                    <div className="footer-copyright-wrapper">
                        <p className="footer-copyright-text">
                            <a className="footer-copyright-link" href="#" target="_self"> ©{year}  | Warehouse Management | All rights reserved. </a>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;