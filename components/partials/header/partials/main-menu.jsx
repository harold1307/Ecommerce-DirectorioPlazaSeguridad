import { useRouter } from 'next/router';
import ALink from '../../../features/alink';

function MainMenu() {
    const router = useRouter();
    let path = router.asPath;
    let query = router.query;

    function showAllDemos( e ) {
        let demoItems = document.querySelectorAll( '.demo-item.hidden' );

        for ( let i = 0; i < demoItems.length; i++ ) {
            demoItems[ i ].classList.toggle( 'show' );
        }

        document.querySelector( '.view-all-demos' ).classList.toggle( 'disabled-hidden' );
        e.preventDefault();
    }
    return (
        <nav className="main-nav">
            <ul className="menu sf-arrows">
                <li className={ `megamenu-container ${ path === '/' ? 'active' : '' }` } id="menu-home">
                    <ALink href="/" >Inicio</ALink>
                </li>
                <li className={ ( path.indexOf( "productos" ) > -1 && query.type == 'todos' ) ? "active" : '' }>
                        <ALink href="/productos/todos" scroll={ false }>Productos</ALink>
                    <div className="megamenu megamenu-md">
                        <div className="row no-gutters">
                            <div className="col-md-8">
                                <div className="menu-col">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="menu-title">Shop with sidebar</div>
                                            <ul>
                                                <li className={ ( path.indexOf( "productos" ) > -1 && query.type == 'lista' ) ? "active" : '' }><ALink href="/productos/lista" scroll={ false }>Shop List</ALink></li>
                                                <li className={ ( path.indexOf( "productos" ) > -1 && query.type == '2cols' ) ? "active" : '' }><ALink href="/productos/2cols" scroll={ false }>Shop Grid 2 Columns</ALink></li>
                                                <li className={ ( path.indexOf( "productos" ) > -1 && query.type == '3cols' ) ? "active" : '' }><ALink href="/productos/3cols" scroll={ false }>Shop Grid 3 Columns</ALink></li>
                                                <li className={ ( path.indexOf( "productos" ) > -1 && query.type == '4cols' ) ? "active" : '' }><ALink href="/productos/4cols" scroll={ false }>Shop Grid 4 Columns</ALink></li>
                                                <li className={ path.indexOf( "productos" ) > -1 ? "active" : '' }><ALink href="/productos"><span>Shop Market<span className="tip tip-new">New</span></span></ALink></li>
                                            </ul>

                                            <div className="menu-title">Shop no sidebar</div>
                                            <ul>
                                                <li className={ ( path.indexOf( "shop/nosidebar" ) > -1 && query.type == 'boxed' ) ? "active" : '' }><ALink href="/shop/nosidebar/boxed" scroll={ false }><span>Shop Boxed No Sidebar<span className="tip tip-hot">Hot</span></span></ALink></li>
                                                <li className={ ( path.indexOf( "shop/nosidebar" ) > -1 && query.type == 'fullwidth' ) ? "active" : '' }><ALink href="/shop/nosidebar/fullwidth" scroll={ false }>Shop Fullwidth No Sidebar</ALink></li>
                                            </ul>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="menu-title">Product Category</div>
                                            <ul>
                                                <li className={ path.indexOf( "shop/category/boxed" ) > -1 ? "active" : '' }><ALink href="/shop/category/boxed" scroll={ false }>Product Category Boxed</ALink></li>
                                                <li className={ path.indexOf( "shop/category/fullwidth" ) > -1 ? "active" : '' }><ALink href="/shop/category/fullwidth" scroll={ false }><span>Product Category Fullwidth<span className="tip tip-new">New</span></span></ALink></li>
                                            </ul>
                                            <div className="menu-title">Shop Pages</div>
                                            <ul>
                                                <li className={ path.indexOf( "shop/cart" ) > -1 ? "active" : '' }><ALink href="/shop/cart">Cart</ALink></li>
                                                <li className={ path.indexOf( "shop/checkout" ) > -1 ? "active" : '' }><ALink href="/shop/checkout">Checkout</ALink></li>
                                                <li className={ path.indexOf( "shop/wishlist" ) > -1 ? "active" : '' }><ALink href="/shop/wishlist">Wishlist</ALink></li>
                                                <li className={ path.indexOf( "shop/dashboard" ) > -1 ? "active" : '' }><ALink href="/shop/dashboard">My Account</ALink></li>
                                                <li className={ path.indexOf( "#Lookbook" ) > -1 ? "active" : '' }><ALink href="#">Lookbook</ALink></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="banner banner-overlay">
                                    <ALink href="/productos/list" className="banner banner-menu">
                                        <img src="/images/menu/banner-1.jpg" alt="Banner" />

                                        <div className="banner-content banner-content-top">
                                            <div className="banner-title text-white">Last <br />Chance<br /><span><strong>Sale</strong></span></div>
                                        </div>
                                    </ALink>
                                </div>
                            </div>
                        </div>
                    </div>
                </li> 
                <li className={ `megamenu-container ${ path === '/empresas' ? "active" : '' }` } id="menu-home">
                       <ALink href="/empresas/list">Empresas</ALink>
                </li>              
                <li className={ `megamenu-container ${ path === '/publicarme' ? 'active' : '' }` } id="menu-home">
                    <ALink href="/publicarme" >Publicarme</ALink>
                </li>
                <li className={ `megamenu-container ${ path === '/login' ? 'active' : '' }` } id="menu-home">
                       <ALink href="/login">Sesión</ALink>
                </li>                   
                 <li className={ `megamenu-container ${ path === '/dashboard' ? 'active' : '' }` } id="menu-home">
                    <ALink href="/dashboard" >Dashboard</ALink>
                </li>       
              
                
            </ul>
        </nav>
    );
}

export default MainMenu;