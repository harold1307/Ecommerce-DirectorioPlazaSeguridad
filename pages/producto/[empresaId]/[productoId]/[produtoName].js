import { useState } from 'react'
import { useRouter } from 'next/router';
import { useSelector }  from "react-redux";
import GalleryDefault from '~/components/partials/products/gallery/gallery-default';
import DetailOne from '~/components/partials/products/details/detail-one';
import InfoOne from '~/components/partials/products/info-tabs/info-one';
import RelatedProductsOne from '~/components/partials/products/related/related-one';
import Layout from '~/components/layout';
import ALink  from '~/components/features/alink'

function ProductDefault () {
    const slug = useRouter().query.slug;
    console.log('Slug:',slug)
 
    const query = useRouter().query;
    console.log(query)

    const  productosState =  useSelector(state => state.productsAll);
    const  productosloading = productosState.loading;
    console.log('carga de producto', productosloading? 'exito' : productosState.error)
    console.log('=>',query); 
    console.log('=>=>',productosState );
    const producto = productosState.productos.filter( producto => producto._id==query.productoId);
    return (
        <Layout>
            <div className="main">
            <nav className="breadcrumb-nav">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <ALink href="/">Inicio</ALink>
                        </li>
                        <li className="breadcrumb-item">
                            <ALink href="/shop/directorios/todos">Directorio</ALink>
                        </li>
                        <li className="breadcrumb-item active">{producto.category}</li>
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
                                        productosloading ?
                                            <GalleryDefault product={ producto } />
                                            : "GalleryDefault"
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
                                        productosloading ?
                                            <DetailOne product={ producto } />
                                            : "DetailOne"
                                    }
                                </div>
                            </div>
                        </div>

                        {
                            !productosloading ?
                                <div className="skel-pro-tabs"></div>
                                :
                                <InfoOne product={ producto } />
                        }
                        {
                            productosloading ?
                            <RelatedProductsOne products={ [] } loading={ true } />
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