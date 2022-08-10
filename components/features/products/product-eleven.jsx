import React, { useState, useEffect, Fragment } from 'react';
import { useRouter } from 'next/router';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ALink from '~/components/features/alink';
import { useDispatch }  from "react-redux";
import { addCartAction } from "../../../store/actions/AddCartAction";

const ProductEleven = ( props ) => {
    const router = useRouter();
    const query = router.query ; 
    const { product } = props;
    const [ maxPrice, setMaxPrice ] = useState( 0 );
    const [ minPrice, setMinPrice ] = useState( 99999 );
    const dispatch = useDispatch(); 

    function onCartClick ( e ) {
        e.preventDefault();
        dispatch( addCartAction(product) );  
    }

    return (

        <Fragment>
                
                <div className="product product-7 text-center w-100">
                    <figure className="product-media">
                    {
                            product.new ?
                                <span className="product-label label-new">New</span>
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
                        <ALink href={ `/producto/${product.COMPANY._id}/${product._id}/${product.name}` } >
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
                            <ALink href={ `/producto/${product.COMPANY._id}/${product._id}/${product.name.split(' ').join('_')}` }>{ product.name }</ALink>
                        </h3>

                        {
                               product.salePrice ?                   
                                <div className="product-price"><span className='mr-2'>${product.salePrice.toFixed( 2 ) }  </span><span className='text-decoration-line'>${product.regularPrice.toFixed( 2 ) }</span></div>
                                :
                                <div className="product-price">${product.regularPrice.toFixed( 2 ) }</div>
                    
                        }

                    

                    
                    </div>
                </div>
        </Fragment>
    )
}

export default ProductEleven;