import React, { useState, useEffect, Fragment } from 'react';
import { useRouter } from 'next/router';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ALink from '~/components/features/alink';

const ProductElevenEmpresas = ( props ) => {
    const router = useRouter();
    const query = router.query ; 
    const { empresa } = props;

    function onCartClick ( e ) {
        e.preventDefault();       
    }
    function onQuickView ( e ) {
        e.preventDefault();      
    }
    function onWishlistClick( e ) {
        e.preventDefault();    
    }

    return (

        <Fragment>
                
                <div className="product product-4 text-center w-100">
                    <figure className="product-media">

                            <ALink href={ `/empresa/${empresa._id}`}>
                            <LazyLoadImage
                                alt="product"
                                src={`${ empresa.logo }` } // Se debe cambiar por la imagen del producto principal.
                                threshold={ 500 }
                                effect="black and white"
                                wrapperClassName="product-image"
                            />
                            {
                                4 >= 2 ?
                                    <LazyLoadImage
                                        alt="product"
                                        src={ ''}
                                        threshold={ 500 }
                                        effect="black and white"
                                        wrapperClassName="product-image-hover"
                                    />
                                    : ""
                            }
                        </ALink>
                        <div className="product-action-vertical">
                            {                         
                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable" onClick={ onWishlistClick }><span>Favorito</span></a>
                            }
                            <a href="#" className="btn-product-icon btn-quickview" title="Quick View" onClick={ onQuickView }><span>Ver</span></a>                      
                        </div>
                                       
                        <div className="product-action">
                            {              
                                                    
                                <button className="btn-product btn-cart" onClick={ onCartClick }>
                                    <span>Ver empresa</span>
                                </button>
                                
                            }                               
                        </div>
                    </figure>

                    <div className="product-body">
                        <div className="product-cat">
                          <small>{empresa.name}</small> 
                        </div>

                        <h3 className="product-title">
                          <ALink href={ `/empresa/${empresa._id}`}></ALink>
                        </h3>  

                    </div>
                </div>
        </Fragment>
    )
}

export default React.memo(ProductElevenEmpresas);