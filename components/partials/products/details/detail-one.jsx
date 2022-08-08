import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router';
import SlideToggle from 'react-slide-toggle';
import ALink from '../../../features/alink';
import Qty from '../../../features/qty';






function DetailOne ( props ) {
    const router = useRouter();
    const ref = useRef( null );
    const { product } = props;

  console.log('====>', product)
    useEffect( () => {
        window.addEventListener( 'scroll', scrollHandler, {
            passive: true
        } );

        return () => {
            window.removeEventListener( 'scroll', scrollHandler );
        }
    }, [] )






    function scrollHandler () {
        if ( router.pathname.includes( '/product/default' ) ) {
            let stickyBar = ref.current.querySelector( '.sticky-bar' );
            if ( stickyBar.classList.contains( 'd-none' ) && ref.current.getBoundingClientRect().bottom < 0 ) {
                stickyBar.classList.remove( 'd-none' );
                return;
            }
            if ( !stickyBar.classList.contains( 'd-none' ) && ref.current.getBoundingClientRect().bottom > 0 ) {
                stickyBar.classList.add( 'd-none' );
            }
        }
    }








 

    return (
        <div className="product-details" ref={ ref }>
        <h1 className="product-title">{ product.name }</h1>

    

        {
      
                <div className="product-price">
                    <span className="out-price">
                       Precio
                    </span>
                </div>
                
   
        }

        <div className="product-content">
            <p>Descripción corta</p>
        </div>

        {
          
                <>
        
                    <div className="details-filter-row details-row-size">
                        <label htmlFor="size">Size:</label>
                        <div className="select-custom">
                            <select
                                name="size"
                                className="form-control"
                                value={ ''}
                                onChange={ '' }
                            >
                                <option value="">Select a size</option>
                                
                            </select>
                        </div>

                        <ALink href="#" className="size-guide mr-4">
                            <i className="icon-th-list"></i>size guide
                        </ALink>
                     
                    </div>
                   
                </>
                
        }

        <div className="details-filter-row details-row-size">
            <label htmlFor="qty">Qty:</label>
            <Qty changeQty={ '' } max={ ''} value={ '' }></Qty>
        </div>

        <div className="product-details-action">
            <a
                href="#"
                className={ `btn-product btn-cart` }
                onClick={ e => onCartClick( e, 0 ) }
            >
                <span>add to cart</span>
            </a>
            <div className="details-action-wrapper">
                {
                   
                        <a href="#" className="btn-product btn-wishlist" onClick={ '' }><span>Add to Wishlist</span></a>

                }
            </div>
        </div>

        <div className="product-details-footer">
            <div className="product-cat w-100 text-truncate">
                <span>Category:</span>
                
            </div>

            <div className="social-icons social-icons-sm">
                <span className="social-label">Share:</span>
                <ALink href="#" className="social-icon" title="Facebook">
                    <i className="icon-facebook-f"></i>
                </ALink>
                <ALink href="#" className="social-icon" title="Twitter">
                    <i className="icon-twitter"></i>
                </ALink>
                <ALink href="#" className="social-icon" title="Instagram">
                    <i className="icon-instagram"></i>
                </ALink>
                <ALink href="#" className="social-icon" title="Pinterest">
                    <i className="icon-pinterest"></i>
                </ALink>
            </div>
        </div>
        <div className="sticky-bar d-none">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <figure className="product-media">
                            <ALink href={ `/product/default/${product.slug}` }>
                                <img src={ '' } alt="product" width='500' height='500'  />
                            </ALink>
                        </figure>
                        <h3 className="product-title">
                            <ALink href={ `/product/default/${product.slug}` }>{ product.name }</ALink>
                        </h3>
                    </div>
                    <div className="col-6 justify-content-end">
                        {
                            
                                product.stockQuantity == 0 ?
                                    <div className="product-price">
                                        <span className="out-price">0</span>
                                    </div>
                                    :
                                    
                                        <div className="product-price">10</div>
                                   
                                       
                        }
                        <Qty changeQty={'' } max={' product.stock' } value={ 'qty2' }></Qty>
                        <div className="product-details-action">
                            <a
                                href="#"
                                className={ `btn-product btn-cart` }
                                
                            >
                                <span>add to cart</span>
                            </a>
                            {
                                
                                    <a href="#" className="btn-product btn-wishlist" ><span>Add to Wishlist</span></a>

                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}



export default  DetailOne ;
