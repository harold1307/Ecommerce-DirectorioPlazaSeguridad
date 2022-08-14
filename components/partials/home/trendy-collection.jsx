import {Fragment } from 'react';
import { Tab, Tabs, TabPanel, TabList } from 'react-tabs';
import OwlCarousel from '../../../components/features/owl-carousel';
import ProductTwelve from '../../../components/features/products/product-twelve';
import { useSelector }  from "react-redux";
import ALink from '../../features/alink';

import { catFilter } from '../../../utils';
import { productSlider, slideTapProducts  } from '../../../utils/data';


function TrendyCollection( props ) {
    const { products = [], loading } = props;
    const categoriasDestacada=[];

    const  categoriasState =  useSelector(state => state.categoriesAll);
    const  productosState =  useSelector(state => state.productsAll);
    const  categoriasDestacadas = categoriasState.categorias.slice(0 , 5)
    console.log( productosState.productos);
    
    return (
        <Tabs defaultIndex={ 0 } selectedTabClassName="show" >
        <div className="bg-lighter trending-products trendy">
            <div className="heading heading-flex mb-3">
                <div className="heading-left">
                    <h2 className="title">Producto Destacados</h2>
                </div>

                <div className="heading-right">
                    <TabList className="nav nav-pills justify-content-center">
                    {
                        categoriasDestacadas.map((categoria, index)=>{
                            return(
                                <Tab className="nav-item" key={index}>
                                     <span className="nav-link"><small>{categoria.name}</small></span>
                                </Tab>
                            )
                        })
                        
                    }
                    
                    </TabList>
                </div>
            </div>
            <div className="tab-content tab-content-carousel">
                {
                    categoriasDestacadas.map((categoria, index)=>{
                        return(
                            <TabPanel key={index}>
                                {
                                 true?
                                    <OwlCarousel adClass="owl-simple carousel-equal-height carousel-with-shadow" options={ productSlider }>
                                             {
                                                productosState.productos.map((producto, index)=>{
                                                    return(
                                                       
                                                        <div className="skel-pro" key={ index }>{ producto.name }</div>
                                                        
                                                    )
                                                })
                                            }
                                        </OwlCarousel>
                                    :
                                        <OwlCarousel adClass="owl-simple carousel-equal-height carousel-with-shadow" options={ productSlider }>
                                            {
                                                [ 1, 2, 3, 4, 5, 6 ].map( ( item, index ) =>
                                                    <div className="skel-pro" key={ index }></div>
                                                )
                                            }
                                        </OwlCarousel>                            
                                }
                            </TabPanel>                          
                        )
                    })
                }
            </div>
        </div>
    </Tabs>
    )
}

export default TrendyCollection;
