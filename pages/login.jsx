import React, { useState,useEffect } from 'react';
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form';
import { useSelector }  from "react-redux";
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import ALink from '../components/features/alink';
import Layout from '../components/layout';
import { useDispatch }  from "react-redux";
import { verificarUsuario } from "../store/actions/Auth";


function Login () {
    const router = useRouter()   
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dataFormSesion = (sendDataForm) =>  {
       dispatch( verificarUsuario(sendDataForm));       
    };  
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
      setPasswordShown(passwordShown ? false : true);
    };

    useEffect(() => {
        document.addEventListener('DOMContentLoaded', function () {
          console.log("¡Estamos en vivo!" , 'cargando');
      
        });
      })
      

    const verifyUser =  useSelector(state => state.authReducer.dataUser);
    //verifyUser.success? router.push('/dashboard') : '';  
   
    return (
        <Layout>
            <div className="main">
                <nav className="breadcrumb-nav border-0 mb-0">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <ALink href="/">Inicio</ALink>
                            </li>                         
                            <li className="breadcrumb-item active">Inicio de sesión</li>
                        </ol>
                    </div>
                </nav>

                <div className="login-page bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17">
                    <div className="container">
                        <div className="form-box">
                            <div className="form-tab">
                                <Tabs selectedTabClassName="show" defaultIndex={ 0 }>
                                    <TabList className="nav nav-pills nav-fill">
                                        <Tab className="nav-item">
                                            <span className="nav-link">Iniciar sesión</span>
                                        </Tab>
                                    </TabList>

                                    <div className="tab-content">
                                        <TabPanel style={ { paddingTop: "2rem" } }>                             
                                            <div>                                          
                                                <form onSubmit={handleSubmit(dataFormSesion) }>
                                                    <div className="form-group">
                                                        <label htmlFor="singin-email-2">Correo electrónico *</label>
                                                        <input id="email" type="text" className="form-control" placeholder="" {...register("username", {required: true, pattern: { value: /\S+@\S+\.\S+/, message: "Verifique su correo." }  })} />                                                                                         
                                                    </div>
                                                    {errors.email && <span role="alert">{errors.email.message}</span>}
                                                   
                                                    <div className="form-group campo-password">
                                                        <label htmlFor="singin-password-2">Clave *</label>
                                                        <input type={passwordShown ? "text" : "password"} className="form-control"  placeholder="" {...register("password", {required: true, maxLength: 25})} />                                            
                                                        <i className={`icon-eye ${passwordShown ? "icon-eye-gris" : "icon-eye-yellow"}`} onClick={togglePasswordVisiblity}></i>
                                                    </div>

                                                    <div className="form-footer py-4 my-2">
                                                        <button type="submit" className="btn btn-outline-primary-2 btn-rounded">
                                                            <span>Acceder</span>
                                                            <i className="icon-long-arrow-right"></i>
                                                        </button>
                                                        <ALink href="" className="forgot-link">¿Olvido su clave?</ALink>
                                                    </div>
                                                </form>
                                                <div className="form-choice">                                                
                                                    <div className="row">
                                                        <div className="col-sm-12 bg-btn-ingreso">
                                                            <ALink href="/registro" className="btn  btn-primary btn-login btn-rounded btn-shadow btn-g my-3">
                                                                <i className="icon-cog"></i>
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
            </div>
        </Layout> 
    )
}

export default Login;