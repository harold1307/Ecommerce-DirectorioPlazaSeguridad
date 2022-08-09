import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '../../../components/features/alink';
import { rendererOne } from "../../../components/features/count-down";



function ProductTwelve( props ) {
    const router = useRouter();
    const { producto, index } = props;


  


    return (
        <div className="product text-center">
   
            <div className="product-body">
                <div className="product-cat">
                    {
                     
                            <React.Fragment key={ index }>
                                <ALink href={ { pathname: '/productos/list', query: { category: producto.value } } }>
                                    { producto.name }
                                </ALink>
                               
                            </React.Fragment>
                      
                    }
                </div>


            

       
            </div>
        </div>
    )
}

const mapStateToProps = ( state ) => {
    return {
        wishlist: state.wishlist.data,
        comparelist: state.comparelist.data
    }
}

export default  ProductTwelve;