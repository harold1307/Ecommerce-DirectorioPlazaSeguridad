import { Magnifier, MOUSE_ACTIVATION } from 'react-image-magnifiers';
import React, { useState, useEffect } from 'react';
import LightBox from 'react-image-lightbox';

function GalleryDefault ( props ) {
    const { product, adClass = "product-gallery-vertical" } = props;
    const [ isOpen, setIsOpen ] = useState( false );
    const [ photoIndex, setPhotoIndex ] = useState( 0 );

    const imagenes=[
        '/images/products/product-1.jpg',
        '/images/products/product-2.jpg',
        '/images/products/product-3.jpg',
        '/images/products/product-4.jpg',
    ]

    useEffect( () => {
        if ( product ) {
            setIsOpen( false );
            setPhotoIndex( 0 );
        }
    }, [ product ] )

    function moveNextPhoto () {
        setPhotoIndex( ( photoIndex + 1 ) % imagenes.length );
    }

    function movePrevPhoto () {
        setPhotoIndex( ( photoIndex + imagenes.length - 1 ) % imagenes.length );
    }

    function openLightBox () {
        let index = parseInt( document.querySelector( ".product-main-image" ).getAttribute( "index" ) );

        if ( !index ) {
            index = 0;
        }
        setIsOpen( true );
        setPhotoIndex( index );
    }

    function closeLightBox () {
        setIsOpen( false );
    }

    function changeBgImage ( e, image, index ) {
        let imgs = document.querySelectorAll( '.product-main-image img' );
        for ( let i = 0; i < imgs.length; i++ ) {
            imgs[ i ].src = image;
        }

        document.querySelector( '.product-image-gallery .active' ).classList.remove( 'active' );

        document.querySelector( '.product-main-image' ).setAttribute( 'index', index );
        e.currentTarget.classList.add( 'active' );
    }

    if ( !product ) {
        return <div></div>
    }

    return (
        <>
            <div className={ `product-gallery ${adClass}` }>
                <div className="row m-0">
                    <figure className="product-main-image" index="0">
                        {
                            product.new ?
                                <span className="product-label label-new">New</span>
                                : ""
                        }

                        {
                            product.sale_price ?
                                <span className="product-label label-sale">Sale</span>
                                : ""
                        }

                        {
                            product.top ?
                                <span className="product-label label-top">Top</span>
                                : ""
                        }

                        {
                            !product.stock || product.stock == 0 ?
                                <span className="product-label label-out">Out of Stock</span>
                                : ""
                        }
                     
                        <Magnifier
                            imageSrc={ `${imagenes[0]}` }
                            imageAlt="product"
                            largeImageSrc={ '/images/products/product-1.jpg' } // Optional
                            dragToMove={ true }
                            mouseActivation="hover"
                            cursorStyleActive="crosshair"
                            id="product-zoom"
                            className="zoom-image position-relative "
                            width= "792"
                            height= "800"                                                
                            style={ { paddingTop: `${800 / 792 * 100}%` } }
                        />

                        <button id="btn-product-gallery" className="btn-product-gallery" onClick={ openLightBox }>
                            <i className="icon-arrows"></i>
                        </button>
                    </figure>

                    <div id="product-zoom-gallery" className="product-image-gallery">
                        {
                            imagenes.map( ( item, index ) =>
                                <button className={ `product-gallery-item ${0 === index ? 'active' : ''}` } key={ index } onClick={ e => changeBgImage( e, `${item}`, index ) }>
                                    <div className="img-wrapper h-100">
                                        <img src={  imagenes[ index ] } alt="product back" />
                                    </div>
                                </button>
                            )
                        }
                    </div>
                </div>
            </div>

            {
                isOpen ?
                    <LightBox
                        mainSrc={ imagenes[ photoIndex ] }
                        nextSrc={ imagenes[ ( photoIndex + 1 ) % imagenes.length ] }
                        prevSrc={ imagenes[ ( photoIndex + imagenes.length - 1 ) % imagenes.length ] }
                        onCloseRequest={ closeLightBox }
                        onMovePrevRequest={ moveNextPhoto }
                        onMoveNextRequest={ movePrevPhoto }
                        reactModalStyle={ {
                            overlay: {
                                zIndex: 1041
                            },
                        }                        
                        }
                        enableZoom={true}
                    />
                    : ''
            }
        </>
    )
}

export default React.memo( GalleryDefault );