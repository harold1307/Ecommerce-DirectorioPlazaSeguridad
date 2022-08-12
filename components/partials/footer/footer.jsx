import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

import ALink from '../../features/alink';

function Footer() {
    const router = useRouter( "" );
    const [ isBottomSticky, setIsBottomSticky ] = useState( false );
    const [ containerClass, setContainerClass ] = useState( 'container' );

    useEffect( () => {
        document.querySelector( '.footer-middle' ).classList.remove( 'border-0' );
        if ( router.pathname == '/' ) document.querySelector( '.footer-middle' ).classList.add( 'border-0' );

        handleBottomSticky();
        setContainerClass( router.asPath.includes( 'fullwidth' ) ? 'container-fluid' : 'container' );
    }, [ router.asPath ] );

    useEffect( () => {
        window.addEventListener( 'resize', handleBottomSticky, { passive: true } );
        return () => {
            window.removeEventListener( 'resize', handleBottomSticky );
        }
    }, [] )

    function handleBottomSticky() {
        setIsBottomSticky( router.pathname.includes( 'product/default' ) && ( window.innerWidth > 991 ) );
    }

    return (
        <footer className="footer footer-2">
            <div className="footer-middle px-5">
                <div className={ containerClass }>
                    <div className="row">
                        <div className="col-sm-12 col-xl-4">
                            <div className="widget widget-about">
                                <img src="/Logo-Directorio-de-Seguridad.png" className="footer-logo" alt="Logo" width="200" />
                                <p>Plaza Seguridad® es una plataforma tecnológica de negocios que conecta a las personas con necesidades de seguridad y a las empresas que pueden proveer soluciones innovadoras para su protección y la de sus bienes en el ámbito en el que se desarrolla.</p>

                                <div className="widget-about-info">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-4">
                                            <span className="widget-about-title">Got Question? Call us 24/7</span>
                                            <ALink href="tel:123456789">+0123 456 789</ALink>
                                        </div>
                                        <div className="col-sm-6 col-md-8">
                                            <span className="widget-about-title">Payment Method</span>
                                            <figure className="footer-payments">
                                                <img src="/images/payments.png" alt="Payment methods" width="272" height="20" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-4 col-xl-2">
                            <div className="widget">
                                <h4 className="widget-title">Useful links</h4>

                                <ul className="widget-list">
                                    <li><ALink href="/pages/about">About Molla</ALink></li>
                                    <li><ALink href="/pages/about">How to shop on Molla</ALink></li>
                                    <li><ALink href="/pages/faq">FAQ</ALink></li>
                                    <li><ALink href="/pages/contact">Contact us</ALink></li>
                                    <li><ALink href="/pages/login">Log in</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-4 col-xl-2">
                            <div className="widget">
                                <h4 className="widget-title">Customer Service</h4>

                                <ul className="widget-list">
                                    <li><ALink href="#">Payment Methods</ALink></li>
                                    <li><ALink href="#">Money-back guarantee!</ALink></li>
                                    <li><ALink href="#">Returns</ALink></li>
                                    <li><ALink href="#">Shipping</ALink></li>
                                    <li><ALink href="#">Terms and conditions</ALink></li>
                                    <li><ALink href="#">Privacy Policy</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-4 col-xl-2">
                            <div className="widget">
                                <h4 className="widget-title">My Account</h4>

                                <ul className="widget-list">
                                    <li><ALink href="#">Sign In</ALink></li>
                                    <li><ALink href="/shop/cart">View Cart</ALink></li>
                                    <li><ALink href="/shop/wishlist">My Wishlist</ALink></li>
                                    <li><ALink href="#">Track My Order</ALink></li>
                                    <li><ALink href="#">Help</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-6 col-xl-2">
                            <div className="widget widget-newsletter">
                                <h4 className="widget-title">Sign up to newsletter</h4>

                                <p>Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan.</p>

                                <form action="#">
                                    <div className="input-group">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Enter your Email Address"
                                            aria-label="Email Adress"
                                            required
                                        />
                                        <div className="input-group-append">
                                            <button className="btn btn-dark" type="submit">
                                                <i className="icon-long-arrow-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom px-5">
                <div className={ containerClass }>
                    <p className="footer-copyright text-center">Copyright © { ( new Date() ).getFullYear() } Directorio Seguridad. Todos los derechos reservados.</p>
                    <ul className="footer-menu">
                        <li><ALink href="#">Terminos de Usos</ALink></li>
                        <li><ALink href="#">Políticas de Privacidad y Cookies</ALink></li>
                    </ul>

                    <div className="social-icons social-icons-color">
                        <span className="social-label">Redes sociales</span>

                        <ALink href="https://www.facebook.com/DirectoriodeSeguridad" className="social-icon social-facebook" rel="noopener noreferrer" title="Facebook"><i className="icon-facebook-f"></i></ALink>
                        <ALink href="https://twitter.com/DirdeSeguridad" className="social-icon social-twitter" rel="noopener noreferrer" title="Twitter"><i className="icon-twitter"></i></ALink>
                        <ALink href="https://www.instagram.com/directoriodeseguridad/" className="social-icon social-instagram" rel="noopener noreferrer" title="Instagram"><i className="icon-instagram"></i></ALink>
                        <ALink href="https://wa.me/50241975255" className="social-icon social-whatsapp" rel="noopener noreferrer" title="WhatsApp"><i className="icon-whatsApp"></i></ALink>
                        <ALink href="#" className="social-icon social-pinterest" rel="noopener noreferrer" title="Pinterest"><i className="icon-pinterest"></i></ALink>
                    </div>
                </div>
            </div>
            {
                isBottomSticky ?
                    <div className="mb-10"></div>
                    : ""
            }
        </footer>
    );
}

export default React.memo( Footer );