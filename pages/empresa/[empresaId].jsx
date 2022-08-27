import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch }  from "react-redux";
import PageHeader from '~/components/features/page-header';
import GalleryExtendedEmpresa from '~/components/partials/products/gallery/gallery-extended-empresa';
import DetailOneEmpresa from '~/components/partials/products/details/detail-one-empresa';
import InfoOneEmpresa from '~/components/partials/products/info-tabs/info-one-empresa';
import Layout from '~/components/layout';
import ALink  from '~/components/features/alink';
import ShopListOneEmpresa from '~/components/partials/shop/list/shop-list-one-empresa';

const ProductDefault = () => {
    const router = useRouter();
    const type = router.query.type;
    const dispatch = useDispatch();
    const [ perPage, setPerPage ] = useState( 5 );
    const  query = router.query;
    const  companiesState =  useSelector(state => state.companiesAll);
    const  productosState =  useSelector(state => state.productsAll);
    const  loadingEmpresa = companiesState.loading; 
    const  loadingProducto = productosState.loading; 
    var empresaFilt = companiesState.companias.filter( empresa => empresa._id ==String(query.empresaId));
    var empresa = empresaFilt[0] || [];
    var productosEmpresa = productosState.productos.filter( producto => producto.COMPANY._id ==String(query.empresaId));
    const totalCount = productosState.productos.length;
   
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

    return (
        <Layout>
        <div className="main">
            <PageHeader title={ empresa.name } subTitle={ 'Tienda Oficial'}  icon={'icon-star'} />
            <nav className="breadcrumb-nav">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <ALink href="/">Inicio</ALink>
                        </li>
                        <li className="breadcrumb-item">
                            <ALink href="/productos/todos">Empresa</ALink>
                        </li>
                        <li className="breadcrumb-item active">{ 
                            loadingEmpresa?
                               empresa.name 
                               :
                               'Loading...'
                         }</li>
                    </ol>
                </div>
            </nav>            
            <div className="page-content mt-5 container">
                    <div className="container skeleton-body">
                        <div className="product-details-top">
                            <div className={ `row skel-pro-single ${!loadingEmpresa? '' : 'loaded'}` }>
                                <div className="col-md-4 pr-md-5 ">
                                    
                                        {
                                            loadingEmpresa?
                                                <GalleryExtendedEmpresa empresa = { empresa }  loadingEmpresa = { loadingEmpresa } />
                                                : 
                                                <div className="skel-product-gallery"></div>
                                        }
                                    <div className="entry-summary row">
                                        <div className="col-md-12">
                                            <div className="entry-summary1 mt-2 mt-md-0"></div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="entry-summary2"></div>
                                        </div>
                                    </div>
                                    {
                                        loadingEmpresa?
                                            <DetailOneEmpresa empresa  = { empresa   } />
                                            : ''
                                    }
                                    {
                                        loadingEmpresa?
                                            <InfoOneEmpresa empresa  ={ empresa  } />                                
                                                :
                                            <div className="skel-pro-tabs"></div>                               
                                    }  
                                </div>
                                <div className="col-md-8">
                                    <div className="toolbox">
                                        <div className="toolbox-left">
                                            {
                                                productosEmpresa ?
                                                    <div className="toolbox-info">
                                                        Mostrando
                                                        <span> { productosEmpresa.length } de { totalCount }</span> Productos
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
                                                        <option value="ordenDescendente">Precio descendente</option>
                                                        <option value="ordenAscendente">Precio ascendente</option>
                                                        
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="toolbox-layout">
                                                <ALink
                                                    href={`/empresa/${empresa._id}?typeCol=list`}
                                                    className={ `btn-layout ${ query.typeCol  == 'list' ? 'active' : '' }` }
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
                                                    href={`/empresa/${empresa._id}?typeCol=2cols`}
                                                    className={ `btn-layout ${ query.typeCol  == '2cols' ? 'active' : '' }` }
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
                                                    href={`/empresa/${empresa._id}?typeCol=3cols`}
                                                    className={ `btn-layout ${ query.typeCol  == '3cols' ? 'active' : '' }` }
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
                                                     href={`/empresa/${empresa._id}?typeCol=4cols`}
                                                    className={ `btn-layout ${ query.typeCol  == '4cols' ? 'active' : '' }` }
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
                                    
                                    {
                                    loadingEmpresa?
                                        <ShopListOneEmpresa productosEmpresa = { productosEmpresa  } perPage ={ perPage } loadingProducto = { loadingProducto }></ShopListOneEmpresa>
                                    :
                                    ''
                                    }
                                </div>
                            </div>
                        </div>
                                                            
                    </div>
            </div>
        </div>
    </Layout>
    )
}

export default React.memo(ProductDefault);
