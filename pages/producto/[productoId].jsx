import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import { useSelector }  from "react-redux";
import GalleryDefault from '~/components/partials/products/gallery/gallery-default';
import DetailOne from '~/components/partials/products/details/detail-one';
import InfoOne from '~/components/partials/products/info-tabs/info-one';
import RelatedProductsOne from '~/components/partials/products/related/related-one';
import Layout from '~/components/layout';
import ALink  from '~/components/features/alink';

import Helmet from "react-helmet";

const ProductDefault = () => {    
    const router = useRouter()
    const  query = router.query
    const  productosState =  useSelector(state => state.productsAll);   
    var producto = productosState.productos.filter( producto => producto._id ==String(query.productoId));
    const  productosloading = productosState.loading; 
  

    return (
        <Layout>
           {
            productosloading?
                <Helmet>                
                        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                        <meta charset="utf-8" />
                        <title>{`${producto[0].name} | ${producto[0].COMPANY.name}`}</title>
                        <meta name="keywords" content= { `${producto[0].brand}`} />
                        <meta name="description" content=  { `${producto[0].shortDescription}`}  />
                        <meta name="author" content=  { `Directorio  | ${producto[0].COMPANY.name}` }/>
                        <meta name="apple-mobile-web-app-title" content= { `${producto[0].name}`} />
                        <meta name="application-name" content="Directorio Plaza Seguridas" />
                        <meta name="msapplication-TileColor" content="#cc9966" />
                        <meta name="msapplication-config" content="images/icons/browserconfig.xml" />
                        <meta name="theme-color" content="#cc9966" />                    
                        <link rel="apple-touch-icon" sizes="180x180" href="images/icons/apple-touch-icon.png" />
                        <link rel="icon" type="image/png" sizes="32x32" href="images/icons/favicon-32x32.png" />
                        <link rel="icon" type="image/png" sizes="16x16" href="images/icons/favicon-16x16.png" />
                        <link rel="mask-icon" href="images/icons/safari-pinned-tab.svg" color="#666666" />
                        <link rel="shortcut icon" type="image/x-icon" href="https://cdndirectorio.s3.amazonaws.com/assets/images/favicon.svg"></link>
                </Helmet>
                :
                ''
           }
            <div className="main">
                <nav className="breadcrumb-nav">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <ALink href="/">Inicio</ALink>
                            </li>
                            <li className="breadcrumb-item">
                                <ALink href="/productos/todos">producto</ALink>
                            </li>
                            <li className="breadcrumb-item active">{producto.name }</li>
                        </ol>
                    </div>
                </nav>            
                <div className="page-content mt-5">
                        <div className="container skeleton-body">
                            <div className="product-details-top">
                                <div className={ `row skel-pro-single ${!productosloading? '' : 'loaded'}` }>
                                    <div className="col-md-6">
                                        <div className="skel-product-gallery"></div>
                                        {
                                            producto.length>0 ?
                                                <GalleryDefault producto = { producto[0] } />
                                                : ''
                                        }
                                    </div>
                                    <div className="col-md-6">
                                        <div className="entry-summary row">
                                            <div className="col-md-12">
                                                <div className="entry-summary1 mt-2 mt-md-0"></div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="entry-summary2"></div>
                                            </div>
                                        </div>
                                        {
                                            producto.length>0 ?
                                                <DetailOne producto={ producto[0]  } />
                                                : ''
                                        }
                                    </div>
                                </div>
                            </div>
                            {
                                producto.length>0 ?
                                    <InfoOne producto ={ producto[0] } />                                
                                        :
                                    <div className="skel-pro-tabs"></div>                               
                            }
                            {
                                producto.length>0 ?
                                    <RelatedProductsOne productos = { productosState.productos }  productoId = { producto._id } loading ={ productosState.loading } />
                                    :
                                ""
                            }                     
                        </div>
                </div>
            </div>
        </Layout>     
    )
}

export default ProductDefault;