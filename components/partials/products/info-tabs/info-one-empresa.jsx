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
                </TabList>

                <div className="tab-content py-5">
                   

                    <TabPanel className="tab-pane py-5">
                        <div className="product-desc-content">
                            <h2>Datos de Contacto</h2>                           
                            <p className="pl-1">Nombre: <span>{empresa.contact_firstName}</span></p>                    
                            <p className="pl-1">Apellido: <span>{empresa.contact_lastName}</span></p>   
                            <p className="pl-1">Teléfono: <span>{empresa.dial_code}</span> <span>{empresa.contact_phone}</span></p>                         
                            <p className="pl-1">Correo: <span>{empresa.contact_email}</span></p>  
                            <div className="pl-1">Ubicación:</div>  
                            <ul>
                                <li><span>País: {empresa.country}</span></li>
                                <li><span>Ciudad: {empresa.city}</span></li>
                                <li><span>Estado: {empresa.state}</span></li>
                            </ul>
                            <p>Inicio de actividad: {empresa.createdAt }</p>
                        </div>
                    </TabPanel>

                </div>
            </div>
        </Tabs>
    );
}

export default React.memo( InfoOneEmpresa );