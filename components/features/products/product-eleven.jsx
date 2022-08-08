import React, { useState, useEffect, Fragment } from 'react';
import { useRouter } from 'next/router';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import ALink from '~/components/features/alink';





function ProductEleven ( props ) {
    const router = useRouter();
    const query = router.query ; 
    const { product } = props;
    const [ maxPrice, setMaxPrice ] = useState( 0 );
    const [ minPrice, setMinPrice ] = useState( 99999 );
  


    useEffect( () => {
        let min = minPrice;
        let max = maxPrice;
      

     
        setMinPrice( min );
        setMaxPrice( max );
    }, [] )

    function onCartClick ( e ) {
        e.preventDefault();
        props.addToCart( product );
    }

    function onWishlistClick ( e ) {
        e.preventDefault();
        if ( !isInWishlist( props.wishlist, product ) ) {
            props.addToWishlist( product );
        } else {
            router.push( '/pages/wishlist' );
        }
    }

    function onCompareClick ( e ) {
        e.preventDefault();
        if ( !isInCompare( props.comparelist, product ) ) {
            props.addToCompare( product );
        }
    }

    function onQuickView ( e ) {
        e.preventDefault();
        props.showQuickView( product.slug );
    }



    return (

        <Fragment>
                
                
        
                <div className="product product-7 text-center w-100">
                    <figure className="product-media">
                            
                    

                    

                        <ALink href={ `/producto/${product.COMPANY._id}/${product._id}/${product.name}` }
                        >
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

                    

                

                    </figure>

                    <div className="product-body">
                        <div className="product-cat">
                        
                        </div>

                        <h3 className="product-title">
                            <ALink href={ `/producto/${product.COMPANY._id}/${product._id}/${product.name.split(' ').join('_')}` }>{ product.name }</ALink>
                        </h3>

                        {
                            true ?
                                <div className="product-price">
                                    <span className="out-price">${ product.regularPrice.toFixed( 2 ) }</span>
                                </div>
                                :
                                minPrice == maxPrice ?
                                    <div className="product-price">${ minPrice.toFixed( 2 ) }</div>
                                    :
                                    product.variants.length == 0 ?
                                        <div className="product-price">
                                            <span className="new-price">${ minPrice.toFixed( 2 ) }</span>
                                            <span className="old-price">${ maxPrice.toFixed( 2 ) }</span>
                                        </div>
                                        :
                                        <div className="product-price">${ minPrice.toFixed( 2 ) }&ndash;${ maxPrice.toFixed( 2 ) }</div>
                    
                        }

                    

                    
                    </div>
                </div>
        </Fragment>
    )
}

export default ProductEleven;