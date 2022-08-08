import StickyBox from 'react-sticky-box';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '../../components/features/alink';
import PageHeader from '../../components/features/page-header';
import OwlCarousel from '../../components/features/owl-carousel';
import ShopListTwo from '../../components/partials/shop/list/shop-list-two';
import Pagination from '../../components/features/pagination';
import ShopSidebarThree from '../../components/partials/shop/directorios/shop-sidebar-three';
import Layout from '../../components/layout'


import { homeData, mainSlider11, mainSlider10 } from '../../utils/data';

function ProductosShopMarket () {
    const router = useRouter();
    const query = router.query;


  
    const loading=true;
    const getProducts = ()=>{
        return []
    }
    const data=[];
    const error="";



    const [ perPage, setPerPage ] = useState( 8 );
    const [ toggle, setToggle ] = useState( false );
    const products = [];
    const totalCount = 2;

    useEffect( () => {
        window.addEventListener( "resize", resizeHandle );
        resizeHandle();
        return () => {
            window.removeEventListener( "resize", resizeHandle );
        }
    }, [] )

    function resizeHandle () {
        if ( document.querySelector( "body" ).offsetWidth < 992 )
            setToggle( true );
        else
            setToggle( false );
    }

    useEffect( () => {
        getProducts( {
            variables: {
                searchTerm: query.searchTerm,
                color: query.color ? query.color.split( ',' ) : [],
                size: query.size ? query.size.split( ',' ) : [],
                brand: query.brand ? query.brand.split( ',' ) : [],
                minPrice: parseInt( query.minPrice ),
                maxPrice: parseInt( query.maxPrice ),
                category: query.category,
                sortBy: query.sortBy ? query.sortBy : 'default',
                page: query.page ? parseInt( query.page ) : 1,
                perPage: perPage,
                rating: query.rating ? query.rating.split( ',' ) : []
            }
        } );
    }, [ query, perPage ] )

    function onSortByChange ( e ) {
        let queryObject = router.query;
        let url = router.pathname.replace( '[type]', query.type ) + '?';
        for ( let key in queryObject ) {
            if ( key !== "type" && key !== "sortBy" ) {
                url += key + '=' + queryObject[ key ] + '&';
            }
        }

        router.push( url + 'sortBy=' + e.target.value );
    }

    function toggleSidebar () {
        if (
            document
                .querySelector( 'body' )
                .classList.contains( 'sidebar-filter-active' )
        ) {
            document
                .querySelector( 'body' )
                .classList.remove( 'sidebar-filter-active' );
        } else {
            document
                .querySelector( 'body' )
                .classList.add( 'sidebar-filter-active' );
        }
    }

    function hideSidebar () {
        document
            .querySelector( 'body' )
            .classList.remove( 'sidebar-filter-active' );
    }

    if ( error ) {
        return <div></div>
    }

    return (
        <Layout>
            <main className="main shop-market">
                <PageHeader title="Shop Market" subTitle="Shop" />
                <nav className="breadcrumb-nav mb-3">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <ALink href="/">Home</ALink>
                            </li>
                            <li className="breadcrumb-item">
                                <ALink href="/shop/directorios/list">Shop</ALink>
                            </li>
                            <li className="breadcrumb-item active">Market</li>
                        </ol>
                    </div>
                </nav>

                <div className="page-content">
                    <div className="container">
                        <div className="row">
                            <div
                                className="col-lg-9 col-xl-4-5col"
                            >
                         
                               
                                <div className="mb-2"></div>

                                <div className="toolbox">
                                    <div className="toolbox-left">
                                        {
                                            !loading && products ?
                                                <div className="toolbox-info">
                                                    Showing
                                                    <span> { products.length } of { totalCount }</span> Products
                                                </div>
                                                : ""
                                        }
                                    </div>

                                    <div className="toolbox-right">
                                        <div className="toolbox-sort">
                                            <label htmlFor="sortby">Sort by:</label>
                                            <div className="select-custom">
                                                <select
                                                    name="sortby"
                                                    id="sortby"
                                                    className="form-control bg-white"
                                                    onChange={ onSortByChange }
                                                    value={ query.sortBy ? query.sortBy : 'default' }
                                                >
                                                    <option value="default">Default</option>
                                                    <option value="featured">Most Popular</option>
                                                    <option value="rating">Most Rated</option>
                                                    <option value="new">Date</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <ShopListTwo products={ products } perPage={ perPage } loading={ loading } />

                                {
                                    totalCount > perPage ?
                                        <Pagination perPage={ perPage } total={ totalCount } />
                                        : ""
                                }
                            </div>

                            <aside className="col-lg-3 col-xl-5col order-lg-first">
                                <StickyBox className="sticky-market-sidebar" offsetTop={ 70 }>
                                    <ShopSidebarThree toggle={ toggle } />
                                </StickyBox>
                                {
                                    toggle ?
                                        <button className="sidebar-fixed-toggler" onClick={ toggleSidebar }>
                                            <i className="icon-cog"></i>
                                        </button>
                                        : ''
                                }
                                <div className="sidebar-filter-overlay" onClick={ hideSidebar }></div>
                            </aside>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default ProductosShopMarket;