import React from 'react';
import { Magnifier } from 'react-image-magnifiers';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function GalleryExtendedEmpresa ( props ) {
    const { empresa, loadingEmpresa } = props;

    if ( !empresa) {
        return <div></div>
    }

    return (
        <div className="product-lg position-relative w-75">             
            <LazyLoadImage
                 alt="product"
                    src={`${ empresa.logo }` } 
                    threshold={ 500 }
                    effect="black and white"
                    wrapperClassName="product-image" 
                    width={300}        
                    height={300}                 
              
            />      
        </div>
    )
}

export default React.memo( GalleryExtendedEmpresa );