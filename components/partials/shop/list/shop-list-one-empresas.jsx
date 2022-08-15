import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

import ProductNineEmpresas from '~/components/features/products/product-nine-empresas';
import ProductElevenEmpresas from '~/components/features/products/product-eleven-empresas';

function ShopListOneEmpresas ( props ) {
    const { loading, empresas , perPage } = props;
    const router = useRouter();
    const [ fakeArray, setFakeArray ] = useState( [] );
    const [ gridClass, setGridClass ] = useState( 'col-6' );
    const type = router.query.type;

    useEffect( () => {
        let temp = [];
        for ( let i = 0; i < perPage; i++ ) {
            temp.push( i );
        }
        setFakeArray( temp );
    }, [ perPage ] )

    useEffect( () => {
        if ( type === 'todos' ) setGridClass( 'col-2 col-md-3 col-lg-4' );
        if ( type === 'list' || type === '2cols' ) setGridClass( 'col-6' );
        if ( type === '3cols' ) setGridClass( 'col-6 col-md-4 col-lg-4' );
        if ( type === '4cols' )
            setGridClass( 'col-6 col-md-4 col-lg-4 col-xl-3' );
    }, [ type ] )

    return (
        <div className="products mb-3">
            {
                ( [empresas].length == 0 && !loading ) ?
                    <p
                        className="no-results"
                    >No hay empresas en esta categoría.</p>
                    :
                    <>
                        {
                            type == 'list' ?
                            !loading ?
                                    fakeArray.map( ( item, index ) => (
                                        <div className="skel-pro skel-pro-list" key={ index }></div>
                                    ) )
                                    :
                                    empresas.map( ( empresa , index ) => (
                                        <ProductNineEmpresas
                                            empresa = { empresa }
                                            key={ index }
                                        />
                                    ) )
                                :
                                <div className="row">
                                    {
                                        !loading ?
                                            fakeArray.map( ( item, index ) => (
                                                <div className={ gridClass } key={ index }>
                                                    <div className="skel-pro"></div>
                                                </div>
                                            ) )
                                            :
                                            empresas.map( ( empresa, index ) => (
                                                <div className={ gridClass } key={ index }>
                                                    <ProductElevenEmpresas empresa = { empresa } />
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

export default React.memo( ShopListOneEmpresas );