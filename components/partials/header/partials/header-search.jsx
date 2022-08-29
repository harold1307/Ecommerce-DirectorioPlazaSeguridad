import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ALink from '../../../features/alink';
import { safeContent } from '../../../../utils/index';
import { useSelector}  from "react-redux";
import JsonSearch from 'search-array'

function HeaderSearch () {
    const router = useRouter( "" );
    const [ cat, setCat ] = useState( "todos" );
    const [ searchTerm, setSearchTerm ] = useState( "" );
    const [ products, setProducts ] = useState( [] );
    const [ searchProducts, { data } ] = useState( [] );
    const result = data && data.products.data;
    const [ timer, setTimer ] = useState( null );
    const  categoriasState =  useSelector(state => state.categoriesAll);
    const  productosState =  useSelector(state => state.productsAll);      

    useEffect( () => {
        document.querySelector( "body" ).addEventListener( 'click', closeSearchForm );
        return ( () => {
            document.querySelector( "body" ).removeEventListener( 'click', closeSearchForm );
        } )
    }, [] );
 
    useEffect( () => {
        document.querySelector( '.header-search.show-results' ) && document.querySelector( '.header-search.show-results' ).classList.remove( 'show-results' );
    }, [ router.pathname ] );

    function matchEmphasize ( name ) {
        let regExp = new RegExp( searchTerm, "i" );
        return name.replace(
            regExp,
            ( match ) => "<strong>" + match + "</strong>"
        );
    }
    function closeSearchForm ( e ) {
        document
            .querySelector( '.header .header-search' )
            .classList.remove( 'show' );
    }

    function onCatSelect ( e ) {
        setCat( e.target.value );
        console.log(cat)
    }

    function onSearchChange ( e ) {
        setSearchTerm( e.target.value );
    }

    function showSearchForm ( e ) {
        document.querySelector( '.header .header-search' ).classList.add( 'show' );
    }

    function onSubmitSearchForm ( e ) {
        e.preventDefault();
        router.push( {
            pathname: '/productos/list',
            query: {
                searchTerm: searchTerm,
                category: cat
            }
        } );
    }
    function goProductPage () {
        setSearchTerm( '' );
        setProducts( [] );
    }
    const searcherTerm = new JsonSearch(productosState.productos)

    return (
        <div className="header-search header-search-extended header-search-visible header-search-no-radius d-none d-lg-block">
            <button className="search-toggle"><i className="icon-search"></i></button>
            <form action="#" method="get" onSubmit={ onSubmitSearchForm } onChange={ showSearchForm }>
                <div className="header-search-wrapper search-wrapper-wide">
                    <div className="select-custom" onChange={ ( e ) => onCatSelect( e ) }>
                        <select id="cat" name="cat">
                            <option value='todos'>Categorias</option>
                                {                                          
                                    (                                        
                                        categoriasState.categorias.map((categoria, index)=>{
                                                if(index<13){
                                                    return(
                                                        <option key={index} value={`${categoria.value}`}>{categoria.name}</option>
                                                    )                                                
                                                }                                
                                        })
                                    )                                                                               
                                }                                              
                        </select>
                    </div>
                    <label htmlFor="q" className="sr-only" value={ searchTerm }
                        required>Search</label>
                    <input type="text" onChange={ onSearchChange } value={ searchTerm } className="form-control" name="q" placeholder="Buscar producto ..." required />
                    <button className="btn btn-primary" type="submit"><span className="sr-only">buscar</span><i className="icon-search"></i></button>
                </div>
                <div className="live-search-list" onClick={ goProductPage }>
                    {
                        ( productosState.productos.length > 0 && searchTerm.length > 2  ) ?
                          
                            <div className="autocomplete-suggestions">
                                {
                                    searchTerm.length > 2 &&  searcherTerm.query(searchTerm).map( ( producto, index ) => (
                                            
                                        (producto.category==cat || cat=='todos')?
                                            <ALink href={ `/producto/${producto._id}` } className="autocomplete-suggestion" key={ `search-result-${index}` }>
                                                <LazyLoadImage src={ producto.image.location } width={ 40 } height={ 40 } alt="product" />
                                                <div className="search-name" dangerouslySetInnerHTML={ safeContent( matchEmphasize( producto.name ) ) }></div>
                                                <span className="search-price">
                                                    {
                                                        producto.stockStatus == 0 ?
                                                            <div className="product-price mb-0">
                                                                <span className="out-price">${ producto.salePrice.toFixed( 2 )} - </span>
                                                                <span className="out-price"> ${ producto.regularPrice.toFixed( 2 ) }</span>    
                                                                                                                    
                                                            </div>
                                                            :
                                                        ''
                                                                    
                                                    }                                               
                                                </span></ALink>
                                            :
                                            'No encontrado..'
                                                                           
                                    ) )
                                }
                            </div>
                            : ""
                    }
                </div>
            </form>
        </div>
    );
}

export default  HeaderSearch;