import React, { useState, useEffect, useRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ALink from '~/components/features/alink';
import Qty from '~/components/features/qty';
import PageHeader from '~/components/features/page-header';
import Layout from '~/components/layout';
import { useSelector,  useDispatch  }  from "react-redux";
import { cartPriceTotal } from '~/utils/index';
import CompanyModal from '~/components/features/modals/company-modal';
import { removeCartAction } from "../store/actions/AddCartAction";

function Cart ( props ) {
    const dispatch = useDispatch();
    const [ cartList, setCartList ] = useState( [0] );
    const [ shippingCost, setShippingCost ] = useState( 0 );
    const addCartRecducerState =  useSelector( state => state.addCartReducer);
  
    function onChangeShipping ( value ) {
        setShippingCost( value );
    }

    function removeFromCart( productId){
        dispatch( removeCartAction(productId) );     
    }

    function updateCart ( e ) {
        let button = e.currentTarget;
        button.querySelector( '.icon-refresh' ).classList.add( 'load-more-rotating' );

        setTimeout( () => {
            cargarCart();
            button.querySelector( '.icon-refresh' ).classList.remove( 'load-more-rotating' );
        }, 400 );
    }

    return (
        <Layout>
            <div className="main">
                <PageHeader title="Lista de Compra" subTitle="Mis productos" />
                <nav className="breadcrumb-nav">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <ALink href="/">Inicio</ALink>
                            </li>
                            <li className="breadcrumb-item">
                                <ALink href="/productos/list">Productos</ALink>
                            </li>
                            <li className="breadcrumb-item active">Lista de compra</li>
                        </ol>
                    </div>
                </nav>

                <div className="page-content py-5">
                    <div className="cart">
                        <div className="container mb-5">
                            {
                             
                                addCartRecducerState.cart.length ?
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <table className="table table-cart table-mobile">
                                                <thead>
                                                    <tr className=' text-center'>
                                                        <th className='h3'>Producto</th>
                                                        <th>Descripción</th>                                                          
                                                        <th>Empresa</th>  
                                                        <th>Precio</th>   
                                                        <th>Qty</th>                                                                                  
                                                        <th>Datos de contacto</th>
                                                        <th>   </th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    {
                                                        addCartRecducerState.cart.length ?
                                                            addCartRecducerState.cart.map( ( producto, index ) =>
                                                                <tr key={ index }>
                                                                    <td className="product-col py-3">
                                                                        <div className="product">
                                                                            <figure className="product-media">
                                                                                <ALink href={ `/producto/${producto._id}` } className="">
                                                                                   <LazyLoadImage  src= {producto.image.location} layout='responsive' alt={producto.name}  height={80} width= {80} />                                                                          
                                                                                </ALink>
                                                                            </figure>

                                                                            <h5 className="product-title px-2">
                                                                                <ALink href={ `/producto/${producto._id}` }>{ producto.name }</ALink>
                                                                            </h5>
                                                                        </div>
                                                                    </td>
                                                                    <td className="text-justify px-2 py-3">                                                                
                                                                        { producto.shortDescription }
                                                                    </td>                                                
                                                                    <td className="text-center px-2 py-3">
                                                                       <ALink href={ `/empresa/${producto.COMPANY._id}` }>{ producto.COMPANY.name }</ALink>                                                                        
                                                                    </td>
                                                                    <td className="price-col text-center px-2">                                                                
                                                                    <span>$ </span><span className='price'>{ (producto.salePrice ??  producto.regularPrice )}</span> 
                                                                   
                                                                    </td>
                                                                    <td className="price-col text-center px-2 py-3"> 
                                                                        <Qty value={ 1 }  adClass="cart-product-quantity"></Qty>
                                                                    </td>

                                                                    <td className="text-center px-2 py-3">
                                                                        <CompanyModal  producto = {producto} index = {index} />
                                                                    </td>
                                                                    <td className="remove-col text-center">
                                                                        <button  id= { producto._id }  className="btn-remove" onClick={ () => removeFromCart( producto._id ) }><i className="icon-close"></i></button>
                                                                    </td>
                                                                </tr>
                                                            )                                                         
                                                            :
                                                            <tr>
                                                                <td>
                                                                    <p className="pl-2 py-4"> Ningún producto agregado al carrito.</p>
                                                                </td>
                                                            </tr>
                                                    }
                                                </tbody>
                                            </table>                                            
                                        </div>
                                        <aside className="col-lg-3">
                                            <div className="summary summary-cart">
                                                <h3 className="summary-title">Cotizador</h3>

                                                <table className="table table-summary">
                                                    <tbody>
                                                        <tr className="summary-subtotal">
                                                            <td>Subtotal:</td>
                                                            <td>{addCartRecducerState.cart.map((producto,index)=> (producto.salePrice ?? producto.regularPrice)).reduce((a,b)=>a+b)}</td>
                                                        </tr>
                                                        <tr className="summary-shipping">
                                                            <td>Shipping:</td>
                                                            <td>&nbsp;</td>
                                                        </tr>

                                                        <tr className="summary-shipping-row">
                                                            <td>
                                                                <div className="custom-control custom-radio">
                                                                    <input type="radio"
                                                                        id="free-shipping"
                                                                        name="shipping"
                                                                        className="custom-control-input"
                                                                        onChange={ ( e ) => onChangeShipping( 0 ) }
                                                                        defaultChecked={ true }
                                                                    />
                                                                    <label className="custom-control-label" htmlFor="free-shipping">Free Shipping</label>
                                                                </div>
                                                            </td>
                                                            <td>$0.00</td>
                                                        </tr>

                                                        <tr className="summary-shipping-row">
                                                            <td>
                                                                <div className="custom-control custom-radio">
                                                                    <input type="radio"
                                                                        id="standard-shipping"
                                                                        name="shipping"
                                                                        className="custom-control-input"
                                                                        onChange={ ( e ) => onChangeShipping( 10 ) }
                                                                    />
                                                                    <label className="custom-control-label" htmlFor="standard-shipping">Standard:</label>
                                                                </div>
                                                            </td>
                                                            <td>$10.00</td>
                                                        </tr>

                                                        <tr className="summary-shipping-row">
                                                            <td>
                                                                <div className="custom-control custom-radio">
                                                                    <input type="radio"
                                                                        id="express-shipping"
                                                                        name="shipping"
                                                                        className="custom-control-input"
                                                                        onChange={ ( e ) => onChangeShipping( 20 ) }
                                                                    />
                                                                    <label className="custom-control-label" htmlFor="express-shipping">Express:</label>
                                                                </div>
                                                            </td>
                                                            <td>$20.00</td>
                                                        </tr>

                                                        <tr className="summary-shipping-estimate">
                                                            <td>Estimate for Your Country<br /> <ALink href="/shop/dashboard">Change address</ALink></td>
                                                            <td>&nbsp;</td>
                                                        </tr>

                                                        <tr className="summary-total">
                                                            <td>Total:</td>
                                                            <td>
                                                                 {addCartRecducerState.cart.map((producto,index)=> ( producto.salePrice ?? producto.regularPrice)).reduce((a,b)=>a+b)}
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                <ALink
                                                    className="btn btn-outline-primary-2 btn-order btn-block"
                                                    href="/shop/checkout"
                                                >
                                                    PROCEED TO CHECKOUT
                                                </ALink>
                                            </div>

                                            <ALink href="/productos/list" className="btn btn-outline-dark-2 btn-block mb-3"><span>CONTINUE SHOPPING</span><i className="icon-refresh"></i></ALink>
                                        </aside>
                                    </div>
                                    :
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="cart-empty-page text-center">
                                                <i className="cart-empty icon-shopping-cart" style={ { lineHeight: 1, fontSize: '15rem' } }></i>
                                                <p className="px-3 py-2 cart-empty mb-3">Ningun producto agregado a la lista de productos.</p>
                                                <p className="return-to-shop mb-0">
                                                    <ALink
                                                        href="/productos/todos"
                                                        className="btn btn-primary"
                                                    >RETURNAR</ALink>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Cart;