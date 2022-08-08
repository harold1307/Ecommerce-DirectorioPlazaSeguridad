import React, { useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import { useSelector }  from "react-redux";
import ALink from '../../../features/alink';
import { cargarCategoriasAll } from "../../../../store/actions/categoriesAllAction";

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
                                    if(index<13){
                                        return(
                                            <li className="megamenu-container" key={ index }>
                                            <ALink id={`${categoria.value}`} className="sf-with-ul text-dark py-2" href={ { pathname: `/categorias/${categoria.value}`} }>
                                            <i className={'fa '+` ${categoria.icon}`} aria-hidden="true" ></i><small>{categoria.name}</small></ALink>                           
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
                                 <ALink className="text-dark py-2 btn btn-primary text-center" href={ { pathname: '/categorias', query: { categoria:`todas`} } }>
                                 <small>Más categorías</small></ALink>                           
                            </li>
                        }

                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default CategoryMenu; 