import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div class="pg-footer mt-5">
            <footer class="footer mt-5">
                <div class="footer-content">
                    <div class="footer-content-column">
                        <div class="footer-logo">
                            <a class="footer-logo-link" href="#">
                                <span class="hidden-link-text">LOGO</span>
                                <h1>Warehouse Management</h1>
                            </a>
                        </div>
                        <div class="footer-menu">
                            <h2 class="footer-menu-name"> Get Started</h2>
                            <ul id="menu-get-started" class="footer-menu-list">
                                <li class="menu-item menu-item-type-post_type menu-item-object-product">
                                    <a href="#">Start</a>
                                </li>
                                <li class="menu-item menu-item-type-post_type menu-item-object-product">
                                    <a href="#">Documentation</a>
                                </li>
                                <li class="menu-item menu-item-type-post_type menu-item-object-product">
                                    <a href="#">Installation</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-content-column">
                        <div class="footer-menu">
                            <h2 class="footer-menu-name"> Company</h2>
                            <ul id="menu-company" class="footer-menu-list">
                                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                    <a href="#">Contact</a>
                                </li>
                                <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                                    <a href="#">News</a>
                                </li>
                                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                    <a href="#">Careers</a>
                                </li>
                            </ul>
                        </div>
                        <div class="footer-menu">
                            <h2 class="footer-menu-name"> Legal</h2>
                            <ul id="menu-legal" class="footer-menu-list">
                                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                                    <a href="#">Privacy Notice</a>
                                </li>
                                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                    <a href="#">Terms of Use</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-content-column">
                        <div class="footer-menu">
                            <h2 class="footer-menu-name"> Quick Links</h2>
                            <ul id="menu-quick-links" class="footer-menu-list">
                                <li class="menu-item menu-item-type-custom menu-item-object-custom">
                                    <a target="_blank" rel="noopener noreferrer" href="#">Support Center</a>
                                </li>
                                <li class="menu-item menu-item-type-custom menu-item-object-custom">
                                    <a target="_blank" rel="noopener noreferrer" href="#">Service Status</a>
                                </li>
                                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                    <a href="#">Security</a>
                                </li>
                                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                    <a href="#">Blog</a>
                                </li>
                                <li class="menu-item menu-item-type-post_type_archive menu-item-object-customer">
                                    <a href="#">Customers</a></li>
                                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                    <a href="#">Reviews</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-content-column">
                        <div class="footer-call-to-action">
                            <h2 class="footer-call-to-action-title"> Let's Chat</h2>
                            <p class="footer-call-to-action-description"> Have a support question?</p>
                            <a class="footer-call-to-action-button button" href="#" target="_self"> Get in Touch </a>
                        </div>
                        <div class="footer-call-to-action">
                            <h2 class="footer-call-to-action-title"> You Call Us</h2>
                            <p class="footer-call-to-action-link-wrapper"> <a class="footer-call-to-action-link" href="tel:0124-64XXXX" target="_self"> 0124-64XXXX </a></p>
                        </div>
                    </div>
                    
                </div>
                <div class="footer-copyright">
                    <div class="footer-copyright-wrapper">
                        <p class="footer-copyright-text">
                            <a class="footer-copyright-link" href="#" target="_self"> ©{year}  | Warehouse Management | All rights reserved. </a>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;