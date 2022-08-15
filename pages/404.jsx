import React, {useState} from 'react';
import { useRouter } from 'next/router';
import ALink from '../components/features/alink';
import Footer from '../components/partials/footer/footer';

function ErrorPage () {
    const [ containerClass, setContainerClass ] = useState( 'container' );
    const router = useRouter();
    const retornar = ()=>{
    router.push('/', undefined, { shallow: true })
    }

    return ( 
        <>      
        <div className="main">
                <nav className="breadcrumb-nav border-0 mb-0">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <ALink href="/">Inicio</ALink>
                            </li>
                            <li className="breadcrumb-item">
                                <ALink href="#">Páginas</ALink>
                            </li>
                            <li className="breadcrumb-item active">404</li>
                        </ol>
                    </div>
                </nav>

                <div className="error-content text-center position-relative" style={ { backgroundImage: `url(/images/backgrounds/error-bg.jpg)`, marginBottom: '-1px' } }>
                    <div className="container">
                        <h1 className="error-title">Error 404</h1>
                        <p>Lo sentimos, la página no está disponible o fué traladodo a otro link, retorne e intente nuevamente.</p>
                        <a onClick={ (  ) => { retornar( ); } } className="btn btn-outline-primary-2 btn-minwidth-lg">
                            <span>RETORNAR</span>
                            <i className="icon-long-arrow-right"></i>
                        </a>
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
        </div>        
        </>
    )
}

export default React.memo( ErrorPage );