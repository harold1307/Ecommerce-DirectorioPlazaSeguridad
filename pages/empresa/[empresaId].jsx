import { useRouter } from 'next/router';
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

const Empresa = () => {
    const router = useRouter();
    const type = router.query.type;
    const query = router.query;
    const error="";
    const [ firstLoading, setFirstLoading ] = useState( false );
    const [ perPage, setPerPage ] = useState( 5 );
    const [ pageTitle, setPageTitle ] = useState( 'Todos' );
    const [ toggle, setToggle ] = useState( false );   
    const  companiesState =  useSelector(state => state.companiesAll);
    const  loading = companiesState.loading;
    var companiaFilt = companiesState.companias.filter(compania=> (compania._id== query.empresaId));
    var compania = [];
    var compania2 = companiaFilt[0];
    console.log('companiaFilt ',  compania2  )
 


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
                <PageHeader title={ 'Empresas'} subTitle={   `Compañia: ${ query.companiaId || ''} `} />
                <nav className="breadcrumb-nav mb-2">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <ALink href="/">Inicio</ALink>
                            </li>
                            <li className="breadcrumb-item">
                                <ALink href="/productos/todos">Empresa</ALink>
                            </li>                                                                                                                           
                             <li className="breadcrumb-item active">Todos</li>
                                 
                        </ol>
                    </div>
                </nav>

                <div className="page-content">
                    <div className="container">
                    <div className='row'>
                    <div className='col-md-3'>
                            <aside>
                            <div>
                                <img src = { compania.logo}  />
                            </div>
                            <div className='mt-4'></div>

        
                            </aside>
                    </div>
                    <div className='col-md-9'>
                            <main>
    gg
                            </main>
                    </div>
                    </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Empresa;