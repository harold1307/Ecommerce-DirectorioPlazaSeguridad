import React from 'react';
import { Magnifier } from 'react-image-magnifiers';

function GalleryExtendedEmpresa ( props ) {
    const { empresa, loadingEmpresa } = props;

    if ( !empresa) {
        return <div></div>
    }

    return (
        <div className="product-lg position-relative">             
            <Magnifier
                imageSrc={ empresa.logo }
                imageAlt="logo"
                largeImageSrc={ empresa.logo } // Optional
                dragToMove={ false }
                mouseActivation="hover"
                cursorStyleActive="crosshair"                                    
              
            />              
        </div>
    )
}

export default React.memo( GalleryExtendedEmpresa );