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
                                        <img src="images/menu/banner-1.jpg" alt="Banner" />

                                        <div className="banner-content banner-content-top">
                                            <div className="banner-title text-white">Last <br />Chance<br /><span><strong>Sale</strong></span></div>
                                        </div>
                                    </ALink>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className={ path.indexOf( "product/" ) > -1 ? 'active' : '' }>
                    <ALink href="/product/default/dark-yellow-lace-cut-out-swing-dress" className="sf-with-ul">Product</ALink>

                    <div className="megamenu megamenu-sm">
                        <div className="row no-gutters">
                            <div className="col-md-6">
                                <div className="menu-col">
                                    <div className="menu-title">Product Details</div>
                                    <ul>
                                        <li className={ path.indexOf( "product/default" ) > -1 ? 'active' : '' }><ALink href="/product/default/dark-yellow-lace-cut-out-swing-dress">Default</ALink></li>
                                        <li className={ path.indexOf( "product/centered" ) > -1 ? 'active' : '' }><ALink href="/product/centered/beige-ring-handle-circle-cross-body-bag">Centered</ALink></li>
                                        <li className={ path.indexOf( "product/extended" ) > -1 ? 'active' : '' }><ALink href="/product/extended/yellow-tie-strap-block-heel-sandals"><span>Extended Info<span className="tip tip-new">New</span></span></ALink></li>
                                        <li className={ path.indexOf( "product/gallery" ) > -1 ? 'active' : '' }><ALink href="/product/gallery/beige-metal-hoop-tote-bag">Gallery</ALink></li>
                                        <li className={ path.indexOf( "product/sticky" ) > -1 ? 'active' : '' }><ALink href="/product/sticky/brown-faux-fur-longline-coat">Sticky Info</ALink></li>
                                        <li className={ path.indexOf( "product/sidebar" ) > -1 ? 'active' : '' }><ALink href="/product/sidebar/beige-v-neck-button-cardigan">Boxed With Sidebar</ALink></li>
                                        <li className={ path.indexOf( "product/fullwidth" ) > -1 ? 'active' : '' }><ALink href="/product/fullwidth/black-faux-leather-chain-trim-sandals">Full Width</ALink></li>
                                        <li className={ path.indexOf( "product/masonry" ) > -1 ? 'active' : '' }><ALink href="/product/masonry/black-denim-dungaree-dress">Masonry Sticky Info</ALink></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="banner banner-overlay">
                                    <ALink href="/product/centered/dark-yellow-lace-cut-out-swing-dress">
                                        <img src="images/menu/banner-2.jpg" alt="Banner" />

                                        <div className="banner-content banner-content-bottom">
                                            <div className="banner-title text-white">New Trends<br /><span><strong>spring { ( new Date() ).getFullYear() }</strong></span></div>
                                        </div>
                                    </ALink>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className={ path.indexOf( "pages" ) > -1 ? 'active' : '' }>
                    <ALink href="#" className="sf-with-ul">Pages</ALink>

                    <ul>
                        <li className={ path.indexOf( "pages/about" ) > -1 ? 'active' : '' }>
                            <ALink href="/pages/about" className="sf-with-ul">About</ALink>

                            <ul>
                                <li className={ path.indexOf( "pages/about" ) > -1 && path.indexOf( "pages/about-2" ) === -1 ? 'active' : '' }><ALink href="/pages/about">About 01</ALink></li>
                                <li className={ path.indexOf( "pages/about-2" ) > -1 ? 'active' : '' }><ALink href="/pages/about-2">About 02</ALink></li>
                            </ul>
                        </li>
                        <li className={ path.indexOf( "pages/contact" ) > -1 ? 'active' : '' }>
                            <ALink href="/pages/contact" className="sf-with-ul">Contact</ALink>

                            <ul>
                                <li className={ path.indexOf( "pages/contact" ) > -1 && path.indexOf( "pages/contact-2" ) === -1 ? 'active' : '' }><ALink href="/pages/contact">Contact 01</ALink></li>
                                <li className={ path.indexOf( "pages/contact-2" ) > -1 ? 'active' : '' }><ALink href="/pages/contact-2">Contact 02</ALink></li>
                            </ul>
                        </li>
                        <li className={ path.indexOf( "/login" ) > -1 ? 'active' : '' }><ALink href="/login">Login</ALink></li>
                        <li className={ path.indexOf( "pages/faq" ) > -1 ? 'active' : '' }><ALink href="/pages/faq">FAQs</ALink></li>
                        <li className={ path.indexOf( "404" ) > -1 ? 'active' : '' }><ALink href="/404">Error 404</ALink></li>
                        <li className={ path.indexOf( "pages/coming-soon" ) > -1 ? 'active' : '' }><ALink href="/pages/coming-soon">Coming Soon</ALink></li>
                    </ul>
                </li>
                <li className={ path.indexOf( "blog/" ) > -1 ? 'active' : '' }>
                    <ALink href="/blog/classic" className="sf-with-ul">Blog</ALink>

                    <ul>
                        <li className={ path.indexOf( "blog/classic" ) > -1 ? 'active' : '' }><ALink href="/blog/classic">Classic</ALink></li>
                        <li className={ path.indexOf( "blog/listing" ) > -1 ? 'active' : '' }><ALink href="/blog/listing" >Listing</ALink></li>
                        <li className={ path.indexOf( "blog/grid" ) > -1 ? 'active' : '' }>
                            <ALink href="/blog/grid/2cols" className="sf-with-ul">Grid</ALink>
                            <ul>
                                <li className={ path.indexOf( "blog/grid/2cols" ) > -1 ? 'active' : '' }><ALink href="/blog/grid/2cols">Grid 2 columns</ALink></li>
                                <li className={ path.indexOf( "blog/grid/3cols" ) > -1 ? 'active' : '' }><ALink href="/blog/grid/3cols">Grid 3 columns</ALink></li>
                                <li className={ path.indexOf( "blog/grid/4cols" ) > -1 ? 'active' : '' }><ALink href="/blog/grid/4cols">Grid 4 columns</ALink></li>
                                <li className={ path.indexOf( "blog/grid/sidebar" ) > -1 ? 'active' : '' }><ALink href="/blog/grid/sidebar">Grid sidebar</ALink></li>
                            </ul>
                        </li>
                        <li className={ path.indexOf( "blog/masonry" ) > -1 ? 'active' : '' }>
                            <ALink href="/blog/masonry/2cols" className="sf-with-ul">Masonry</ALink>
                            <ul>
                                <li className={ path.indexOf( "blog/masonry/2cols" ) > -1 ? 'active' : '' }><ALink href="/blog/masonry/2cols">Masonry 2 columns</ALink></li>
                                <li className={ path.indexOf( "blog/masonry/3cols" ) > -1 ? 'active' : '' }><ALink href="/blog/masonry/3cols">Masonry 3 columns</ALink></li>
                                <li className={ path.indexOf( "blog/masonry/4cols" ) > -1 ? 'active' : '' }><ALink href="/blog/masonry/4cols">Masonry 4 columns</ALink></li>
                                <li className={ path.indexOf( "blog/masonry/sidebar" ) > -1 ? 'active' : '' }><ALink href="/blog/masonry/sidebar">Masonry sidebar</ALink></li>
                            </ul>
                        </li>
                        <li className={ path.indexOf( "blog/mask" ) > -1 ? 'active' : '' }>
                            <ALink href="/blog/mask/grid" className="sf-with-ul">Mask</ALink>
                            <ul>
                                <li className={ path.indexOf( "blog/mask/grid" ) > -1 ? 'active' : '' }><ALink href="/blog/mask/grid">Blog Mask Grid</ALink></li>
                                <li className={ path.indexOf( "blog/mask/masonry" ) > -1 ? 'active' : '' }><ALink href="/blog/mask/masonry">Blog Mask Masonry</ALink></li>
                            </ul>
                        </li>
                        <li className={ path.indexOf( "blog/single" ) > -1 ? 'active' : '' }>
                            <ALink href="/blog/single/default/cras-ornare-tristique-elit." className="sf-with-ul">Single Post</ALink>
                            <ul>
                                <li className={ path.indexOf( "blog/single/default" ) > -1 ? 'active' : '' }><ALink href="/blog/single/default/cras-ornare-tristique-elit.">Default with sidebar</ALink></li>
                                <li className={ path.indexOf( "blog/single/fullwidth" ) > -1 ? 'active' : '' }><ALink href="/blog/single/fullwidth/fusce-pellentesque-suscipit.">Fullwidth no sidebar</ALink></li>
                                <li className={ path.indexOf( "blog/single/sidebar" ) > -1 ? 'active' : '' }><ALink href="/blog/single/sidebar/utaliquam-sollicitzdvudin-leo">Fullwidth with sidebar</ALink></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className={ path.indexOf( "element" ) > -1 ? 'active' : '' }>
                    <ALink href="/elements" className="sf-with-ul">Elements</ALink>

                    <ul>
                        <li className={ path.indexOf( "elements/products" ) > -1 ? "active" : '' }><ALink href="/elements/products">Products</ALink></li>
                        <li className={ path.indexOf( "elements/typography" ) > -1 ? "active" : '' }><ALink href="/elements/typography">Typography</ALink></li>
                        <li className={ path.indexOf( "elements/titles" ) > -1 ? "active" : '' }><ALink href="/elements/titles">Titles</ALink></li>
                        <li className={ path.indexOf( "elements/banners" ) > -1 ? "active" : '' }><ALink href="/elements/banners">Banners</ALink></li>
                        <li className={ path.indexOf( "elements/categories" ) > -1 ? "active" : '' }><ALink href="/elements/categories">Product Category</ALink></li>
                        <li className={ path.indexOf( "elements/video-banners" ) > -1 ? "active" : '' }><ALink href="/elements/video-banners">Video Banners</ALink></li>
                        <li className={ path.indexOf( "elements/buttons" ) > -1 ? "active" : '' }><ALink href="/elements/buttons">Buttons</ALink></li>
                        <li className={ path.indexOf( "elements/accordions" ) > -1 ? "active" : '' }><ALink href="/elements/accordions">Accordions</ALink></li>
                        <li className={ path.indexOf( "elements/tabs" ) > -1 ? "active" : '' }><ALink href="/elements/tabs">Tabs</ALink></li>
                        <li className={ path.indexOf( "elements/testimonials" ) > -1 ? "active" : '' }><ALink href="/elements/testimonials">Testimonials</ALink></li>
                        <li className={ path.indexOf( "elements/blog-posts" ) > -1 ? "active" : '' }><ALink href="/elements/blog-posts">Blog Posts</ALink></li>
                        <li className={ path.indexOf( "elements/cta" ) > -1 ? "active" : '' }><ALink href="/elements/cta">Call to Action</ALink></li>
                        <li className={ path.indexOf( "elements/icon-boxes" ) > -1 ? "active" : '' }><ALink href="/elements/icon-boxes">Icon Boxes</ALink></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

export default MainMenu;