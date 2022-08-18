import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router';
import SlideToggle from 'react-slide-toggle';
import ALink from '../../../features/alink';
import Qty from '../../../features/qty';
import { useDispatch }  from "react-redux";
import { addCartAction } from "../../../../store/actions/AddCartAction";

const  DetailOneEmpresa  = ( props ) => {
    const router = useRouter();
    const ref = useRef( null );
    const { producto } = props;
    const dispatch = useDispatch();

    useEffect( () => {
        window.addEventListener( 'scroll', scrollHandler, {
            passive: true
        } );

        return () => {
            window.removeEventListener( 'scroll', scrollHandler );
        }
    }, [ ] )


    function onCartClick ( e ) {
        e.preventDefault();
        dispatch( addCartAction(producto) );  
    }

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
        <h1 className="product-title">{ producto.name }</h1>
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
        <div className='py-2'><strong>Marca:</strong><span className='px-2'>{producto.brand}</span></div>

        <div className="product-content">
            <p>{producto.shortDescription}</p>
        </div>

        <div className="product-details-action py-4">
            <a
                href="#"
                className={ `btn-product btn-cart` }
                onClick={ e => onCartClick( e, 0 ) }
            >
                <span>Agragar al carrito</span>
            </a>
            <div className="details-action-wrapper">
                {                   
                     <a href="#" className="btn-product btn-wishlist" onClick={ onCartClick  }><span>Agragar a favoritos</span></a>
                }
            </div>
        </div>

        <div className="product-details-footer">
            <div className="product-cat w-100 text-truncate">
                <span><strong>Categoría:</strong></span>
                {producto.category}
            </div>
            <div className="product-cat w-100 text-truncate">
                <span><strong>Sub-categoría:</strong></span>
                {producto.subCategory}
            </div>
            <div className="product-cat w-100 text-truncate">
                <span><strong>Empresa:</strong></span>
                {producto.COMPANY.name}
            </div>

            <div className="social-icons social-icons-sm">
                <span className="social-label">Compartir:</span>
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
                            <ALink href={ `/product/default/${producto.value}` }>
                                <img src={ '' } alt="product" width='500' height='500'  />
                            </ALink>
                        </figure>
                        <h3 className="product-title">
                            <ALink href={ `/product/default/${producto.value}` }>{ producto.name }</ALink>
                        </h3>
                    </div>
                    <div className="col-6 justify-content-end">
                        {
                            
                                producto.stockStatus == 0 ?
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
                                <span>Agregar</span>
                            </a>
                            {
                                
                                    <a href="#" className="btn-product btn-wishlist" ><span>Sumar a favorito</span></a>

                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}



export default  DetailOneEmpresa ;
