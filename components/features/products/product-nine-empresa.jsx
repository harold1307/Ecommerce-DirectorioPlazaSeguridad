import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ALink from '~/components/features/alink';
import { useDispatch }  from "react-redux";
import { addCartAction } from "../../../store/actions/AddCartAction";

function ProductSixEmpresa ( props ) {
    const router = useRouter();
    const dispatch = useDispatch();
    const { producto } = props;

    function onCartClick ( e ) {
        e.preventDefault();
        dispatch( addCartAction(product) );  
    }
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
                            producto.salePrice ?
                                <span className="product-label label-sale">Oferta</span>
                                : ""
                        }
                       
                        {
                            !producto.stockStatus || producto.stockStatus == 0 ?
                                <span className="product-label label-out">Agotado</span>
                                : ""
                        }

                        <ALink href={ { pathname: `/producto/${producto._id}`}} >
                            <LazyLoadImage
                                alt="product"
                                src={ producto.image.location }
                                threshold={ 500 }
                                effect="black and white"
                                wrapperClassName="product-image"
                            />
                            {
                                true ?
                                    <LazyLoadImage
                                        alt="product"
                                        src={ producto.image.location  }
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
                                producto.category
                            }
                        </div>

                        <h3 className="product-title">
                          <ALink href={ { pathname: `/producto/${producto._id}`}} >{ producto.name }</ALink>
                        </h3>

                        <div className="product-content">
                            <p>{ producto.shortDescription }</p>
                        </div>

                  
                    </div>
                </div>

                <div className="col-md-3 col-6 order-md-last order-lg-last">
                {
                    producto.stockStatus && producto.stockStatus !== 0 ?
                    <div className="product-list-action">  
                          {
                            !producto.stockStatus || producto.stockStatus == 0 ?
                                <div className="product-price">
                                    <span className="out-price">Agotado</span>
                                </div>
                                :
                               
                                    producto.salePrice?
                                        <div className="product-price">
                                            <span className="new-price">${producto.salePrice}</span>
                                            <span className="old-price">${producto.regularPrice}</span>
                                        </div>
                                        :
                                        <div className="product-price">${producto.regularPrice}</div>                                      
                        }
                       
                        {
                        producto.stockStatus && producto.stockStatus !== 0 ?
                            <div className="product-action">    
                                                          
                                <button className="btn-product btn-cart" onClick={ onCartClick }>
                                    <span>Agregar</span>
                                </button>                                     
                            </div>
                            : ""
                        }
                        
                    </div>
                    :
                    ''
                }
                </div>
            </div>
        </div>
    )
}

export default  React.memo( ProductSixEmpresa);
