import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router';
import SlideToggle from 'react-slide-toggle';
import ALink from '../../../features/alink';

const  DetailOneEmpresa  = ( props ) => {
    const router = useRouter();
    const ref = useRef( null );
    const { empresa } = props;  

    useEffect(() => {
        var str = empresa.description;
        var tt = document.getElementById("descriction");
        tt.innerHTML = str;  
    }, [])
          
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
    <div className="product-details px-4 py-2" ref={ ref }>
        <h1 className="product-title text-center mt-2">{  empresa.name }</h1>    
          <div className="product-content mt-3">
            <h6>Sobre la empresa:</h6>
            <div className='text-justify'>
                 <div id='descriction'></div>
            </div>
        </div>         
    </div>
    )
}

export default  DetailOneEmpresa ;