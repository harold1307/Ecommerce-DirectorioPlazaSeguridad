import ALink from '../../../features/alink';
import { useSelector }  from "react-redux";

function CartMenu( props ) {
    const  cartState =  useSelector(state => state.addCartReducer);
    const  loading = cartState .loading;
    console.log(cartState)

    function removeFromCart(id) {
        console.log(id)

    }

    return (
        <div className="dropdown cart-dropdown">
            <ALink href="/shop/cart" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                <i className="icon-shopping-cart"></i>
                <span className="cart-count">{cartState.cart.length}</span>
                <span className="cart-txt">Cesta</span>
            </ALink>

            <div className={ `dropdown-menu dropdown-menu-right ${ 1 === 0 ? 'text-center' : '' }` } >
                {
                   false ?
                        <p>No products in the cart.</p> :
                        <>
                            <div className="dropdown-cart-products">
                                { cartState.cart.map( ( producto, index ) => (
                                    <div className="product justify-content-between" key={index}>
                                        <div className="product-cart-details">
                                            <h4 className="product-title">
                                                <ALink href={ `/product/default` }>{producto.name}</ALink>
                                            </h4>

                                            <span className="cart-product-info">
                                                <span className="cart-product-qty">1 </span>
                                                <span>*</span>
                                                <span className="cart-product-price">{producto.regularPrice} </span>
                                                 
                                            </span>
                                        </div>

                                        <figure className="product-image-container ml-2">
                                            <ALink href={ `/producto/${ producto._id }` } className="product-image">
                                                <img src= {producto.image.location} alt="product" height='60' width= '60' />
                                            </ALink>
                                        </figure>
                                        <button className="btn-remove" title="Remove Product" onClick={ () => removeFromCart( producto._id ) }><i className="icon-close"></i></button>
                                    </div>
                                ) ) }
                            </div>
                            <div className="dropdown-cart-total">
                                <span>Total</span>

                                <span className="cart-total-price">Precio Total</span>
                            </div>

                            <div className="dropdown-cart-action">
                                <ALink href="/shop/cart" className="btn btn-primary">Ver Carrito</ALink>
                                <ALink href="" className="btn btn-outline-primary-2"><span>Checkout</span><i className="icon-long-arrow-right"></i></ALink>
                            </div>
                        </>
                }
            </div>
        </div>
    );
}



export default  CartMenu;