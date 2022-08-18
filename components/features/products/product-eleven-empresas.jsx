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
                            <ALink  className="btn-product btn-cart"  href={ `/empresa/${empresa._id}`}>                                                 
                                <span>Ver empresas</span>
                            </ALink>                               
                        </div>
                    </figure>

                    <div className="product-body">   
                        <div className='product-cat'>{empresa.bussiness}</div>                     
                        <div className="product-title">                        
                           <ALink href={ `/empresa/${empresa._id}`}> {empresa.name}</ALink>                          
                        </div>


                    </div>
                </div>
        </Fragment>
    )
}

export default React.memo(ProductElevenEmpresas);