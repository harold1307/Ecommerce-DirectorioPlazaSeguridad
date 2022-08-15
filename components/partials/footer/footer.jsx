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
            <div className="footer-middle px-5 pt-5">
                <div className={ containerClass }>
                    <div className="row">
                        <div className="col-sm-12 col-xl-4 px-lg-2">
                            <div className="widget widget-about">
                                <img src="/Logo-Directorio-de-Seguridad.png" className="footer-logo" alt="Logo" width="200" />
                                <p>Plaza Seguridad® es una plataforma tecnológica de negocios que conecta a las personas con necesidades de seguridad y a las empresas que pueden proveer soluciones innovadoras para su protección y la de sus bienes en el ámbito en el que se desarrolla.</p>

                                <div className="widget-about-info">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-4">
                                            <span className="widget-about-title">¿Tiene alguna pregunta? Llamanos 24/7</span>
                                            <ALink href="tel:123456789">+0123 456 789</ALink>
                                        </div>
                                        <div className="col-sm-6 col-md-8">
                                            <span className="widget-about-title">Métodos de pago</span>
                                            <figure className="footer-payments">
                                                <img src="/images/payments.png" alt="metodos de pago" width="272" height="20" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-4 col-xl-2 px-lg-2">
                            <div className="widget">
                                <h4 className="widget-title">Accesos Directos</h4>
                                <ul className="widget-list">
                                    <li><ALink href="/nosotros">Acerca de Nosotros</ALink></li>
                                    <li><ALink href="/porque">¿Por qué Plaza Seguridad?</ALink></li>
                                    <li><ALink href="/faq">FAQ</ALink></li>
                                    <li><ALink href="/login">Iniciar Sesión</ALink></li>
                                    <li><ALink href="/registro">Registrarme</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-4 col-xl-2 px-lg-2">
                            <div className="widget">
                                <h4 className="widget-title">Servicios</h4>
                                <ul className="widget-list">
                                    <li><ALink href="#">Empresas</ALink></li>
                                    <li><ALink href="#">Productos</ALink></li>
                                    <li><ALink href="#">Categorías</ALink></li>
                                    <li><ALink href="#">Terminos y condiciones</ALink></li>
                                    <li><ALink href="#">Política de privacidad</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-4 col-xl-2 px-lg-2">
                            <div className="widget">
                                <h4 className="widget-title">Cuenta</h4>
                                <ul className="widget-list">
                                    <li><ALink href="#">Inicio de sesión</ALink></li>
                                    <li><ALink href="/shop/cart">Carrito</ALink></li>
                                    <li><ALink href="/shop/wishlist">favoritos</ALink></li>
                                    <li><ALink href="#">Historico</ALink></li>
                                    <li><ALink href="#">Ayuda</ALink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-4 col-xl-2 px-lg-2">
                            <div className="widget">
                                <h4 className="widget-title">Publicarme</h4>
                                <ul className="widget-list">
                                    <li><ALink href="#">Quiero publicarme</ALink></li>
                                    <li><ALink href="/shop/cart">Como publicarte</ALink></li>
                                    <li><ALink href="/shop/wishlist">Porque publicarte</ALink></li>                                    
                                </ul>
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