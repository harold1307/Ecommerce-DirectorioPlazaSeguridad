import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ALink from '~/components/features/alink';

function InfoOneEmpresa ( props ) {
    const { empresa } = props;

    if ( !empresa ) {
        return <div></div>
    }

    return (
        <Tabs selectedTabClassName="show" selectedTabPanelClassName="active show">
            <div className="product-details-tab">
                <TabList className="nav nav-pills justify-content-start">                    

                    <Tab className="nav-item">
                        <span className="nav-link"> Datos de contacto</span>
                    </Tab>

                    <Tab className="nav-item">
                        <span className="nav-link">Empresa Responsable</span>
                    </Tab>
              
                </TabList>

                <div className="tab-content py-5">
                   

                    <TabPanel className="tab-pane py-5">
                        <div className="product-desc-content">
                            <h2>Datos de Contacto</h2>                           
                            <p className="pl-1 h6">Nombre: <span>{empresa.contact_firstName}</span></p>                    
                            <p className="pl-1 h6">Apellido: <span>{empresa.contact_lastName}</span></p>   
                            <p className="pl-1 h6">Teléfono: <span>{empresa.contact_phone}</span></p>
                            <p className="pl-1 h6">Correo: <span>{empresa.contact_email}</span></p>  
                        </div>
                    </TabPanel>

                    <TabPanel className="tab-pane py-5">
                        <div className="product-desc-content">
                            <h2>Empresa Responsable</h2>
                            <p>We deliver to over 100 countries around the world. For full details of the delivery options we offer, please view our <ALink href="#">Delivery information</ALink><br />
                                We hope you’ll love every purchase, but if you ever need to return an item you can do so within a month of receipt. For full details of how to make a return, please view our <ALink href="#">Returns information</ALink></p>
                        </div>
                    </TabPanel>

                </div>
            </div>
        </Tabs>
    );
}

export default React.memo( InfoOneEmpresa );