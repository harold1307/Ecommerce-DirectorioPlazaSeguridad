import { useState, useEffect, Fragment} from 'react'
import { Router } from 'next/router';
import Helmet from "react-helmet";
import { Provider } from 'react-redux';
import store from "../store/store";
import { persistor } from '../store/store';
import {PersistGate} from 'redux-persist/lib/integration/react';
import '../public/scss/plugins/owl-carousel/owl.carousel.scss';
import "../public/scss/style.scss";

const WrappedApp = ({ Component, pageProps }) => {
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    Router.events.on('routeChangeStart', ()=>{setLoading(false)});
    Router.events.on('routeChangeComplete', ()=>{setLoading(true)});    
    return () => {
      Router.events.off('routeChangeStart');
      Router.events.off('routeChangeComplete');     
    }
  });

    return (
      <Fragment>       
                <Helmet>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta charset="utf-8" />
                    <meta name="keywords" content="" />
                    <meta name="description" content=""/>
                    <meta name="author" content="Directorio Plaza eguridas" />
                    <meta name="apple-mobile-web-app-title" content="Directorio Plaza eguridas" />
                    <meta name="application-name" content="Directorio Plaza eguridas" />
                    <meta name="msapplication-TileColor" content="#cc9966" />
                    <meta name="theme-color" content="#cc9966" />
                    <title>Directorio Plaza Seguridad</title>
                    <link rel="apple-touch-icon" sizes="180x180" href="https://cdndirectorio.s3.amazonaws.com/assets/images/favicon.svg" />
                    <link rel="icon" type="image/png" sizes="32x32" href="https://cdndirectorio.s3.amazonaws.com/assets/images/favicon.svg" />
                    <link rel="icon" type="image/png" sizes="16x16" href="https://cdndirectorio.s3.amazonaws.com/assets/images/favicon.svg" />
                    <link rel="mask-icon" href="images/icons/safari-pinned-tab.svg" color="#666666" />
                    <link rel="shortcut icon" type="image/x-icon" href="https://cdndirectorio.s3.amazonaws.com/assets/images/favicon.svg"></link>
                </Helmet>
               {
              !loading?
                  <div className="preloader">                                 
                    <div  className="sk-circle">
                        <div  className="sk-circle-dot"></div>
                        <div  className="sk-circle-dot"></div>
                        <div  className="sk-circle-dot"></div>
                        <div  className="sk-circle-dot"></div>
                        <div  className="sk-circle-dot"></div>
                        <div  className="sk-circle-dot"></div>
                        <div  className="sk-circle-dot"></div>
                        <div  className="sk-circle-dot"></div>
                        <div  className="sk-circle-dot"></div>
                        <div  className="sk-circle-dot"></div>
                        <div  className="sk-circle-dot"></div>
                        <div  className="sk-circle-dot"></div>
                    </div>                                           
                  </div>
                  :
                  ''
               }                
                <Provider store={store}>                 
                   <PersistGate persistor={persistor}>            
                        <Component {...pageProps} />
                   </PersistGate>  
                </Provider>
      </Fragment>  
    )
};

export default  WrappedApp;