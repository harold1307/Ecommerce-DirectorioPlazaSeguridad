import { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Image from 'next/image';
import Reveal from 'react-awesome-reveal';
import { useSelector }  from "react-redux";
import StickyBox from 'react-sticky-box';
import ALink from '../../components/features/alink';
import OwlCarousel from '../../components/features/owl-carousel';
import TrendyCollection from '../../components/partials/home/trendy-collection';
import { homeData, introSlider, brandSlider, fadeInUpShorter, fadeInLeftShorter, fadeInUp, fadeInRightShorter } from '../../utils/data';

const Home = () =>{
    const [ fakeArray, setFakeArray ] = useState( [] );
    useEffect( () => {
        let temp = [];
        for ( let i = 0; i < 6; i++ ) {
            temp.push( i );
        }
        setFakeArray( temp );
    }, [ ] )

   

    const  companiesAll =  useSelector(state => state.companiesAll);

    const toggleSidebar = () => {
        if ( document) {
            document.querySelector( 'body' ).classList.remove( 'sidebar-home-active' );
        } else {
            document.querySelector( 'body' ).classList.add( 'sidebar-home-active' );
        }
    }

    const hideSidebar = () => {
        document
            .querySelector( 'body' )
            .classList.remove( 'sidebar-home-active' );
    }

    const resizeHandler = () => {
        if ( window.innerWidth > 1199 ) document.querySelectorAll( '.sidebar-fixed-toggler' )[0].classList.add( 'd-none' );
        if ( window.innerWidth <= 1199 ) document.querySelector( '.sidebar-fixed-toggler' ).classList.remove( 'd-none' );
    }

    useEffect( () => {
        resizeHandler();
        window.addEventListener( 'resize', resizeHandler, {
            passive: true
        } );

        return () => {
            window.removeEventListener( 'resize', resizeHandler );
        }
    }, [] )

    return (
        <div className="main home-page skeleton-body">
            <div className="mb-lg-2"></div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-9 col-xxl-8 offset-lg-3 offset-xxl-2">
                        <div className="intro-slider-container slider-container-ratio mb-2">
                            <OwlCarousel adClass="owl-simple intro-slider owl-nav-inside" options={ introSlider }>
                                <div className="intro-slide">
                                    <figure className="slide-image mb-0">
                                    <LazyLoadImage
                                            alt="Slide"
                                            src="/images/home/sliders/slide-1.jpg"
                                            width= {1180}
                                            height={500}                                           
                                        />
                                    </figure>
                                    <div className="intro-content">
                                        <Reveal keyframes={ fadeInUpShorter } delay={ 100 } duration={ 1000 }>
                                            <h3 className="intro-subtitle">Busca en</h3>

                                            <h1 className="intro-title text-white">
                                                Directorio
                                                <br />Seguridad Plaza
                                            </h1>

                                            <div className="intro-text text-white">Servicios, Insumos.</div>
                                            <ALink href="/productos/list" className="btn btn-primary">
                                                <span>Ver productos</span>
                                                <i className="icon-long-arrow-right"></i>
                                            </ALink>
                                        </Reveal>
                                    </div>
                                </div>
                                <div className="intro-slide">
                                    <figure className="slide-image mb-0">
                                    <LazyLoadImage
                                            alt="Slide"
                                            src="/images/home/sliders/slide-2.jpg"
                                            width={ 1180 }
                                            height={ 500 }
                                        />
                                    </figure>
                                    <div className="intro-content">
                                        <Reveal keyframes={ fadeInUpShorter } delay={ 100 } duration={ 1000 }>
                                            <h3 className="intro-subtitle">Hottest Deals</h3>

                                            <h1 className="intro-title">
                                                <span>Wherever You Go</span>
                                                <br />DJI Mavic 2 Pro
                                            </h1>

                                            <div className="intro-price">
                                                <sup>from</sup>
                                                <span>
                                                    $1,948
                                                    <sup>.99</sup>
                                                </span>
                                            </div>
                                            <ALink href="/productos/list" className="btn btn-primary">
                                                <span>Discover Here</span>
                                                <i className="icon-long-arrow-right"></i>
                                            </ALink>
                                        </Reveal>
                                    </div>
                                </div>
                                <div className="intro-slide">
                                    <figure className="slide-image mb-0">
                                    <LazyLoadImage
                                            alt="Slide"
                                            src="/images/home/sliders/slide-3.jpg"
                                            width={ 1180 }
                                            height={ 500 }
                                        />
                                    </figure>
                                    <div className="intro-content">
                                        <Reveal keyframes={ fadeInUpShorter } delay={ 100 } duration={ 1000 }>
                                            <h3 className="intro-subtitle">Limited Quantities</h3>

                                            <h1 className="intro-title">
                                                Refresh Your
                                                <br />Wardrobe
                                            </h1>

                                            <div className="intro-text">Summer Collection 2021</div>
                                            <ALink href="/productos/list" className="btn btn-primary">
                                                <span>Discover Now</span>
                                                <i className="icon-long-arrow-right"></i>
                                            </ALink>
                                        </Reveal>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                    <div className="col-xl-3 col-xxl-2 d-none d-xxl-block">
                        <div className="banner intro-banner banner-overlay banner-content-stretch">
                            <ALink href="/productos/3cols">
                                <div className="lazy-overlay bg-transparent"></div>
                                <LazyLoadImage
                                    alt="Banner"
                                    src="/images/home/banners/banner-1.jpg"
                                    threshold={ 200 }
                                    width="280"
                                    height="550"
                                    effect="blur"
                                />
                            </ALink>
                            <div className="banner-content text-right">
                                <div className="price text-center">
                                    <sup className="text-white">from</sup>
                                    <span className="text-white">
                                        <strong>$199</strong>
                                        <sup className="text-white">,99</sup>
                                    </span>
                                </div>
                                <ALink href="/productos/list" className="banner-link">
                                    Discover Now
                                    <i className="icon-long-arrow-right"></i>
                                </ALink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-9 col-xxl-10">
                        <div className="row">
                            <div className="col-lg-12 col-xxl-4-5col">
                                <div className="row">
                                    <div className="col-md-6">
                                        <Reveal keyframes={ fadeInUp } delay={ 200 } duration={ 1000 } triggerOnce>
                                            <div className="banner banner-overlay">
                                                <ALink href="/productos/list">
                                                    <div className="lazy-overlay"></div>

                                                    <LazyLoadImage
                                                        alt="Banner"
                                                        src="/images/home/banners/banner-2.jpg"
                                                        threshold={ 200 }
                                                        width="580"
                                                        height={ 250 }
                                                        effect="blur"
                                                    />
                                                </ALink>

                                                <div className="banner-content">
                                                    <h4 className="banner-subtitle text-white d-none d-sm-block">
                                                        <ALink href="/productos/list">Hottest Deals</ALink>
                                                    </h4>

                                                    <h3 className="banner-title text-white">
                                                        <ALink href="/productos/list">
                                                            Detox And Beautify
													<br />For Spring
													<br />
                                                            <span>Up To 20% Off</span>
                                                        </ALink>
                                                    </h3>

                                                    <ALink
                                                        href="/productos/3cols"
                                                        className="banner-link"
                                                    >
                                                        Shop Now
												<i className="icon-long-arrow-right"></i>
                                                    </ALink>
                                                </div>
                                            </div>
                                        </Reveal>
                                    </div>

                                    <div className="col-md-6">
                                        <Reveal keyframes={ fadeInUp } delay={ 300 } duration={ 1000 } triggerOnce>
                                            <div className="banner banner-overlay">
                                                <ALink href="/productos/list">
                                                    <div className="lazy-overlay"></div>

                                                    <LazyLoadImage
                                                        alt="Banner"
                                                        src="/images/home/banners/banner-3.png"
                                                        threshold={ 200 }
                                                        width="580"
                                                        height={ 250 }
                                                        effect="blur"
                                                    />
                                                </ALink>

                                                <div className="banner-content">
                                                    <h4 className="banner-subtitle text-white d-none d-sm-block">
                                                        <ALink href="/productos/list">Deal of the Day</ALink>
                                                    </h4>

                                                    <h3 className="banner-title text-white">
                                                        <ALink href="/productos/list">
                                                            Headphones
													<br />
                                                            <span>Up To 30% Off</span>
                                                        </ALink>
                                                    </h3>

                                                    <ALink
                                                        href="/productos/3cols"
                                                        className="banner-link"
                                                    >
                                                        Shop Now
												<i className="icon-long-arrow-right"></i>
                                                    </ALink>
                                                </div>
                                            </div>
                                        </Reveal>
                                    </div>

                                </div>
                            </div>

                            <div className="col-12 col-xxl-5col d-none d-xxl-block">
                                <Reveal keyframes={ fadeInUp } delay={ 400 } duration={ 1000 } triggerOnce>
                                    <div className="banner banner-overlay">
                                        <ALink href="/productos/list">
                                            <div className="lazy-overlay"></div>

                                            <LazyLoadImage
                                                alt="Banner"
                                                src="/images/home/banners/banner-4.jpg"
                                                threshold={ 200 }
                                                width="280"
                                                height={ 250 }
                                                effect="blur"
                                            />
                                        </ALink>

                                        <div className="banner-content">
                                            <h4 className="banner-subtitle text-white">
                                                <ALink href="/productos/list">Clearance</ALink>
                                            </h4>

                                            <h3 className="banner-title text-white">
                                                <ALink href="/productos/list">
                                                    Seating and Tables Clearance
                                            </ALink>
                                            </h3>

                                            <ALink
                                                href="/productos/3cols"
                                                className="banner-link"
                                            >
                                                Shop Now
												<i className="icon-long-arrow-right"></i>
                                            </ALink>
                                        </div>
                                    </div>
                                </Reveal>
                            </div>
                        </div>

                        <div className="mb-1"></div>

                        <Reveal keyframes={ fadeInUp } delay={ 500 } duration="500" triggerOnce>
                            <OwlCarousel adClass="brands-slider brands-carousel brands-border" options={ brandSlider }>
                                {
                                    companiesAll.loading?
                                        companiesAll.companias.map( ( compania, index ) => {
                                            return (
                                                compania.logo==true || !(/undefined/).test(compania.logo) ?
                                                
                                                <ALink href={ { pathname:  `/companies`, query: {compania: compania._id     } } } className="sidebar-filter-clear" scroll={ false } key={index} >
                                                     <Image  src={ compania.logo  } alt={compania.logo }  height= '150' width='150' />
                                                </ALink>
                                                :
                                                <Image  src={ '/images/brands/8.png'} height='120' width='120' alt="" />

                                            )
                                        } )
                                        :
                                        fakeArray.map( ( item, index ) => (
                                        <div className="skel-pro skel-pro-list" key={ index }></div>
                                    ) )

                                }
                            </OwlCarousel>
                        </Reveal>

                        <div className="mb-3"></div>

                        <Reveal keyframes={ fadeInRightShorter } delay={ 300 } duration="1000" triggerOnce>                            
                            <TrendyCollection />
                        </Reveal>

                        <div className="mb-5"></div>

                        <div className="row">
                            <div className="col-md-6">
                                <Reveal keyframes={ fadeInLeftShorter } delay={ 200 } duration="1000" triggerOnce>
                                    <div className="banner home-banner banner-overlay">
                                        <ALink href="/productos/list">
                                            <div className="lazy-overlay"></div>

                                            <LazyLoadImage
                                                alt="Banner"
                                                src="images/home/banners/banner-7.jpg"
                                                threshold={ 200 }
                                                width="730"
                                                height="250"
                                                effect="blur"
                                            />
                                        </ALink>

                                        <div className="banner-content">
                                            <h4 className="banner-subtitle text-white d-none d-sm-block">
                                                <ALink href="/productos/list">Spring Sale is Coming</ALink>
                                            </h4>

                                            <h3 className="banner-title text-white">
                                                <ALink href="/productos/list">
                                                    Floral T-shirts and Vests
											    <br />
                                                    <span>Spring Sale</span>
                                                </ALink>
                                            </h3>

                                            <ALink
                                                href="/productos/3cols"
                                                className="banner-link"
                                            >
                                                Shop Now
                                            <i className="icon-long-arrow-right"></i>
                                            </ALink>
                                        </div>
                                    </div>
                                </Reveal>
                            </div>
                            <div className="col-md-6">
                                <Reveal keyframes={ fadeInRightShorter } delay={ 200 } duration="1000" triggerOnce>
                                    <div className="banner home-banner banner-overlay">
                                        <ALink href="/productos/list">
                                            <div className="lazy-overlay"></div>

                                            <LazyLoadImage
                                                alt="Banner"
                                                src="images/home/banners/banner-8.jpg"
                                                threshold={ 200 }
                                                width="730"
                                                height={ 250 }
                                                effect="blur"
                                            />
                                        </ALink>

                                        <div className="banner-content">
                                            <h4 className="banner-subtitle text-white d-none d-sm-block">
                                                <ALink href="/productos/list">Amazing Value</ALink>
                                            </h4>

                                            <h3 className="banner-title text-white">
                                                <ALink href="/productos/list">
                                                    Upgrade and Save
											<br />
                                                    <span>On The Latest Apple Devices</span>
                                                </ALink>
                                            </h3>

                                            <ALink
                                                href="/productos/3cols"
                                                className="banner-link"
                                            >
                                                Shop Now
                                            <i className="icon-long-arrow-right"></i>
                                            </ALink>
                                        </div>
                                    </div>
                                </Reveal>
                            </div>
                        </div>

                        <div className="mb-3"></div>

                        <div className="icon-boxes-container">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="icon-box icon-box-side">
                                            <span className="icon-box-icon text-dark">
                                                <i className="icon-rocket"></i>
                                            </span>
                                            <div className="icon-box-content">
                                                <h3 className="icon-box-title">Free Shipping</h3>
                                                <p>Orders $50 or more</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 col-lg-3">
                                        <div className="icon-box icon-box-side">
                                            <span className="icon-box-icon text-dark">
                                                <i className="icon-rotate-left"></i>
                                            </span>

                                            <div className="icon-box-content">
                                                <h3 className="icon-box-title">Free Returns</h3>
                                                <p>Within 30 days</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 col-lg-3">
                                        <div className="icon-box icon-box-side">
                                            <span className="icon-box-icon text-dark">
                                                <i className="icon-info-circle"></i>
                                            </span>

                                            <div className="icon-box-content">
                                                <h3 className="icon-box-title">Get 20% Off 1 Item</h3>
                                                <p>When you sign up</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 col-lg-3">
                                        <div className="icon-box icon-box-side">
                                            <span className="icon-box-icon text-dark">
                                                <i className="icon-life-ring"></i>
                                            </span>

                                            <div className="icon-box-content">
                                                <h3 className="icon-box-title">We Support</h3>
                                                <p>24/7 amazing services</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-5"></div>
                    </div>

                    <aside className="col-xl-3 col-xxl-2 order-xl-first">
                        <button className="sidebar-fixed-toggler" onClick={ toggleSidebar }><i className="icon-cog"></i></button>
                        <div className="sidebar-filter-overlay" onClick={ hideSidebar }></div>
                        <StickyBox className="sticky-content" offsetTop={ 70 }>
                            <div className="sidebar sidebar-home">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="widget widget-banner">
                                            <div className="banner banner-overlay">
                                                <ALink href="/productos/list">
                                                    <div className="lazy-overlay"></div>
                                                    <LazyLoadImage
                                                        alt="Banner"
                                                        src="/images/home/banners/banner-11.jpg"
                                                        threshold={ 200 }
                                                        width="280"
                                                        height={ 400 }
                                                        effect="blur"
                                                    />
                                                </ALink>

                                                <div className="banner-content banner-content-top banner-content-right text-right">
                                                    <h3 className="banner-title text-white">
                                                        <ALink href="/productos/list">
                                                            Maximum Comfort<br />
                                                            <span>Sofas -20% Off</span>
                                                        </ALink>
                                                    </h3>
                                                    <ALink
                                                        href="/productos/3cols"
                                                        className="banner-link"
                                                    >
                                                        Shop Now
												<i className="icon-long-arrow-right"></i>
                                                    </ALink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-12 mb-2">
                                        <div className="widget widget-products">
                                            <h4 className="widget-title">
                                                <span>Bestsellers</span>
                                            </h4>                                            
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="widget widget-deals">
                                            <h4 className="widget-title">
                                                <span>Special Offer</span>
                                            </h4>                                    
                                        </div>
                                    </div>

                                    <div className="col-xl-12">
                                        <div className="widget widget-banner">
                                            <div className="banner banner-overlay">
                                                <ALink href="/productos/list">
                                                    <div className="lazy-overlay"></div>

                                                    <LazyLoadImage
                                                        alt="Banner"
                                                        src="/images/home/banners/banner-12.jpg"
                                                        threshold={ 200 }
                                                        width="280"
                                                        height={ 400 }
                                                        effect="blur"
                                                    />
                                                </ALink>

                                                <div className="banner-content banner-content-top">
                                                    <h3 className="banner-title text-white">
                                                        <ALink href="/productos/list">
                                                            Take Better Photos
													<br />
                                                            <span>With</span> Canon EOS
													<br />
                                                            <span>Up To 20% Off</span>
                                                        </ALink>
                                                    </h3>

                                                    <ALink
                                                        href="/productos/3cols"
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
                            </div>
                        </StickyBox>
                    </aside>
                </div>
            </div> 
        </div>
    )
}

export default  Home;