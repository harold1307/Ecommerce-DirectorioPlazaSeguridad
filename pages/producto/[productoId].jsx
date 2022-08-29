import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import { useDispatch, useSelector }  from "react-redux";
import GalleryDefault from '~/components/partials/products/gallery/gallery-default';
import DetailOne from '~/components/partials/products/details/detail-one';
import InfoOne from '~/components/partials/products/info-tabs/info-one';
import RelatedProductsOne from '~/components/partials/products/related/related-one';
import Layout from '~/components/layout';
import ALink  from '~/components/features/alink';
import Helmet from "react-helmet";
import { cargarProductoId } from "../../store/actions/productoIdActionGet";

const ProductDefault = () => {    
    const router = useRouter(); 
    const dispatch = useDispatch();
    const  query = router.query;
    const  Id = query.productoId;
    console.log(Id );
        
    useEffect(() => {   
        if(Id){  
          dispatch( cargarProductoId(Id));    
        }          
    }, [ dispatch]);     

    const  productoId =  useSelector(state => state.productoIdGet);
    const  productosState =  useSelector(state => state.productsAll);
    var producto = productoId.producto;
    
    return (
        <Layout>
           {
            productoId.loading?
                <Helmet>                
                        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                        <meta charset="utf-8" />
                        <title>{`${producto.name} | ${producto.COMPANY.name}`}</title>
                        <meta name="keywords" content= { `${producto.brand}`} />
                        <meta name="description" content=  { `${producto.shortDescription}`}  />
                        <meta name="author" content=  { `Directorio  | ${producto.COMPANY.name}` }/>
                        <meta name="apple-mobile-web-app-title" content= { `${producto.name}`} />
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
                                <div className={ `row skel-pro-single ${!productoId.loading? '' : 'loaded'}` }>
                                    <div className="col-md-6">
                                        <div className="skel-product-gallery"></div>
                                        {
                                            productoId.loading?
                                                <GalleryDefault producto = { producto } />
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
                                            productoId.loading?
                                                <DetailOne producto={ producto  } />
                                                : ''
                                        }
                                    </div>
                                </div>
                            </div>
                            {
                                productoId.loading ?
                                    <InfoOne producto ={ producto} />                                
                                        :
                                    <div className="skel-pro-tabs"></div>                               
                            }
                            {
                                productoId.loading ?
                                    <RelatedProductsOne productos = { productosState.productos }  empresaId = { producto.COMPANY._id } loading ={ productosState.loading } />
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