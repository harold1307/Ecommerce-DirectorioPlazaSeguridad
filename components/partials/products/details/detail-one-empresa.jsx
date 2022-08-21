import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router';
import SlideToggle from 'react-slide-toggle';
import ALink from '../../../features/alink';

const  DetailOneEmpresa  = ( props ) => {
    const router = useRouter();
    const ref = useRef( null );
    const { empresa } = props;


    useEffect( () => {
        window.addEventListener( 'scroll', scrollHandler, {
            passive: true
        } );

        return () => {
            window.removeEventListener( 'scroll', scrollHandler );
        }
    }, [ ] )


    function onCartClick ( e ) {
        e.preventDefault();
        dispatch( addCartAction(producto) );  
    }

    function scrollHandler () {
        if ( router.pathname.includes( '/product/default' ) ) {
            let stickyBar = ref.current.querySelector( '.sticky-bar' );
            if ( stickyBar.classList.contains( 'd-none' ) && ref.current.getBoundingClientRect().bottom < 0 ) {
                stickyBar.classList.remove( 'd-none' );
                return;
            }
            if ( !stickyBar.classList.contains( 'd-none' ) && ref.current.getBoundingClientRect().bottom > 0 ) {
                stickyBar.classList.add( 'd-none' );
            }
        }
    }

 

    return (
    <div className="product-details px-4" ref={ ref }>
        <h1 className="product-title">{  empresa.name }</h1>
    
          <div className="product-content text-justify">
            <p>{empresa.description}</p>
        </div>

       
        <div className="product-details-footer">
             <div className="product-cat w-100 text-truncate">
                <span><strong>Productos:</strong></span>
                {empresa.products}
            </div>
            <div className="product-cat w-100 text-truncate">
                <span><strong>Sector de negocio:</strong></span>
                {empresa.bussiness}
            </div>
            <div className="product-cat w-100 text-truncate">
                <span><strong>Servicios:</strong></span>
                {empresa.services}
            </div>
        </div>      
    </div>
    )
}



export default  DetailOneEmpresa ;
