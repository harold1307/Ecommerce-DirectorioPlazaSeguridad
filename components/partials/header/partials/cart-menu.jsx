import { connect } from 'react-redux';

import ALink from '../../../features/alink';




function CartMenu( props ) {


    return (
        <div className="dropdown cart-dropdown">
            <ALink href="/shop/cart" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                <i className="icon-shopping-cart"></i>
                <span className="cart-count">1</span>
                <span className="cart-txt">Cesta</span>
            </ALink>

            <div className={ `dropdown-menu dropdown-menu-right ${ 1 === 0 ? 'text-center' : '' }` } >
                {
                   false ?
                        <p>No products in the cart.</p> :
                        <>
                            <div className="dropdown-cart-products">
                                { [].map( ( item, index ) => (
                                    <div className="product justify-content-between" key={''}>
                                        <div className="product-cart-details">
                                            <h4 className="product-title">
                                                <ALink href={ `/product/default` }>nombre</ALink>
                                            </h4>

                                            <span className="cart-product-info">
                                                <span className="cart-product-qty">cantidad </span>
                                                precio
                                            </span>
                                        </div>

                                        <figure className="product-image-container ml-2">
                                            <ALink href={ `/product/default/${ item.slug }` } className="product-image">
                                                <img src='image' alt="product" />
                                            </ALink>
                                        </figure>
                                        <button className="btn-remove" title="Remove Product" onClick={ () => props.removeFromCart( item ) }><i className="icon-close"></i></button>
                                    </div>
                                ) ) }
                            </div>
                            <div className="dropdown-cart-total">
                                <span>Total</span>

                                <span className="cart-total-price">Precio Total</span>
                            </div>

                            <div className="dropdown-cart-action">
                                <ALink href="/shop/cart" className="btn btn-primary">View Cart</ALink>
                                <ALink href="/shop/checkout" className="btn btn-outline-primary-2"><span>Checkout</span><i className="icon-long-arrow-right"></i></ALink>
                            </div>
                        </>
                }
            </div>
        </div>
    );
}



export default  CartMenu;