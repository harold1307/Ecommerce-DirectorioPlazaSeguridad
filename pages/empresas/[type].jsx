import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import StickyBox from 'react-sticky-box';
import ALink from '~/components/features/alink';
import PageHeader from '~/components/features/page-header';
import ShopListOneEmpresas from '../../components/partials/shop/list/shop-list-one-empresas';
import Pagination from '~/components/features/pagination';
import ShopSidebarOneEmpresas from '../../components/partials/shop/sidebar/shop-sidebar-one-empresas';
import Layout from '../../components/layout';
import { useSelector }  from "react-redux";
import { scrollToPageContent } from '~/utils';

function Empresas() {
    const router = useRouter();
    const type = router.query.type;
    const query = router.query;
    const slug = router.query.slug;
    console.log(query)
  
    const getProducts = ()=>{
        return []
    }
    const data=[];
    const error="";

    const [ firstLoading, setFirstLoading ] = useState( false );
    const [ perPage, setPerPage ] = useState( 5 );
    const [ pageTitle, setPageTitle ] = useState( 'Todos' );
    const [ toggle, setToggle ] = useState( false );
    
    const  companiesState =  useSelector(state => state.companiesAll);
    const  empresas = companiesState.companias;
    const  loading = companiesState.loading;
    const totalCount = companiesState.companias.length;

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
        if ( empresas ) setFirstLoading( true );
    }, [ empresas  ] )

    useEffect( () => {
        if ( type == 'list' ) {
            setPageTitle( 'Lista de Empresas' );
            setPerPage( 5 );
        } else if ( type == '2cols' ) {
            setPageTitle( 'Lista de Empresas' );
            setPerPage( 6 );
        } else if ( type == '3cols' ) {
            setPageTitle( 'Lista de Empresas' );
            setPerPage( 9 );
        } else if ( type == 'todos' ) {
            setPageTitle( 'Lista de Empresas' );
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
                <PageHeader title={ 'Empresas'} subTitle={   `Servivios: ${query.services || 'Todos'} `} />
                <nav className="breadcrumb-nav mb-2">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <ALink href="/">Inicio</ALink>
                            </li>
                            <li className="breadcrumb-item">
                                <ALink href="/empresas/todos">Empresas</ALink>
                            </li>
                                {
                                query.categoria ?                                                               
                                    <li className="breadcrumb-item active"><ALink href={ { pathname:  `/empresas/todos`, query: {categoria: query.categoria    } } }  scroll={ false }>{ query.categoria }</ALink></li>
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
                                            empresas ?
                                                <div className="toolbox-info">
                                                    Mostrando
                                                    <span> { empresas.length } de { totalCount }</span> Empresas
                                                </div>
                                                : ""
                                        }
                                    </div>

                                    <div className="toolbox-right">
                                        <div className="toolbox-sort">
                                            <label htmlFor="sortby">Ordenar:</label>
                                            <div className="select-custom">
                                                <select
                                                    name="sortby"
                                                    id="sortby"
                                                    className="form-control"
                                                    onChange={ onSortByChange }
                                                    value={ query.sortBy ? query.sortBy : 'normal' }
                                                >
                                                    <option value="normal">Normal</option>
                                                    <option value="ordenDescendente">Más nuevas</option>
                                                    <option value="ordenAscendente">Más antiguas</option>
                                                    
                                                </select>
                                            </div>
                                        </div>
                                        <div className="toolbox-layout">
                                            <ALink
                                                href="/empresas/list"
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
                                                href="/empresas/2cols"
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
                                                href="/empresas/3cols"
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
                                                href="/empresas/4cols"
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

                                <ShopListOneEmpresas empresas={  empresas } perPage={ perPage } loading={ loading }></ShopListOneEmpresas>
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
                                    <ShopSidebarOneEmpresas toggle={ toggle }></ShopSidebarOneEmpresas>
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




export default Empresas ;

