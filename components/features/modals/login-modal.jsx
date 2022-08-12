import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { useForm } from 'react-hook-form';
import { useSelector }  from "react-redux";
import { useRouter } from 'next/router'
import ALink from '../alink';
import { useDispatch }  from "react-redux";
import { verificarUsuario } from "../../../store/actions/Auth";

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(00,00,00,0.7)',        
        zIndex: '9000'
    }
}

Modal.setAppElement( 'body' );
const LoginModal = ()  => {
    const router = useRouter()
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dataFormSesion = (sendDataForm) =>  {
           dispatch( verificarUsuario(sendDataForm));     
        };  

    const verifyUser =  useSelector(state => state.authReducer.dataUser);
    const [ open, setOpen ] = useState( false );
    let timer;    
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
      setPasswordShown(passwordShown ? false : true);
    };


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
            <a href="#" onClick={ openModal }>Iniciar Sesión</a>
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
                        <div className="modal-content">
                            <div className="modal-body">
                                <button type="button" className="close" onClick={ closeModal }>
                                    <span aria-hidden="true"><i className="icon-close"></i></span>
                                </button>
                                <div className="form-box">
                                    <div className="form-tab">
                                        <Tabs selectedTabClassName="show" defaultIndex={ 0 }>
                                        <TabList className="nav nav-pills nav-fill">
                                            <Tab className="nav-item">
                                                <span className="nav-link">Ingresar</span>
                                            </Tab>
                                        </TabList>
                                        <div className="tab-content">
                                            <TabPanel style={ { paddingTop: "2rem" } }>                                       
                                                <div>                                            
                                                    <form onSubmit={handleSubmit(dataFormSesion) }>
                                                        <div className="form-group">
                                                            <label htmlFor="singin-email-2">Correo electrónico *</label>
                                                            <input type="text" className="form-control" placeholder="" {...register("username", {required: true, pattern: /^\S+@\S+$/i})} />                       
                                                        </div>
                                                        <div className="form-group campo-password">
                                                            <label htmlFor="singin-password-2">Clave *</label>
                                                            <input type={passwordShown ? "text" : "password"} onClick={togglePasswordVisiblity} className="form-control"  placeholder="" {...register("password", {required: true, maxLength: 25})} />                                            
                                                            <i className="icon-eye" onClick={togglePasswordVisiblity}></i>
                                                        </div>
                                                        <div className="form-footer py-4 my-2">
                                                            <button type="submit" className="btn btn-outline-primary-2 btn-rounded">
                                                                <span>Acceder</span>
                                                                <i className="icon-long-arrow-right"></i>
                                                            </button>

                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="signin-remember-2" />
                                                                <label className="custom-control-label" htmlFor="signin-remember-2">Recordarme</label>
                                                            </div>
                                                            <ALink href="/pages/login" className="forgot-link">¿Recuperar clave?</ALink>
                                                        </div>
                                                    </form>    
                                                    <div className="form-choice">                                                
                                                        <div className="row">
                                                            <div className='col-12'>
                                                                    <p className="text-center pt-3">¿Aun no tiene una cuenta?</p>
                                                            </div>
                                                            <div className="col-12 bg-btn-ingreso">
                                                                <ALink href="/registro" className="btn  btn-primary btn-login btn-rounded btn-shadow btn-g my-3">
                                                                    <i className="icon-user"></i>
                                                                    Crear cuenta
                                                            </ALink>
                                                            </div>                                                        
                                                        </div>
                                                    </div>                                              
                                                </div>
                                            </TabPanel>
                                        </div>
                                        </Tabs>
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

export default LoginModal;