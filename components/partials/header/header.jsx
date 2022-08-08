import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

import ALink from '../../features/alink';
//import LoginModal from '../../features/modals/login-modal';
import HeaderSearch from '../../partials/header/partials/header-search';
import CategoryMenu from '../../partials/header/partials/category-menu';
import LoginModal from '~/components/features/modals/login-modal';
import MainMenu from '../../partials/header/partials/main-menu';
import StickyHeader from '../../features/sticky-header';


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
                            <i className="icon-phone"></i>Call: +0123 456 789
                        </a>
                    </div>

                    <div className="header-right pr-4">
                        <ul className="top-menu">
                            <li>
                              
                                   
                                       <LoginModal />
                                  

                                  
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="header-middle">
                <div className={ containerClass }>
                    <div className="row">
                        <div className="col-auto col-lg-3 col-xl-3 col-xxl-2">
                            <button className="mobile-menu-toggler" onClick={ openMobileMenu }>
                                <span className="sr-only">Toggle mobile menu</span>
                                <i className="icon-bars"></i>
                            </button>

                            <ALink href="/" className="logo">
                                <img src="/images/logo.png" alt="Molla Logo" width={ 105 } height={ 27 } />
                            </ALink>
                        </div>

                        <div className="col col-lg-9 col-xl-9 col-xxl-10 header-middle-right">
                            <div className="row">
                                <div className="col-lg-8 col-xxl-4-5col d-none d-lg-block">
                                    <HeaderSearch />
                                </div>
                                <div className="col-lg-4 col-xxl-5col d-flex justify-content-end align-items-center">
                                    <div className="header-dropdown-link">





                                       <p>CompareMenu </p>

                                        <p>WishlistMenu</p>

                                        <p>CartMenu</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <StickyHeader>
                <div className="header-bottom sticky-header">
                    <div className={ containerClass }>
                        <div className="row">
                            <div className="col-auto col-lg-3 col-xl-3 col-xxl-2 header-left">


                                <CategoryMenu />




                            </div>
                            <div className="col col-lg-6 col-xl-6 col-xxl-8 header-center">


                                <MainMenu />


                            </div>

                            <div className="col col-lg-3 col-xl-3 col-xxl-2 header-right">
                                <i className="la la-lightbulb-o"></i><p>Clearance Up to 30% Off</p>
                            </div>
                        </div>

                    </div>
                </div>







            </StickyHeader>







            
        </header>
    )
}

export default Header;