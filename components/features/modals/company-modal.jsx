import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';
import { useRouter } from 'next/router';
import Image from 'next/image';
import ALink from '../alink';

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(00,00,00,0.7)',        
        zIndex: '9000'
    }
}
const formatofecha = (fecha)=>{
    var date = new Date(fecha);
    return date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
}

Modal.setAppElement( 'body' );

const CompanyModal = (props)  => {
    const {producto} = props;
    const router = useRouter();
    const [ open, setOpen ] = useState( false );
    let timer;    

    useEffect( () => {
        return () => {
            if ( timer ) clearTimeout( timer );
        }
    } );

    function closeModal () {
        document.getElementById( "login-modal" ).classList.remove( "ReactModal__Content--after-open" );

        if ( document.querySelector( ".ReactModal__Overlay" ) ) {
            document.querySelector( ".ReactModal__Overlay" ).style.opacity = '0';
        }

        timer = setTimeout( () => {
            setOpen( false );
        }, 350 );
    }

    function openModal ( e ) {
        e.preventDefault();
        setOpen( true );
    }

    return (
        <div className="login">
            <a href="#" onClick={ openModal }><i className="icon-user p-2"></i>Ver</a>
            {
                open ?
                    <Modal
                        isOpen={ open }
                        style={ customStyles }
                        contentLabel="login Modal"
                        className="modal-dialog modal-dialog__empresa"
                        overlayClassName="d-flex align-items-center justify-content-center"
                        id="login-modal"
                        onRequestClose={ closeModal }
                        closeTimeoutMS={ 10 }
                    >
                        <div className="modal-content">
                        <div className="modal-header">
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-12 text-center h4 title'> 
                                        {producto.COMPANY.name}
                                    </div>

                                </div>
                            </div>
                        </div>
                            <div className="modal-body">
                                <button type="button" className="close" onClick={ closeModal }>
                                    <span aria-hidden="true"><i className="icon-close"></i></span>
                                </button>

                                <div className='card-empresa'>
                                        <div className="card mb-3">
                                            <div className="row no-gutters">
                                                <div className="col-md-4 mt-3">
                                                   <Image className='img-fluid' src={producto.COMPANY.logo} width={350} height={350} layout='responsive' alt={ producto.COMPANY.mame}/>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body pt-3">
                                                        <h5 className="card-title pb-2 title-sm">Datos de contacto:</h5>
                                                        <div className="product-desc-content">
                                                            <div className="product-cat w-100 text-truncate">                                                                                    
                                                                    <p className="pl-1">Nombre: <span>{producto.COMPANY.contact_firstName}</span></p>  
                                                            </div>  
                                                            <div className="product-cat w-100 text-truncate">                         
                                                                    <p className="pl-1">Apellido: <span>{producto.COMPANY.contact_lastName}</span></p>  
                                                            </div>
                                                            <div className="product-cat w-100 text-truncate">         
                                                                    <p className="pl-1">Teléfono: <span>{producto.COMPANY.dial_code}</span> <span>{producto.COMPANY.contact_phone}</span></p> 
                                                            </div> 
                                                            <div className="product-cat w-100 text-truncate">                                 
                                                                    <p className="pl-1">Correo: <span>{producto.COMPANY.contact_email}</span></p>  
                                                            </div> 
                                                            <div className="product-cat w-100 text-truncate">   
                                                                <div className="pl-1">Ubicación:</div>  
                                                                <ul>
                                                                    <li><span>País: {producto.COMPANY.country}</span></li>
                                                                    <li><span>Ciudad: {producto.COMPANY.city}</span></li>
                                                                    <li><span>Estado: {producto.COMPANY.state}</span></li>
                                                                </ul>
                                                            </div>                            
                                                        </div>
                                                    </div>                                                    
                                                </div>
                                             </div>
                                        </div>

                                    </div>                                
                            </div>   
                            <div className='modal-footer'>
                                <div className='text-right'><small>Activa desde: { formatofecha(producto.updatedAt)}</small></div>
                            </div>                         
                        </div>
                    </Modal>
                    : ''
            }
        </div>
    )
}

export default CompanyModal;