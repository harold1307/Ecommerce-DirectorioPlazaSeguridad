import { LazyLoadImage } from 'react-lazy-load-image-component';

import OwlCarousel from '~/components/features/owl-carousel';
import ProductTwelve from '~/components/features/products/product-twelve';

import ALink from '~/components/features/alink';
import { productSlider1 } from '~/utils/data';

function CookingCollection( props ) {
    const { products = [], loading } = props;

    return (
        <div className="row cat-banner-row cooking">
            <div className="col-xl-3 col-xxl-4">
                <div className="cat-banner row no-gutters">
                    <div className="cat-banner-list col-sm-6 d-xl-none d-xxl-flex" style={ { backgroundImage: `url(images/home/banners/banner-bg-4.jpg)` } }>
                        <div className="banner-list-content">
                            <h2>
                                <ALink href="/shop/directorios/list">Cooking</ALink>
                            </h2>

                            <ul>
                                <li>
                                    <ALink href="/shop/directorios/list">Cookware</ALink>
                                </li>
                                <li>
                                    <ALink href="/shop/directorios/list">Dinnerware</ALink>
                                </li>
                                <li>
                                    <ALink href="/shop/directorios/list">Cups</ALink>
                                </li>
                                <li>
                                    <ALink href="/shop/directorios/list">Microwaves</ALink>
                                </li>
                                <li>
                                    <ALink href="/shop/directorios/list">Toasters</ALink>
                                </li>
                                <li>
                                    <ALink href="/shop/directorios/list">Coffee Makers</ALink>
                                </li>
                                <li className="list-all-link">
                                    <ALink href="/shop/directorios/list">See All Departments</ALink>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-sm-6 col-xl-12 col-xxl-6">
                        <div className="banner banner-overlay">
                            <ALink href="/shop/directorios/list">
                                <div className="lazy-overlay"></div>

                                <LazyLoadImage
                                    alt="Banner"
                                    src="images/home/banners/banner-10.jpg"
                                    threshold={ 200 }
                                    width={ 240 }
                                    height={ 400 }
                                    effect="blur"
                                />
                            </ALink>

                            <div className="banner-content">
                                <h4 className="banner-subtitle text-white">
                                    <ALink href="/shop/directorios/list">Best Deals</ALink>
                                </h4>

                                <h3 className="banner-title text-white">
                                    <ALink href="/shop/directorios/list">
                                        Cooking
                                    <br />Appliances
                                    <br />
                                        <span>Up To 30% Off</span>
                                    </ALink>
                                </h3>

                                <ALink
                                    href="/shop/directorios/3cols"
                                    className="banner-link"
                                >
                                    Shop Now
                                    <i className="icon-long-arrow-right"></i>
                                </ALink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-9 col-xxl-8">
                {
                    loading ?
                        <OwlCarousel adClass="owl-simple owl-full carousel-equal-height carousel-with-shadow" options={ productSlider1 }>
                            {
                                [ 1, 2, 3, 4, 5, 6 ].map( ( item, index ) =>
                                    <div className="skel-pro" key={ index }></div>
                                )
                            }
                        </OwlCarousel>
                        :
                        <OwlCarousel adClass="owl-simple owl-full carousel-equal-height carousel-with-shadow" options={ productSlider1 }>
                            {
                                products.map( ( item, index ) =>
                                    <ProductTwelve
                                        product={ item }
                                        key={ index } />
                                )
                            }
                        </OwlCarousel>
                }
            </div>
        </div>
    )
}

export default CookingCollection;
