import React from 'react'
import '../../assets/css/plugins/swiper-bundle.min.css';
import '../../assets/css/plugins/glightbox.min.css';
import '../../assets/css/vendor/bootstrap.min.css';
import '../../assets/css/style.css';

function Footer_col_2() {
  return (
    <div className="col-lg-3 col-md-6">
                        <div className="footer__widget">
                            <h2 className="footer__widget--title ">Quick Links <button className="footer__widget--button" aria-label="footer widget button"></button>
                                <svg className="footer__widget--title__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12.355" height="8.394" viewBox="0 0 10.355 6.394">
                                    <path  d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z" transform="translate(-6 -8.59)" fill="currentColor"></path>
                                </svg>
                            </h2>
                            <ul className="footer__widget--menu footer__widget--inner">
                                <li className="footer__widget--menu__list"><a className="footer__widget--menu__text" href="about.html">About Us</a></li>
                                <li className="footer__widget--menu__list"><a className="footer__widget--menu__text" href="wishlist.html">Wishlist</a></li>
                                <li className="footer__widget--menu__list"><a className="footer__widget--menu__text" href="contact.html">Contact Us</a></li>
                                <li className="footer__widget--menu__list"><a className="footer__widget--menu__text" href="privacy-policy.html">Privacy Policy</a></li>
                                <li className="footer__widget--menu__list"><a className="footer__widget--menu__text" href="faq.html">Frequently</a></li>
                            </ul>
                        </div>
    </div>
  )
}

export default Footer_col_2
