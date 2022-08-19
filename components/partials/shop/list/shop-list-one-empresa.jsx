import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

import ProductNineEmpresa from '~/components/features/products/product-nine-empresa';
import ProductElevenEmpresa from '~/components/features/products/product-eleven-empresa';

function ShopListOneEmpresa ( props ) {
    const { productosEmpresa,  perPage,  loadingProducto } = props;
    const router = useRouter();
    const [ fakeArray, setFakeArray ] = useState( [] );
    const [ gridClass, setGridClass ] = useState( 'col-6' );
    const type = router.query.type;
    const query = router.query;

    useEffect( () => {
        let temp = [];
        for ( let i = 0; i < perPage; i++ ) {
            temp.push( i );
        }
        setFakeArray( temp );
    }, [ perPage ] )

    useEffect( () => {
        if ( query.typeCol === 'todos' ) setGridClass( 'col-6 col-md-3 col-lg-4' );
        if ( query.typeCol === 'list' || query.typeCol === '2cols' ) setGridClass( 'col-6' );
        if ( query.typeCol === '3cols' ) setGridClass( 'col-6 col-md-4 col-lg-4' );
        if ( query.typeCol=== '4cols' )
            setGridClass( 'col-6 col-md-4 col-lg-4 col-xl-3' );
    }, [ query] )

    return (
        <div className="products mb-3">
            {
                ( productosEmpresa.length == 0 && !loadingProducto ) ?
                    <p
                        className="no-results"
                    >No hay productos aun.</p>
                    :
                    <>
                        {
                            query.typeCol == 'list' ?
                            !loadingProducto  ?
                                    fakeArray.map( ( item, index ) => (
                                        <div className="skel-pro skel-pro-list" key={ index }></div>
                                    ) )
                                    :
                                    productosEmpresa.map( ( producto , index ) => (
                                        <ProductNineEmpresa
                                            producto = { producto }
                                            key={ index }
                                        />
                                    ) )
                                :
                                <div className="row">
                                    {
                                        !productosEmpresa ?
                                            fakeArray.map( ( item, index ) => (
                                                <div className={ gridClass } key={ index }>
                                                    <div className="skel-pro"></div>
                                                </div>
                                            ) )
                                            :
                                            productosEmpresa.map( ( producto, index ) => (
                                                <div className={ gridClass } key={ index }>
                                                    <ProductElevenEmpresa 
                                                        producto = { producto } 
                                                        key={ index }
                                                    />
                                                </div>
                                            ) )
                                    }
                                </div>
                        }
                    </>
            }
        </div>
    )
}

export default React.memo( ShopListOneEmpresa );