import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { useRouter } from 'next/router'
import ALink from '../alink';

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(00,00,00,0.7)',        
        zIndex: '9000'
    }
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
            <a href="#" onClick={ openModal }><i className="icon-user"></i>Ingresar</a>
            {
                open ?
                    <Modal
                        isOpen={ open }
                        style={ customStyles }
                        contentLabel="login Modal"
                        className="modal-dialog"
                        overlayClassName="d-flex align-items-center justify-content-center"
                        id="login-modal"
                        onRequestClose={ closeModal }
                        closeTimeoutMS={ 10 }
                    >
                        <div className="modal-content  p-3">
                        <div className="modal-header">
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-12 text-center h4'> 
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
                                                <div className="col-md-4">
                                                   <img className='img-fluid' src={producto.COMPANY.logo} alt="..." />
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <h5 className="card-title">Datos de contacto</h5>
                                                        <div className='name'>
                                                                  <span className='text-bold'>Nombre completo: </span>
                                                                  <span>{producto.COMPANY.contact_firstName} </span>    
                                                                  <span>{producto.COMPANY.contact_lastName} </span>       
                                                        </div>
                                                    </div>
                                                </div>
                                             </div>
                                        </div>

                                    </div>                                
                            </div>
                            <div className="modal-footer">
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-12 text-center h6 pt-2 text-center'> 
                                        Footer
                                    </div>

                                </div>
                            </div>  
                            </div>
                        </div>
                    </Modal>
                    : ''
            }
        </div>
    )
}

export default CompanyModal;