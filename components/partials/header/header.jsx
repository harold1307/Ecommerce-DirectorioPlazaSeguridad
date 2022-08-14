import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

import ALink from '../../features/alink';
//import LoginModal from '../../features/modals/login-modal';
import HeaderSearch from '../../partials/header/partials/header-search';
import CategoryMenu from '../../partials/header/partials/category-menu';
import LoginModal from '~/components/features/modals/login-modal';
import MainMenu from '../../partials/header/partials/main-menu';
import StickyHeader from '../../features/sticky-header';
import RegistroModal from '~/components/features/modals/registro-modal';
import CartMenu from '../../partials/header/partials/cart-menu';


function Header() {
    const router = useRouter();
    const [ containerClass, setContainerClass ] = useState( 'container' );

    function openMobileMenu() {
        document.querySelector( 'body' ).classList.add( 'mmenu-active' );
    }

    useEffect( () => {
        setContainerClass( router.asPath.includes( 'fullwidth' ) ? 'container-fluid' : 'container' );
    }, [ router.asPath ] );

    return (
        <header className="header header-14">
            <div className="header-top ">
                <div className={`${ containerClass } py-ms-2 py-lg-3 `}>
                    <div className="header-left pl-4">
                        <a href="tel:#">
                            <i className="icon-phone"></i>Teléfono: +0123 456 789
                        </a>
                    </div>
                    <div className="header-right pr-4">
                        <div className="top-menu d-flex"> 
                            <span className='text-capitalize mr-1'><ALink href="/registro" ><i className="icon-cog"></i> Crear una cuenta</ALink></span>
                            <span className='px-3'>  </span>
                            <span className='text-capitalize'><LoginModal /></span>                              
                                                                                                                                       
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-middle">
                <div className={ containerClass }>
                    <div className="row px-md-3">
                        <div className="col-auto col-lg-3 col-xl-3 col-xxl-2 justify-content-center">
                            <button className="mobile-menu-toggler" onClick={ openMobileMenu }>
                                <span className="sr-only">Toggle mobile menu</span>
                                <i className="icon-bars"></i>
                            </button>

                            <ALink href="/" className="logo">
                                <img src="/Logo-Directorio-de-Seguridad.png" alt="Logo" width={ 150 } />
                            </ALink>
                        </div>

                        <div className="col col-lg-9 col-xl-9 col-xxl-10 header-middle-right">
                            <div className="row">
                                <div className="col-lg-8 col-xxl-4-5col d-none d-lg-block">
                                    <HeaderSearch />
                                </div>
                                <div className="col-lg-4 col-xxl-5col d-flex justify-content-end align-items-center">
                                    <div className="header-dropdown-link">                            
                                        <i className="icon-heart-o"></i>
                                        <CartMenu/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <StickyHeader>
                <div className="header-bottom sticky-header px-5">
                    <div className={ containerClass }>
                        <div className="row">
                            <div className="col-auto col-lg-3 col-xl-3 col-xxl-2 header-left">
                                <CategoryMenu />
                            </div>
                            <div className="col col-lg-5 col-xl-5 col-xxl-7 header-center">
                                <MainMenu />
                            </div>

                            <div className="col col-lg-4 col-xl-4 col-xxl-3 header-right scrollVisible">
                               <span className="mr-4 d-flex login"><ALink href="/registro" ><i className="icon-cog"></i> Crear una cuenta</ALink>   </span>  
                               <span className="mr-4 d-flex"><i className="icon-user"></i><LoginModal /></span>                        
                               
                            </div>
                        </div>
                    </div>
                </div>

            </StickyHeader>
      
        </header>
    )
}

export default Header;