import React, { useState,useEffect } from 'react';
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form';
import { useSelector }  from "react-redux";
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import ALink from '../components/features/alink';
import Layout from '../components/layout';
import { useDispatch }  from "react-redux";



const Registro = () => {
    const router = useRouter()
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dataFormSesion = (sendDataForm) =>  {
       dispatch( verificarUsuario(sendDataForm)); 
    };  

   
    return (
        <Layout>
            <div className="main">
                <nav className="breadcrumb-nav border-0 mb-0">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <ALink href="/">Inicio</ALink>
                            </li>
                            <li className="breadcrumb-item">
                                <ALink href="#">Pages</ALink>
                            </li>
                            <li className="breadcrumb-item active">Login</li>
                        </ol>
                    </div>
                </nav>

                <div className="login-page bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17" style={ { backgroundImage: `url(images/backgrounds/login-bg.jpg)` } }>
                    <div className="container">
                        <div className="form-box">
                            <div className="form-tab">
                                <Tabs selectedTabClassName="show" defaultIndex={ 0 }>
                                    <TabList className="nav nav-pills nav-fill">
                                  
                                        <Tab className="nav-item">
                                            <span className="nav-link">Registrarse</span>
                                        </Tab>
                                    </TabList>

                                    <div className="tab-content">
                                    
                                        <TabPanel style={ { paddingTop: "2rem" } }>
                                            <form action="#">
                                                <div className="form-group">
                                                    <label htmlFor="register-email-2">Your email address *</label>
                                                    <input type="email" className="form-control" id="register-email-2" name="register-email" required />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="register-password-2">Password *</label>
                                                    <input type="password" className="form-control" id="register-password-2" name="register-password" required />
                                                </div>

                                                <div className="form-footer">
                                                    <button type="submit" className="btn btn-outline-primary-2">
                                                        <span>SIGN UP</span>
                                                        <i className="icon-long-arrow-right"></i>
                                                    </button>

                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="register-policy-2" required />
                                                        <label className="custom-control-label" htmlFor="register-policy-2">I agree to the <ALink href="/pages/login/">privacy policy</ALink> *</label>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="form-choice">
                                                <p className="text-center">or sign in with</p>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <ALink href="/pages/login" className="btn btn-login btn-g">
                                                            <i className="icon-google"></i>
                                                            Login With Google
                                                        </ALink>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <ALink href="/pages/login" className="btn btn-login  btn-f">
                                                            <i className="icon-facebook-f"></i>
                                                            Login With Facebook
                                                        </ALink>
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

export default Registro;