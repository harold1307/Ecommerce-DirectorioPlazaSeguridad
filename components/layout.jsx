import React from 'react';
import { useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import { useRouter } from 'next/router';
import 'react-image-lightbox/style.css';
import 'react-toastify/dist/ReactToastify.min.css';
import Header from "./partials/header/header";
import Footer from "./partials/footer/footer";
//import VideoModal from "./features/modals/video-modal";
//import QuickViewModal from "./features/modals/quickview-modal";
import MobileMenu from "./features/mobile-menu";
import { isSafariBrowser, isEdgeBrowser } from "../utils";
import { useDispatch, useSelector }  from "react-redux";
import { cargarCategoriasAll } from "../store/actions/categoriesAllAction";
import { cargarProductosAll } from "../store/actions/productsAllAction";
import { cargarCompaniasAll } from "../store/actions/companiesAllAction";

function Layout ( {children} ) {   
    const router = useRouter( );
    let scrollTop;
    const dispatch = useDispatch();
    
    useEffect(() => {
         dispatch( cargarCategoriasAll() );      
         dispatch( cargarProductosAll() );   
         dispatch( cargarCompaniasAll() );       
    }, [ dispatch])
   


    useEffect( () => {        
        scrollTop = document.querySelector( '#scroll-top' );
        window.addEventListener( 'scroll', scrollHandler, false ); 

    }, [] )

    function toScrollTop () {
        if ( isSafariBrowser() || isEdgeBrowser() ) {
            let pos = window.pageYOffset;
            let timerId = setInterval( () => {
                if ( pos <= 0 ) clearInterval( timerId );
                window.scrollBy( 0, -120 );
                pos -= 120;
            }, 1 );
        } else {
            window.scrollTo( {
                top: 0,
                behavior: 'smooth'
            } );
        }
    }
    function scrollHandler () {
        if ( window.pageYOffset >= 400 ) {
            scrollTop.classList.add( 'show' );
        } else {
            scrollTop.classList.remove( 'show' );
        }
    }
    function hideMobileMenu () {
        document.querySelector( 'body' ).classList.remove( 'mmenu-active' );
    }
    return (
        <>
            <div className="page-wrapper">
                <Header />
                { children }
                <Footer />               
            </div>
            <div className="mobile-menu-overlay" onClick={ hideMobileMenu }></div>
            <button id="scroll-top" title="Back to top" onClick={ toScrollTop }>
                <i className="icon-arrow-up"></i>
            </button>           

            <MobileMenu />
            <ToastContainer
                autoClose={ 3000 }
                duration={ 300 }
                newestOnTo={ true }
                className="toast-container"
                position="top-right"
                closeButton={ false }
                hideProgressBar={ true }
                newestOnTop={ true }
                draggable={ false }
            /> 
        </>
    )
}

export default React.memo(Layout);