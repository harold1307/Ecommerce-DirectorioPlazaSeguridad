import ALink from '../../../features/alink';
import { useSelector,  useDispatch }  from "react-redux";
import { removeCartAction } from "../../../../store/actions/AddCartAction";

function CartMenu( props ) {
    const dispatch = useDispatch();
    const  cartState =  useSelector(state => state.addCartReducer);
    const  loading = cartState .loading;
    

    function removeFromCart( productId){
        dispatch( removeCartAction(productId) );     
    }

    return (
        <div className="dropdown cart-dropdown">
            <ALink href="/carrito" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                <i className="icon-shopping-cart display-4"></i>
                <span className="cart-count">{cartState.cart.length}</span>                
            </ALink>

            <div className={ `dropdown-menu dropdown-menu-right ${ cartState.cart.length === 0 ? 'text-center' : '' }` } >
                {
                    cartState.cart==0 ?
                        <p>Ningun producto en el carrito.</p> 
                        :
                        <>
                            <div className="dropdown-cart-products">
                                { cartState.cart.map( ( producto, index ) => (
                                    <div className="product justify-content-between" key={index}>
                                        <div className="product-cart-details">
                                            <h4 className="product-title">
                                                <ALink href={ `/producto/${producto._id}` }>{producto.name}</ALink>
                                            </h4>

                                            <span className="cart-product-info">
                                                <span className="cart-product-qty">1 </span>
                                                <span>*</span>
                                                {
                                                producto.salePrice?
                                                    <div className="product-price position-relative">
                                                        <span className="new-price ">${producto.salePrice}</span>                                                       
                                                        <span className="old-price">${producto.regularPrice}</span>
                                                        <span className="tip tip-new">Oferta</span>
                                                    </div>
                                                    :
                                                    <div className="product-price">${producto.regularPrice}</div>
                                                }
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
                                <ALink href="/carrito" className="btn btn-primary">Ver Carrito</ALink>                               
                            </div>
                        </>
                }
            </div>
        </div>
    );
}



export default  CartMenu;