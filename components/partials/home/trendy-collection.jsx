import {Fragment } from 'react';
import { Tab, Tabs, TabPanel, TabList } from 'react-tabs';
import OwlCarousel from '../../../components/features/owl-carousel';
import ProductTwelve from '../../../components/features/products/product-twelve';
import { useSelector }  from "react-redux";
import ALink from '../../features/alink';
import { catFiltrar } from '../../../utils';
import { productSlider, slideTapProducts  } from '../../../utils/data';


function TrendyCollection( props ) {
    const { products = [], loading } = props;

    const  categoriasState =  useSelector(state => state.categoriesAll);
    const  productosState =  useSelector(state => state.productsAll);
    const  categoriasDestacadas = categoriasState.categorias.slice(0,4)
     
    console.log( categoriasDestacadas);
    
    return (
        <Tabs defaultIndex={ 0 } selectedTabClassName="show" >
        <div className="bg-lighter trending-products trendy">
            <div className="heading heading-flex mb-3">
                <div className="heading-left">
                    <h2 className="title">Productos Nuevos</h2>
                </div>

                <div className="heading-right">
                    <TabList className="nav nav-pills justify-content-center">
                    {
                        categoriasDestacadas.map((categoria, index)=>{
                            return(
                                <Tab className="nav-item" key={index}>
                                <span className="nav-link">{categoria.name}</span>
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
                                                
                                            productosState.productos.slice(0,7).map( ( producto, index ) =>
                                                        <ProductTwelve
                                                           product ={ producto }
                                                           key={ index } 
                                                         />
                                                )
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
