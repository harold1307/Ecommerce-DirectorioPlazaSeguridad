import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ALink from '~/components/features/alink';

function InfoOne ( props ) {
    const { producto } = props;

    if ( !producto ) {
        return <div></div>
    }

    return (
        <Tabs selectedTabClassName="show" selectedTabPanelClassName="active show">
            <div className="product-details-tab">
                <TabList className="nav nav-pills justify-content-start">
                    <Tab className="nav-item">
                        <span className="nav-link"> Descripción</span>
                    </Tab>

                    <Tab className="nav-item">
                        <span className="nav-link"> Datos de contacto</span>
                    </Tab>

                    <Tab className="nav-item">
                        <span className="nav-link">Empresa Responsable</span>
                    </Tab>
              
                </TabList>

                <div className="tab-content">
                    <TabPanel className="tab-pane">
                        <div className="product-desc-content">
                            <h3>Información de Producto:</h3>
                            {producto.longDescription}
                        </div>
                    </TabPanel>

                    <TabPanel className="tab-pane">
                        <div className="product-desc-content">
                            <h3>Datos de Contacto</h3>                           
                            <p className="pt-2 pl-1 h6"><strong>Nombre: </strong><span>{producto.contact_firstName}</span></p>                    
                            <p className="pt-2 pl-1 h6"><strong>Apellido: </strong><span>{producto.contact_lastName}</span></p>   
                            <p className="pt-2 pl-1 h6"><strong>Teléfono: </strong><span>{producto.contact_phone}</span></p>
                            <p className="pt-2 pl-1 h6"><strong>Correo: </strong><span>{producto.contact_email}</span></p>  
                        </div>
                    </TabPanel>

                    <TabPanel className="tab-pane">
                        <div className="product-desc-content">
                            <h3>Empresa Responsable</h3>
                            <p>We deliver to over 100 countries around the world. For full details of the delivery options we offer, please view our <ALink href="#">Delivery information</ALink><br />
                                We hope you’ll love every purchase, but if you ever need to return an item you can do so within a month of receipt. For full details of how to make a return, please view our <ALink href="#">Returns information</ALink></p>
                        </div>
                    </TabPanel>

                </div>
            </div>
        </Tabs>
    );
}

export default React.memo( InfoOne );