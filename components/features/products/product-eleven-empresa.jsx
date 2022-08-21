import React, { useState, useEffect, Fragment } from 'react';
import { useRouter } from 'next/router';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ALink from '~/components/features/alink';
import { useDispatch }  from "react-redux";
import { addCartAction } from "../../../store/actions/AddCartAction";

const ProductElevenEmpresa = ( props ) => {
    const router = useRouter();
    const query = router.query ; 
    const dispatch = useDispatch();
    const { producto } = props;

    function onCartClick ( e ) {
        e.preventDefault();
        dispatch( addCartAction(producto) );  
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

                            <ALink href={ `/producto/${producto._id}`}>
                            <LazyLoadImage
                                alt="product"
                                src={producto.image.location } // Se debe cambiar por la imagen del producto principal.
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
                            <button className="btn-product btn-cart" onClick={ onCartClick }>
                                <span>Agregar</span>
                            </button>                              
                        </div>
                    </figure>

                    <div className="product-body">   
                        <div className='product-cat'>{producto.category}</div>                     
                        <div className="product-title">                        
                           <ALink href={ `/producto/${producto._id}`}> {producto.name}</ALink>   
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
                        </div>
                    </div>
                </div>
        </Fragment>
    )
}

export default React.memo(ProductElevenEmpresa);