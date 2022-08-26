import React, { useEffect, useState, useRef } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ALink from '~/components/features/alink';
import Card from '~/components/features/accordion/card';
import Accordion from '~/components/features/accordion/accordion';

function InfoOneEmpresa ( props ) {
    const { empresa } = props;
    useEffect(() => {
        var str = empresa.description;
        var tt = document.getElementById("descriction");
        tt.innerHTML = str;  
    }, [])
    if ( !empresa ) {
        return <div></div>
    }
    return (
        <Accordion adClass="accordion-rounded">               
                <Card title="Sobre la empresa" expanded="true" adClass="card-box card-sm bg-light">             
                    <div className='text-justify'>
                        <div id='descriction'></div>
                    </div>
                </Card>
                <Card title="Datos de contacto" adClass="card-box card-sm bg-light">
                    <div className="product-desc-content">
                        <div className="product-cat w-100 text-truncate">                         
                                <p className="pl-1">Nombre: <span>{empresa.contact_firstName}</span></p>  
                        </div>  
                        <div className="product-cat w-100 text-truncate">                         
                                <p className="pl-1">Apellido: <span>{empresa.contact_lastName}</span></p>  
                        </div>
                        <div className="product-cat w-100 text-truncate">         
                                <p className="pl-1">Teléfono: <span>{empresa.dial_code}</span> <span>{empresa.contact_phone}</span></p> 
                        </div> 
                        <div className="product-cat w-100 text-truncate">                                 
                                <p className="pl-1">Correo: <span>{empresa.contact_email}</span></p>  
                        </div> 
                        <div className="product-cat w-100 text-truncate">   
                            <div className="pl-1">Ubicación:</div>  
                            <ul>
                                <li><span>País: {empresa.country}</span></li>
                                <li><span>Ciudad: {empresa.city}</span></li>
                                <li><span>Estado: {empresa.state}</span></li>
                            </ul>
                        </div>                            
                    </div>
                </Card>
                <Card title="Datos de la empresa" adClass="card-box card-sm bg-light">
                        <div className="product-desc-content">
                            <p>Inicio de actividad: {empresa.createdAt }</p>
                            <div className="product-cat w-100 text-truncate">
                            <p className="pl-1">Sector de negocio: <span>{empresa.bussiness}</span></p>                                
                        </div>
                        <div className="product-cat w-100 text-truncate">
                            <p className="pl-1">Servicios: <span>{empresa.services}</span></p>                            
                        </div>
                        <div className="product-cat w-100 text-truncate">                             
                            <p className="pl-1">Productos: <span>{empresa.products}</span></p>                                  
                        </div>                                                
                    </div>
                </Card>
        </Accordion>      
    );
}

export default React.memo( InfoOneEmpresa );