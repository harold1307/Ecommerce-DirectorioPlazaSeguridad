import React from 'react';
import { Magnifier } from 'react-image-magnifiers';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function GalleryExtendedEmpresa ( props ) {
    const { empresa, loadingEmpresa } = props;

    if ( !empresa) {
        return <div></div>
    }

    return (
        <div className="product-lg position-relative border border-lightp-4 rounded-top my-2"> 
            <div className='row justify-content-center'>    
                <div className='col-8 col-md-6 img pt-5 pb-1'>          
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
                <div className="product-details col-12 px-4 py-2">
                    <h1 className="product-title text-center mt-2">{  empresa.name }</h1>    
                    <div className="product-content mt-3">
                    </div>         
                </div>
            </div>    
        </div>
    )
}

export default React.memo( GalleryExtendedEmpresa );