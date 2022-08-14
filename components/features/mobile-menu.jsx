import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SlideToggle from 'react-slide-toggle';
import { useSelector }  from "react-redux";
import ALink from '../features/alink';

const MobileMenu = () => {
    const router = useRouter();
    const [ searchTerm, setSearchTerm ] = useState( "" );
    const  categoriasState =  useSelector(state => state.categoriesAll);

    useEffect( () => {
        router.events.on( 'routeChangeComplete', hideMobileMenu );
    }, [] )

    function hideMobileMenu() {
        document.querySelector( 'body' ).classList.remove( 'mmenu-active' );
    }

    function onSearchChange( e ) {
        setSearchTerm( e.target.value );
    }

    function onSubmitSearchForm( e ) {
        e.preventDefault();
        router.push( {
            pathname: '/productos/list',
            query: {
                searchTerm: searchTerm,
                category: ""
            }
        } );
    }

    return (
        <div className="mobile-menu-container">
            <div className="mobile-menu-wrapper">
                <span className="mobile-menu-close" onClick={ hideMobileMenu }><i className="icon-close"></i></span>

                <form action="#" method="get" onSubmit={ onSubmitSearchForm } className="mobile-search">
                    <label htmlFor="mobile-search" className="sr-only">Buscar</label>
                    <input type="text" className="form-control" value={ searchTerm } onChange={ onSearchChange } name="mobile-search" id="mobile-search" placeholder="Buscar producto ..." required />
                    <button className="btn btn-primary" type="submit"><i className="icon-search"></i></button>
                </form>

                <Tabs defaultIndex={ 0 } selectedTabClassName="show">
                    <TabList className="nav nav-pills-mobile" role="tablist">
                        <Tab className="nav-item text-center">
                            <span className="nav-link">Menu</span>
                        </Tab>

                        <Tab className="nav-item text-center">
                            <span className="nav-link">Categorias</span>
                        </Tab>
                    </TabList>

                    <div className="tab-content">
                        <TabPanel>
                            <nav className="mobile-nav">
                                <ul className="mobile-menu">
                                    <SlideToggle collapsed={ true }>                                
                                        <li className="megamenu-container">                        
                                            <ALink href={ { pathname:  `/` } } className="sidebar-filter-clear" scroll={ false }>
                                                Inicio                                               
                                            </ALink>                           
                                        </li>                                      
                                    </SlideToggle>
                                    <SlideToggle collapsed={ true }>                                
                                        <li className="megamenu-container">                        
                                            <ALink href={ { pathname:  `/productos/todos` } } className="sidebar-filter-clear" scroll={ false }>
                                                productos                                             
                                            </ALink>                           
                                        </li>                                      
                                    </SlideToggle>
                                    <SlideToggle collapsed={ true }>                                
                                        <li className="megamenu-container">                        
                                            <ALink href={ { pathname:  `/empresas` } } className="sidebar-filter-clear" scroll={ false }>
                                                Empresas                                            
                                            </ALink>                           
                                        </li>                                      
                                    </SlideToggle>
                                    <SlideToggle collapsed={ true }>                                
                                        <li className="megamenu-container">                        
                                            <ALink href={ { pathname:  `/publicarme` } } className="sidebar-filter-clear" scroll={ false }>
                                                Publicarme                                           
                                            </ALink>                           
                                        </li>                                      
                                    </SlideToggle>                                   
                                    
                                </ul>
                            </nav>
                        </TabPanel>

                        <TabPanel>
                            <nav className="mobile-cats-nav">
                                <ul className="mobile-cats-menu">
                                     {                        
                                        categoriasState.loading?
                                            (                                    
                                                categoriasState.categorias.map((categoria, index)=>{
                                                    if(index<13){
                                                        return(
                                                            <li className="megamenu-container" key={ index }>
                        
                                                            <ALink href={ { pathname:  `/productos/todos`, query: {categoria: categoria.value     } } } className="sidebar-filter-clear" scroll={ false }>
                                                                <div className="row">       
                                                                    <div className='text-uppercase pl-3'>                                           
                                                                        <i className={'fa '+` ${categoria.icon}`} aria-hidden="true"></i> 
                                                                        {categoria.name}
                                                                    </div>  
                                                                </div>                                                        
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
                                            <ALink className="text-dark py-2 btn btn-primary text-center" href={ { pathname: '/categorias', query: { categoria:`todas`} } }>
                                            <small>Más categorías</small></ALink>                           
                                        </li>
                                    }
                                </ul>
                            </nav>
                        </TabPanel>
                    </div>
                </Tabs>


            </div>
            <div className="social-icons py-4">
                    <ALink href="https://www.facebook.com/DirectoriodeSeguridad" className="social-icon" title="Facebook"><i className="icon-facebook-f"></i></ALink>
                    <ALink href="https://twitter.com/DirdeSeguridad" className="social-icon" title="Twitter"><i className="icon-twitter"></i></ALink>
                    <ALink href="https://www.instagram.com/directoriodeseguridad/" className="social-icon" title="Instagram"><i className="icon-instagram"></i></ALink>
                    <ALink href="https://wa.me/50241975255" className="social-icon" title="whatsapp"><i className="icon-whatsapp"></i></ALink>
                </div>
        </div>


    )
}

export default MobileMenu;