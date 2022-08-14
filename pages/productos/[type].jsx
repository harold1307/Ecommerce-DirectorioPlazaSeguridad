import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import StickyBox from 'react-sticky-box';
import ALink from '~/components/features/alink';
import PageHeader from '~/components/features/page-header';
import ShopListOne from '../../components/partials/shop/list/shop-list-one';
import Pagination from '~/components/features/pagination';
import ShopSidebarOne from '../../components/partials/shop/sidebar/shop-sidebar-one';
import Layout from '../../components/layout';
import { useSelector }  from "react-redux";
import { scrollToPageContent } from '~/utils';

function ShopGrid() {
    const router = useRouter();
    const type = router.query.type;
    const query = router.query;
    const slug = router.query.slug;
    console.log(slug)
  
    const getProducts = ()=>{
        return []
    }
    const data=[];
    const error="";

    const [ firstLoading, setFirstLoading ] = useState( false );
    const [ perPage, setPerPage ] = useState( 5 );
    const [ pageTitle, setPageTitle ] = useState( 'Todos' );
    const [ toggle, setToggle ] = useState( false );
    
    const  productosState =  useSelector(state => state.productsAll);
    const  loading = productosState.loading;

    //Filtrar por categoria
    var products = productosState.productos.filter(producto=> (producto.category== (query.categoria || producto.category)));

    //Filtrar por precio
    query.minPrice && query.maxPrice? products = products.filter(producto=> ( producto.regularPrice >= Number(query.minPrice)  || producto.regularPrice >= Number(query.maxPrice) )): "";  
    const totalCount = productosState.productos.length;

    useEffect( () => {
        window.addEventListener( "resize", resizeHandle );
        resizeHandle();
       
        return () => {
            window.removeEventListener( "resize", resizeHandle );
        }        
    }, [] )

    function resizeHandle() {
        if ( document.querySelector( "body" ).offsetWidth < 992 )
            setToggle( true );
        else
            setToggle( false );
    }

    useEffect( () => {    
        scrollToPageContent();
    }, [ query, perPage ] )

    useEffect( () => {
        if ( products ) setFirstLoading( true );
    }, [ products ] )

    useEffect( () => {
        if ( type == 'list' ) {
            setPageTitle( 'Lista de productos' );
            setPerPage( 5 );
        } else if ( type == '2cols' ) {
            setPageTitle( 'Lista de productos' );
            setPerPage( 6 );
        } else if ( type == '3cols' ) {
            setPageTitle( 'Lista de productos' );
            setPerPage( 9 );
        } else if ( type == 'todos' ) {
            setPageTitle( 'Lista de productos' );
            setPerPage( 12 );
        }
    }, [ type ] )

    function onSortByChange( e ) {
        let queryObject = router.query;
        let url = router.pathname.replace( '[type]', query.type ) + '?';
        for ( let key in queryObject ) {
            if ( key !== "type" && key !== "ordenar" ) {
                url += key + '=' + queryObject[ key ] + '&';
            }
        }
        router.push( url + 'ordenar=' + e.target.value );
    }

    function toggleSidebar() {
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

    function hideSidebar() {
        document
            .querySelector( 'body' )
            .classList.remove( 'sidebar-filter-active' );
    }

    if ( error ) {
        return <div></div>
    }
    return (
        <Layout>
            <main className="main shop">
                <PageHeader title={ 'Productos'} subTitle={   `Categoría: ${query.categoria || 'Todos'} `} />
                <nav className="breadcrumb-nav mb-2">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <ALink href="/">Inicio</ALink>
                            </li>
                            <li className="breadcrumb-item">
                                <ALink href="/productos/todos">Productos</ALink>
                            </li>
                                {
                                    query.categoria ?                               
                                  
                                    <li className="breadcrumb-item active"><ALink href={ { pathname:  `/productos/todos`, query: {categoria: query.categoria    } } }  scroll={ false }>{ query.categoria }</ALink></li>
                                   :
                                   <li className="breadcrumb-item active">Todos</li>
                                } 
                        </ol>
                    </div>
                </nav>

                <div className="page-content">
                    <div className="container">
                        <div className="row skeleton-body">
                            <div
                                className={ `col-lg-9 skel-shop-products ${ !loading ? 'loaded' : '' }` }
                            >
                                <div className="toolbox">
                                    <div className="toolbox-left">
                                        {
                                             products ?
                                                <div className="toolbox-info">
                                                    Mostrando
                                                    <span> { products.length } de { totalCount }</span> Productos
                                                </div>
                                                : ""
                                        }
                                    </div>

                                    <div className="toolbox-right">
                                        <div className="toolbox-sort">
                                            <label htmlFor="sortby">ordenar:</label>
                                            <div className="select-custom">
                                                <select
                                                    name="sortby"
                                                    id="sortby"
                                                    className="form-control"
                                                    onChange={ onSortByChange }
                                                    value={ query.sortBy ? query.sortBy : 'normal' }
                                                >
                                                    <option value="normal">Normal</option>
                                                    <option value="ordenDescendente">Precio descendente</option>
                                                    <option value="ordenAscendente">Precio ascendente</option>
                                                    
                                                </select>
                                            </div>
                                        </div>
                                        <div className="toolbox-layout">
                                            <ALink
                                                href="/productos/list"
                                                className={ `btn-layout ${ type == 'list' ? 'active' : '' }` }
                                                scroll={ false }
                                            >
                                                <svg width="16" height="10">
                                                    <rect x="0" y="0" width="4" height="4" />
                                                    <rect x="6" y="0" width="10" height="4" />
                                                    <rect x="0" y="6" width="4" height="4" />
                                                    <rect x="6" y="6" width="10" height="4" />
                                                </svg>
                                            </ALink>

                                            <ALink
                                                href="/productos/2cols"
                                                className={ `btn-layout ${ type == '2cols' ? 'active' : '' }` }
                                                scroll={ false }
                                            >
                                                <svg width="10" height="10">
                                                    <rect x="0" y="0" width="4" height="4" />
                                                    <rect x="6" y="0" width="4" height="4" />
                                                    <rect x="0" y="6" width="4" height="4" />
                                                    <rect x="6" y="6" width="4" height="4" />
                                                </svg>
                                            </ALink>

                                            <ALink
                                                href="/productos/3cols"
                                                className={ `btn-layout ${ type == '3cols' ? 'active' : '' }` }
                                                scroll={ false }
                                            >
                                                <svg width="16" height="10">
                                                    <rect x="0" y="0" width="4" height="4" />
                                                    <rect x="6" y="0" width="4" height="4" />
                                                    <rect x="12" y="0" width="4" height="4" />
                                                    <rect x="0" y="6" width="4" height="4" />
                                                    <rect x="6" y="6" width="4" height="4" />
                                                    <rect x="12" y="6" width="4" height="4" />
                                                </svg>
                                            </ALink>

                                            <ALink
                                                href="/productos/4cols"
                                                className={ `btn-layout ${ type == '4cols' ? 'active' : '' }` }
                                                scroll={ false }
                                            >
                                                <svg width="22" height="10">
                                                    <rect x="0" y="0" width="4" height="4" />
                                                    <rect x="6" y="0" width="4" height="4" />
                                                    <rect x="12" y="0" width="4" height="4" />
                                                    <rect x="18" y="0" width="4" height="4" />
                                                    <rect x="0" y="6" width="4" height="4" />
                                                    <rect x="6" y="6" width="4" height="4" />
                                                    <rect x="12" y="6" width="4" height="4" />
                                                    <rect x="18" y="6" width="4" height="4" />
                                                </svg>
                                            </ALink>
                                        </div>
                                    </div>
                                </div>

                                <ShopListOne products={ products } perPage={ perPage } loading={ loading }></ShopListOne>

                                {
                                    totalCount > perPage ?
                                        <Pagination perPage={ perPage } total={ totalCount }></Pagination>
                                        : ""
                                }
                            </div>

                            <aside className={ `col-lg-3 skel-shop-sidebar order-lg-first skeleton-body ${ ( !loading || firstLoading ) ? 'loaded' : '' }` }>
                                <div className="skel-widget"></div>
                                <div className="skel-widget"></div>
                                <div className="skel-widget"></div>
                                <div className="skel-widget"></div>
                                <StickyBox className="sticky-content" offsetTop={ 70 }>
                                    <ShopSidebarOne toggle={ toggle }></ShopSidebarOne>
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

export default ShopGrid ;