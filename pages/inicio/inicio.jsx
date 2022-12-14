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
                        <div className="intro-slider-container slider-container-ratio">
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
                                            <h3 className="intro-subtitle text-white">Busca en</h3>
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
                                            <h3 className="intro-subtitle">Monitoreo de siembras</h3>

                                            <h1 className="intro-title">
                                                <span>DRONES</span>
                                                <br />Agro Modernos
                                            </h1>

                                            <div className="intro-price">
                                                <sup>desde</sup>
                                                <span>
                                                    $1,948
                                                    <sup>.99</sup>
                                                </span>
                                            </div>
                                            <ALink href="/empresa/6244d94b5bd149000937348c" className="btn btn-primary">
                                                <span>Contactanos</span>
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
                                <sup className="text-white"> </sup>
                                    <span className="text-white">
                                        <strong> </strong>
                                        <sup className="text-white"> </sup>
                                    </span>
                                </div>
                                <ALink href="/productos/list" className="btn btn-primary btn-shadow">
                                    Contactanos
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
                                                    <h4 className="banner-subtitle text-dark d-none d-sm-block">
                                                        <ALink href="/productos/list">Venta e Instalaci??n</ALink>
                                                    </h4>

                                                    <h3 className="banner-title text-dark">
                                                        <ALink href="/productos/list">
                                                            C??maras De 
													<br />Seguridad PTZ
													<br />
                                                            <span className='pt-2'><strong>10% de descuento</strong> </span>
                                                        </ALink>
                                                    </h3>

                                                    <ALink
                                                        href="/productos/3cols"
                                                        className="banner-link border border-light"
                                                    >
                                                        Ver Producto
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
                                                        src="/images/home/banners/banner-3.jpg"
                                                        threshold={ 200 }
                                                        width="580"
                                                        height={ 250 }
                                                        effect="blur"
                                                    />
                                                </ALink>

                                                <div className="banner-content">
                                                    <h4 className="banner-subtitle text-white d-none d-sm-block">
                                                        <ALink href="/productos/list">Protege tu patrimonio</ALink>
                                                    </h4>
                                                    <h3 className="banner-title text-white">
                                                        <ALink href="/productos/list">
                                                            Poliza de Vehiculos
													<br />
                                                         <span className='pt-2'><strong>5% de descuento</strong> </span>
                                                        </ALink>
                                                    </h3>
                                                    <ALink
                                                        href="/productos/3cols"
                                                        className="banner-link "
                                                    >
                                                        Cont??ctanos Ahora
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
                                                <ALink href="/productos/list"> <span> </span></ALink>
                                            </h4>
                                            <h3 className="banner-title text-white">
                                                <ALink href="/productos/list">
                                                   <span> </span>
                                                </ALink>
                                            </h3>
                                            <ALink
                                                href="/empresas"
                                                className="banner-link mt-3"
                                            > Cont??ctanos
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
                                                (compania.logo ?? false) ?                                                
                                                    <ALink href={ `/empresa/${ compania._id }`} className="sidebar-filter-clear" scroll={ false } key={index} >               
                                                        <Image className='border border-warning rounded-circle' src={ compania.logo  } alt={compania.name }  height= '150' width='150' />
                                                    </ALink>
                                                    :
                                                    <ALink href={ `/empresa/${ compania._id }`} className="sidebar-filter-clear" scroll={ false } key={index} >      
                                                    <Image className='border border-warning rounded-circle' src={ '/images/brands/8.png'} height='150' width='150' alt="" />
                                                    </ALink>
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
                                                <ALink href="/productos/list">Aumenta la visibilidad</ALink>
                                            </h4>

                                            <h3 className="banner-title text-white">
                                                <ALink href="/productos/list">
                                                    Anunciate en
											    <br />
                                                    <span>Directotio Plaza</span>
                                                </ALink>
                                            </h3>

                                            <ALink
                                                href=""
                                                className="banner-link"
                                            >
                                                Quiero publicitarme
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
                                                <ALink href="/productos/list">Encuentra</ALink>
                                            </h4>

                                            <h3 className="banner-title text-white">
                                                <ALink href="/productos/list">
                                                    Todo en seguridad
											<br />
                                                    <span>en un solo lugar</span>
                                                </ALink>
                                            </h3>

                                            <ALink
                                                href="/empresa"
                                                className="banner-link"
                                            >
                                                Contactanos
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
                                                <i className="icon-search"></i>
                                            </span>
                                            <div className="icon-box-content">
                                                <h3 className="icon-box-title">Buscar</h3>
                                                <p>Realiza tus busquedas con facilidad.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 col-lg-3">
                                        <div className="icon-box icon-box-side">
                                            <span className="icon-box-icon text-dark">
                                                <i className="icon-rotate-left"></i>
                                            </span>

                                            <div className="icon-box-content">
                                                <h3 className="icon-box-title">Contactar</h3>
                                                <p>Ponte en contacto con la empresa.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 col-lg-3">
                                        <div className="icon-box icon-box-side">
                                            <span className="icon-box-icon text-dark">
                                                <i className="icon-info-circle"></i>
                                            </span>

                                            <div className="icon-box-content">
                                                <h3 className="icon-box-title">Comprar</h3>
                                                <p>Compra con seguridad lo que necesitas.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 col-lg-3">
                                        <div className="icon-box icon-box-side">
                                            <span className="icon-box-icon text-dark">
                                                <i className="icon-life-ring"></i>
                                            </span>

                                            <div className="icon-box-content">
                                                <h3 className="icon-box-title">Seguridad</h3>
                                                <p>Las empresas registradas est??n verificadas.</p>
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
                                                            Anuncio<br />
                                                            <span> 20% Off</span>
                                                        </ALink>
                                                    </h3>
                                                    <ALink
                                                        href="/productos/list"
                                                        className="banner-link"
                                                    >
                                                        Ver
												<i className="icon-long-arrow-right"></i>
                                                    </ALink>
                                                </div>
                                            </div>
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
                                                    <h3 className="banner-title text-white mt-2">
                                                        <ALink href="/productos/list">
                                                            Vigilancia Privada
													<br />
                                                            <span>Pide tu</span> Cotizaci??n													
                                                        </ALink>
                                                    </h3>                                                   
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