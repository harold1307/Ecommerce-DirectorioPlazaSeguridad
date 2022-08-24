import { Magnifier, MOUSE_ACTIVATION } from 'react-image-magnifiers';
import React, { useState, useEffect } from 'react';
import LightBox from 'react-image-lightbox';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import countImage from '../../../../controladors/countProductImages'

function GalleryDefault ( props ) {
    const { producto, adClass = "product-gallery-vertical" } = props;
    const [ isOpen, setIsOpen ] = useState( false );
    const [ photoIndex, setPhotoIndex ] = useState( 0 );
    console.log(countImage(producto._id) )
    const imagenes=[
       `https://directorioseguridadgeneralpublic.s3.amazonaws.com/products/${producto._id}/thumbnail/1.jpg`,
       `https://directorioseguridadgeneralpublic.s3.amazonaws.com/products/${producto._id}/thumbnail/2.jpg`,
       `https://directorioseguridadgeneralpublic.s3.amazonaws.com/products/${producto._id}/thumbnail/3.jpg`,
       `https://directorioseguridadgeneralpublic.s3.amazonaws.com/products/${producto._id}/thumbnail/4.jpg`,
    ]

    useEffect( () => {
        if ( producto ) {
            setIsOpen( false );
            setPhotoIndex( 0 );
        }
    }, [ producto ] )

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

    if ( !producto ) {
        return <div></div>
    }

    return (
        <>
            <div className={ `product-gallery ${adClass}` }>
                <div className="row m-0">
                    <figure className="product-main-image overflow-hidden" index="0">
                        {
                            producto.new ?
                                <span className="product-label label-new">New</span>
                                : ""
                        }

                        {
                            producto.sale_price ?
                                <span className="product-label label-sale">Sale</span>
                                : ""
                        }

                        {
                            producto.top ?
                                <span className="product-label label-top">Top</span>
                                : ""
                        }

                        {
                            !producto.stockStatus || producto.stockStatus == 0 ?
                                <span className="product-label label-out">No disponible</span>
                                : ""
                        }
                     
                        <Magnifier
                            imageSrc={ producto.image.location }
                            imageAlt="product"
                            largeImageSrc={ producto.image.location } // Optional
                            dragToMove={ true }
                            //mouseActivation="hover"
                            cursorStyleActive="crosshair"
                            id="product-zoom"
                            className="zoom-image position-relative "
                            width= "792"
                            height= "800"
                            mouseActivation={MOUSE_ACTIVATION.DOUBLE_CLICK}                                   
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
                                        <LazyLoadImage src={  imagenes[ index ] } alt="product back" />
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