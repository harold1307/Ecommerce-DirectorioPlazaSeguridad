import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router';
import SlideToggle from 'react-slide-toggle';
import ALink from '../../../features/alink';
import Card from '~/components/features/accordion/card';
import Accordion from '~/components/features/accordion/accordion';

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
        </div>         
    </div>
    )
}

export default  DetailOneEmpresa ;