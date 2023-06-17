import React, { useState } from "react";
import './../assets/css/plugins/swiper-bundle.min.css';
import './../assets/css/plugins/glightbox.min.css';
import './../assets/css/vendor/bootstrap.min.css';
import './../assets/css/style.css';
import Menu from '../Componentes/Menu'
import Icons from "./header_icon/Icons";
import Carrito from "./carrito/Carrito";

const Header = () => {

  return (
    <header className="header__section header__transparent">
        <div className="main__header header__sticky">
            <div className="container-fluid">
                <div className="main__header--inner position__relative d-flex justify-content-between align-items-center">
                    <div className="offcanvas__header--menu__open ">
                        <a className="offcanvas__header--menu__open--btn" href="javascript:void(0)">
                            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon offcanvas__header--menu__open--svg" viewBox="0 0 512 512"><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M80 160h352M80 256h352M80 352h352"/></svg>
                            <span className="visually-hidden">Offcanvas Menu Open</span>
                        </a>
                    </div>
                    <div className="main__logo">
                        <h1 className="main__logo--title"><a className="main__logo--link" href="index.html">Tienda Pyme</a></h1>
                    </div>
                    
                    <Menu/>

                    <Icons/>
                </div>
            </div>
        </div>
    
        <div className="offcanvas__header" tabIndex="-1">
            <div className="offcanvas__inner">
                <div className="offcanvas__logo">
                    <a className="offcanvas__logo_link" href="index.html">
                        <img src="assets/img/logo/nav-log.webp" alt="Furea Logo"/>
                    </a>
                    <button className="offcanvas__close--btn" aria-label="offcanvas close btn">close</button>
                </div>
                <nav className="offcanvas__menu">
                    <ul className="offcanvas__menu_ul">
                        <li className="offcanvas__menu_li">
                            <a className="offcanvas__menu_item" href="index.html">Home</a>
                            <ul className="offcanvas__sub_menu">
                                <li className="offcanvas__sub_menu_li"><a href="index.html" className="offcanvas__sub_menu_item">Home One</a></li>
                                <li className="offcanvas__sub_menu_li"><a href="index-2.html" className="offcanvas__sub_menu_item">Home Two</a></li>
                                <li className="offcanvas__sub_menu_li"><a href="index-3.html" className="offcanvas__sub_menu_item">Home Three</a></li>
                            </ul>
                        </li>
                        <li className="offcanvas__menu_li">
                            <a className="offcanvas__menu_item" href="#">Shop</a>
                            <ul className="offcanvas__sub_menu">
                                <li className="offcanvas__sub_menu_li">
                                    <a href="#" className="offcanvas__sub_menu_item">Column One</a>
                                    <ul className="offcanvas__sub_menu">
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="shop.html">Shop Left Sidebar</a></li>
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="shop-grid.html">Shop Grid</a></li>
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="shop-grid-list.html">Shop Grid List</a></li>
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="shop-list.html">Shop List</a></li>
                                    </ul>
                                </li>
                                <li className="offcanvas__sub_menu_li">
                                    <a href="#" className="offcanvas__sub_menu_item">Column Two</a>
                                    <ul className="offcanvas__sub_menu">
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="product-details.html">Standard Product</a></li>
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="product-variable.html">Video Product</a></li>
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="product-variable.html">Variable Product</a></li>
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="product-left-sidebar.html">Product Left Sidebar</a></li>
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="product-gallery.html">Product Gallery</a></li>
                                    </ul>
                                </li>
                                <li className="offcanvas__sub_menu_li">
                                    <a href="#" className="offcanvas__sub_menu_item">Column Three</a>
                                    <ul className="offcanvas__sub_menu">
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="my-account.html">My Account</a></li>
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="my-account-2.html">My Account 2</a></li>
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="404.html">404 Page</a></li>
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="login.html">Login Page</a></li>
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="faq.html">Faq Page</a></li>
                                    </ul>
                                </li>
                                <li className="offcanvas__sub_menu_li">
                                    <a href="#" className="offcanvas__sub_menu_item">Column Four</a>
                                    <ul className="offcanvas__sub_menu">
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="compare.html">Compare Pages</a></li>
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="cart.html">Cart Page</a></li>
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="checkout.html">Checkout page</a></li>
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="wishlist.html">Wishlist Page</a></li>
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="404.html">Error Page</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="offcanvas__menu_li">
                            <a className="offcanvas__menu_item" href="#">Blog</a>
                            <ul className="offcanvas__sub_menu">
                                <li className="offcanvas__sub_menu_li"><a href="blog.html" className="offcanvas__sub_menu_item">Blog Grid</a></li>
                                <li className="offcanvas__sub_menu_li"><a href="blog-details.html" className="offcanvas__sub_menu_item">Blog Details</a></li>
                                <li className="offcanvas__sub_menu_li"><a href="blog-left-sidebar.html" className="offcanvas__sub_menu_item">Blog Left Sidebar</a></li>
                                <li className="offcanvas__sub_menu_li"><a href="blog-right-sidebar.html" className="offcanvas__sub_menu_item">Blog Right Sidebar</a></li>
                            </ul>
                        </li>
                        <li className="offcanvas__menu_li">
                            <a className="offcanvas__menu_item" href="#">Pages</a>
                            <ul className="offcanvas__sub_menu">
                                <li className="offcanvas__sub_menu_li"><a href="about.html" className="offcanvas__sub_menu_item">About Us</a></li>
                                <li className="offcanvas__sub_menu_li"><a href="contact.html" className="offcanvas__sub_menu_item">Contact Us</a></li>
                                <li className="offcanvas__sub_menu_li"><a href="cart.html" className="offcanvas__sub_menu_item">Cart Page</a></li>
                                <li className="offcanvas__sub_menu_li"><a href="portfolio.html" className="offcanvas__sub_menu_item">Portfolio Page</a></li>
                                <li className="offcanvas__sub_menu_li"><a href="wishlist.html" className="offcanvas__sub_menu_item">Wishlist Page</a></li>
                                <li className="offcanvas__sub_menu_li"><a href="login.html" className="offcanvas__sub_menu_item">Login Page</a></li>
                                <li className="offcanvas__sub_menu_li"><a href="404.html" className="offcanvas__sub_menu_item">Error Page</a></li>
                            </ul>
                        </li>
                        <li className="offcanvas__menu_li"><a className="offcanvas__menu_item" href="about.html">About</a></li>
                        <li className="offcanvas__menu_li"><a className="offcanvas__menu_item" href="contact.html">Contact</a></li>
                    </ul>
                    <div className="offcanvas__account--items">
                        <a className="offcanvas__account--items__btn d-flex align-items-center" href="login.html">
                        <span className="offcanvas__account--items__icon"> 
                            <svg xmlns="http://www.w3.org/2000/svg"  width="20.51" height="19.443" viewBox="0 0 512 512"><path d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/></svg> 
                            </span>
                        <span className="offcanvas__account--items__label">Login / Register</span>
                        </a>
                    </div>

                </nav>
            </div>
        </div>
        {/* Nota: Hay que crear una componente Toolbar */}
        <div className="offcanvas__stikcy--toolbar" tabIndex="-1">
            <ul className="d-flex justify-content-between align-items-center">
                <li className="offcanvas__stikcy--toolbar__list">
                    <a className="offcanvas__stikcy--toolbar__btn" href="index.html">
                    <span className="offcanvas__stikcy--toolbar__icon"> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="21.51" height="21.443" viewBox="0 0 22 17"><path fill="currentColor" d="M20.9141 7.93359c.1406.11719.2109.26953.2109.45703 0 .14063-.0469.25782-.1406.35157l-.3516.42187c-.1172.14063-.2578.21094-.4219.21094-.1406 0-.2578-.04688-.3515-.14062l-.9844-.77344V15c0 .3047-.1172.5625-.3516.7734-.2109.2344-.4687.3516-.7734.3516h-4.5c-.3047 0-.5742-.1172-.8086-.3516-.2109-.2109-.3164-.4687-.3164-.7734v-3.6562h-2.25V15c0 .3047-.11719.5625-.35156.7734-.21094.2344-.46875.3516-.77344.3516h-4.5c-.30469 0-.57422-.1172-.80859-.3516-.21094-.2109-.31641-.4687-.31641-.7734V8.46094l-.94922.77344c-.11719.09374-.24609.14062-.38672.14062-.16406 0-.30468-.07031-.42187-.21094l-.35157-.42187C.921875 8.625.875 8.50781.875 8.39062c0-.1875.070312-.33984.21094-.45703L9.73438.832031C10.1094.527344 10.5312.375 11 .375s.8906.152344 1.2656.457031l8.6485 7.101559zm-3.7266 6.50391V7.05469L11 1.99219l-6.1875 5.0625v7.38281h3.375v-3.6563c0-.3046.10547-.5624.31641-.7734.23437-.23436.5039-.35155.80859-.35155h3.375c.3047 0 .5625.11719.7734.35155.2344.211.3516.4688.3516.7734v3.6563h3.375z"></path></svg>
                        </span>
                    <span className="offcanvas__stikcy--toolbar__label">Home</span>
                    </a>
                </li>
                <li className="offcanvas__stikcy--toolbar__list">
                    <a className="offcanvas__stikcy--toolbar__btn" href="shop.html">
                    <span className="offcanvas__stikcy--toolbar__icon"> 
                        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="18.51" height="17.443" viewBox="0 0 448 512"><path d="M416 32H32A32 32 0 0 0 0 64v384a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32zm-16 48v152H248V80zm-200 0v152H48V80zM48 432V280h152v152zm200 0V280h152v152z"></path></svg>
                        </span>
                    <span className="offcanvas__stikcy--toolbar__label">Shop</span>
                    </a>
                </li>
                <li className="offcanvas__stikcy--toolbar__list ">
                    <a className="offcanvas__stikcy--toolbar__btn search__open--btn" href="javascript:void(0)">
                        <span className="offcanvas__stikcy--toolbar__icon"> 
                            <svg xmlns="http://www.w3.org/2000/svg"  width="22.51" height="20.443" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448"/></svg>   
                        </span>
                    <span className="offcanvas__stikcy--toolbar__label">Search</span>
                    </a>
                </li>
                <li className="offcanvas__stikcy--toolbar__list">
                    
                    <Carrito/>

                </li>
                <li className="offcanvas__stikcy--toolbar__list">
                    <a className="offcanvas__stikcy--toolbar__btn" href="wishlist.html">
                        <span className="offcanvas__stikcy--toolbar__icon"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="18.541" height="15.557" viewBox="0 0 18.541 15.557">
                            <path  d="M71.775,135.51a5.153,5.153,0,0,1,1.267-1.524,4.986,4.986,0,0,1,6.584.358,4.728,4.728,0,0,1,1.174,4.914,10.458,10.458,0,0,1-2.132,3.808,22.591,22.591,0,0,1-5.4,4.558c-.445.282-.9.549-1.356.812a.306.306,0,0,1-.254.013,25.491,25.491,0,0,1-6.279-4.8,11.648,11.648,0,0,1-2.52-4.009,4.957,4.957,0,0,1,.028-3.787,4.629,4.629,0,0,1,3.744-2.863,4.782,4.782,0,0,1,5.086,2.447c.013.019.025.034.057.076Z" transform="translate(-62.498 -132.915)" fill="currentColor"/>
                            </svg> 
                        </span>
                        <span className="offcanvas__stikcy--toolbar__label">Wishlist</span>
                        <span className="items__count wishlist__count">3</span> 
                    </a>
                </li>
            </ul>
        </div>
         
        <div className="predictive__search--box " tabIndex="-1">
            <div className="predictive__search--box__inner">
                <h2 className="predictive__search--title">Search Products</h2>
                <form className="predictive__search--form" action="#">
                    <label>
                        <input className="predictive__search--input" placeholder="Search Here" type="text"/>
                    </label>
                    <button className="predictive__search--button" aria-label="search button"><svg className="header__search--button__svg" xmlns="http://www.w3.org/2000/svg" width="30.51" height="25.443" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448"/></svg>  </button>
                </form>
            </div>
            <button className="predictive__search--close__btn" aria-label="search close btn">
                <svg className="predictive__search--close__icon" xmlns="http://www.w3.org/2000/svg" width="40.51" height="30.443"  viewBox="0 0 512 512"><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368"/></svg>
            </button>
        </div>   
</header>
  )
}

export default Header
