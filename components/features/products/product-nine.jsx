import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ALink from '~/components/features/alink';
import { useDispatch }  from "react-redux";
import { addCartAction } from "../../../store/actions/AddCartAction";




function ProductSix ( props ) {
    const router = useRouter();
    const dispatch = useDispatch();
    const { product, wishlist } = props;
    const [ maxPrice, setMaxPrice ] = useState( 0 );
    const [ minPrice, setMinPrice ] = useState( 99999 );

 

    function onCartClick ( e ) {
        e.preventDefault();
        dispatch( addCartAction(product) );  
    }
    function onQuickView ( e ) {
        e.preventDefault();
        props.showQuickView( product );
    }



    return (
        <div className="product product-list">
            <div className="row pr-2">
                <div className="col-lg-3 col-md-3 col-6">
                    <figure className="product-media">
                        {
                            product.new ?
                                <span className="product-label label-new">Nuevo</span>
                                : ""
                        }

                        {
                            product.salePrice ?
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

                        <ALink href={ `/producto/${product.COMPANY._id}/${product._id}/${product.name.split(' ').join('_')}` }>{ product.name }
                            <LazyLoadImage
                                alt="product"
                                src={ product.image.location }
                                threshold={ 500 }
                                effect="black and white"
                                wrapperClassName="product-image"
                            />
                            {
                                true ?
                                    <LazyLoadImage
                                        alt="product"
                                        src={ product.image.location  }
                                        threshold={ 500 }
                                        effect="black and white"
                                        wrapperClassName="product-image-hover"
                                    />
                                    : ""
                            }
                        </ALink>
                    </figure>
                </div>
                <div className="col-md-6 order-last">
                    <div className="product-body product-action-inner">
                        <div className="product-cat">
                            {
                                product.category
                            }
                        </div>

                        <h3 className="product-title">
                            <ALink href={ `/producto/${product.COMPANY._id}/${product._id}/${product.name.split(' ').join('_')}` }>{ product.name }</ALink>
                        </h3>

                        <div className="product-content">
                            <p>{ product.shortDescription }</p>
                        </div>

                  
                    </div>
                </div>

                <div className="col-md-3 col-6 order-md-last order-lg-last">
                {
                    product.stockStatus && product.stockStatus !== 0 ?
                    <div className="product-list-action">  
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
                       
                        {
                        product.stockStatus && product.stockStatus !== 0 ?
                            <div className="product-action">    
                                                          
                                <button className="btn-product btn-cart" onClick={ onCartClick }>
                                    <span>Agregar</span>
                                </button>
                                <button className="btn-product btn-quickview" title="Quick View" onClick={ onQuickView }>
                                        <span>Vista</span>
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

export default  React.memo( ProductSix);
