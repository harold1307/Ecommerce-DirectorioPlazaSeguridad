import React, { useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import { useSelector }  from "react-redux";
import ALink from '../../../features/alink';

const CategoryMenu = () =>{
    const query = useRouter().query;
    const router = useRouter();  
    const  categoriasState =  useSelector(state => state.categoriesAll);
                 
     function toggleDropdown( e ) {
        e.preventDefault();

        if ( document.querySelector( '.category-dropdown .dropdown-menu' ).classList.contains( 'show' ) ) {
            document.querySelector( '.category-dropdown .dropdown-menu' ).classList.remove( 'show' );
        } else {
            document.querySelector( '.category-dropdown .dropdown-menu' ).classList.add( 'show' );
        }
    }
    
    useEffect( () => {
        document.querySelector( '.category-dropdown .dropdown-menu' ).classList.remove( 'show' )

        if ( router.pathname == '/' ) document.querySelector( '.category-dropdown .dropdown-menu' ).classList.add( 'show' );
    }, [ router.pathname ] )

    return (
        <div className="dropdown category-dropdown">
            <a href="#" className="dropdown-toggle" title="Browse Categories" onClick={ ( e ) => { toggleDropdown( e ); } }>
                Categorías
            </a>

            <div className="dropdown-menu">
                <nav className="side-nav">                 
                    <ul className="menu-vertical sf-arrows sf-js-enabled" style={ { touchAction: 'pan-y' } }>               
                        {                        
                            categoriasState.loading?
                                (                                    
                                    categoriasState.categorias.map((categoria, index)=>{
                                        if(index<12){
                                            return(
                                                <li className="megamenu-container" key={ index }>
             
                                                <ALink href={ { pathname:  `/productos/todos`, query: {categoria: categoria.value     } } } className="sidebar-filter-clear" scroll={ false }>                                           
                                                        <i className={'fa'+` ${categoria.icon}`+' color-primary ml-2 mr-1' } ></i>                                                    
                                                        <small className='text-uppercase'> {categoria.name}</small>                                          
                                                </ALink>                           
                                            </li>
                                            )                                            
                                        }                            
                                    })
                                )   
                                :
                                ""                                                      
                        }
                        {
                            !categoriasState.loading?
                                ""
                                :
                                <li className="megamenu-container">
                                    <ALink className="text-dark mt-1 py-2 btn btn-primary text-center" href={ { pathname: '/categorias', query: { categoria:`todas`} } }>
                                      Más Categorías
                                    </ALink>                           
                                </li>
                        }
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default CategoryMenu; 