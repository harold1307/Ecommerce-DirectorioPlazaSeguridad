import React, { useState, useEffect, Fragment } from 'react';
import { useRouter } from 'next/router';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ALink from '../../../components/features/alink';
import { rendererOne } from "../../../components/features/count-down";

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

const ProductTwelve = ( props ) => {
    const router = useRouter();
    const { product, index } = props;
   

    return (
        <Fragment>                
            <div className="product text-center w-100">
                <figure className="product-media">
                    {
                        product.new ?
                            <span className="product-label label-new">Nuevo</span>
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
                            src={`${product.image.location }`} 
                            threshold={ 500 }
                            effect="black and white"
                            wrapperClassName="product-image"
                        />
                        {
                            false ?
                                <LazyLoadImage
                                    alt="product"
                                    src={ `https://directorioseguridadgeneralpublic.s3.amazonaws.com/products/${product._id}/thumbnail/2.jpg`}
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

export default  ProductTwelve;