import React, { useState, useEffect, Fragment } from 'react';
import { useRouter } from 'next/router';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Image from 'next/image';
import ALink from '~/components/features/alink';
import { useDispatch }  from "react-redux";
import { addCartAction } from "../../../store/actions/AddCartAction";
import countImage from '../../../controladors/countProductImages.jsx';
const qty =1;

const ProductEleven = ( props ) => {
    const router = useRouter();
    const query = router.query ; 
    const { product } = props;
    const dispatch = useDispatch(); 

    function onCartClick ( e) {
        e.preventDefault();        
        dispatch( addCartAction(product, qty));     
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
                         {
                            product.new ?
                                <span className="product-label label-new">New</span>
                                : ""
                        }

                        {
                            product.salePrice?
                                <span className="product-label label-sale">Oferta</span>
                                : ""
                        }

                        {
                            product.top ?
                                <span className="product-label label-top">Top</span>
                                : ""
                        }

                        {
                            !product.stockStatus || product.stockStatus == 0 ?
                                <span className="product-label label-out">Agotado</span>
                                : ""
                        }
                     
                        <ALink href={ { pathname: `/producto/${product._id}`}} >
                            <LazyLoadImage
                                alt="product"
                                src={`${product.image.location }` } // Se debe cambiar por la imagen del producto principal.
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
                        {
                        product.stockStatus && product.stockStatus !== 0 ?
                            <div className="product-action">
                                {              
                                                          
                                        <button className="btn-product btn-cart" onClick={ onCartClick }>
                                            <span>Agregar</span>
                                        </button>
                                        
                                }                               
                            </div>
                            : ""
                        }                   
                    </figure>

                    <div className="product-body">
                        <div className="product-cat">
                          <small>{product.category}</small> 
                        </div>

                        <h3 className="product-title">
                            <ALink href={ { pathname: `/producto/${product._id}`}} >{ product.name }</ALink>
                        </h3>
                        {
                            !product.stockStatus || product.stockStatus == 0 ?
                                <div className="product-price">
                                    <span className="out-price">Agotado</span>
                                </div>
                                :                               
                                product.salePrice?
                                    <div className="product-price">
                                        <span className="new-price">${product.salePrice}</span>
                                        <span className="old-price">${product.regularPrice}</span>
                                    </div>
                                    :
                                    <div className="product-price">${product.regularPrice}</div>
                        }                 
                    </div>
                </div>
        </Fragment>
    )
}

export default React.memo(ProductEleven);