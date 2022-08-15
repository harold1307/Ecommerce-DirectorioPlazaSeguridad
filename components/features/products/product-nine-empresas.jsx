import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ALink from '~/components/features/alink';
import { useDispatch }  from "react-redux";
import { addCartAction } from "../../../store/actions/AddCartAction";

function ProductSixEmpresas ( props ) {
    const router = useRouter();
    const dispatch = useDispatch();
    const { empresa } = props;

    function onQuickView ( e ) {
        e.preventDefault();     
    }
    function onWishlistClick( e ) {
        e.preventDefault();      
    }

    return (
        <div className="product product-list">
            <div className="row pr-2">
                <div className="col-lg-3 col-md-3 col-6">
                    <figure className="product-media">
                        {
                            empresa.new ?
                                <span className="product-label label-new">Nuevo</span>
                                : ""
                        }

                        {
                            empresa.salePrice ?
                                <span className="product-label label-sale">Oferta</span>
                                : ""
                        }

                        {
                            empresa.top ?
                                <span className="product-label label-top">Top</span>
                                : ""
                        }


                        <ALink  href={ { pathname: '/empresa', query: { empresaId : empresa._id }}} >{ empresa.name }
                            <LazyLoadImage
                                alt="product"
                                src={ empresa.logo }
                                threshold={ 500 }
                                effect="black and white"
                                wrapperClassName="product-image"
                            />
                            {
                                true ?
                                    <LazyLoadImage
                                        alt="product"
                                        src={ '' }
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
                        
                    </figure>
                </div>
                <div className="col-md-6 order-last">
                    <div className="product-body product-action-inner">
                        <div className="product-cat">
                            {
                                empresa.name
                            }
                        </div>

                        <h3 className="product-title">
                        <ALink  href={ { pathname: '/empresa', query: { empresaId : empresa._id }}} >{ empresa.name }</ALink>
                        </h3>

                        <div className="product-content">
                            <p>{ empresa.description }</p>
                        </div>                 
                    </div>
                </div>

                <div className="col-md-3 col-6 order-md-last order-lg-last">
             
                    <div className="product-list-action">  
                        
                     
                            <div className="product-action">    
                                                          
                                <ALink className="btn btn-primary"  href={ { pathname: '/empresa', query: { empresaId : empresa._id }}} scroll={ false }>                            
                                    <span>Ver empresas</span>
                                </ALink>   

                          

                                                          
                            </div>
                         
                        
                    </div>                    
               
                </div>
            </div>
        </div>
    )
}

export default  React.memo( ProductSixEmpresas );
