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
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    Router.events.on('routeChangeStart', ()=>{setLoading(true)});
    Router.events.on('routeChangeComplete', ()=>{setLoading(false)});
    
    return () => {
      Router.events.off('routeChangeStart', ()=>{setLoading(true)});
      Router.events.off('routeChangeComplete', ()=>{setLoading(false)});
      console.log('loading', loading);
    }
  }, [loading])
  
  
    return (
      <Fragment>       
                <Helmet>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta charset="utf-8" />
                    <meta name="keywords" content="" />
                    <meta name="description" content=""/>
                    <meta name="author" content="" />
                    <meta name="apple-mobile-web-app-title" content="Molla" />
                    <meta name="application-name" content="Directorio Plaza eguridas" />
                    <meta name="msapplication-TileColor" content="#cc9966" />
                    <meta name="msapplication-config" content="images/icons/browserconfig.xml" />
                    <meta name="theme-color" content="#cc9966" />
                    <title>Directorio Plaza Seguridad</title>
                    <link rel="apple-touch-icon" sizes="180x180" href="images/icons/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="images/icons/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="images/icons/favicon-16x16.png" />
                    <link rel="mask-icon" href="images/icons/safari-pinned-tab.svg" color="#666666" />
                    <link rel="shortcut icon" type="image/x-icon" href="https://cdndirectorio.s3.amazonaws.com/assets/images/favicon.svg"></link>
                </Helmet>
                <Provider store={store}>                 
                   <PersistGate persistor={persistor}>            
                        <Component {...pageProps} />
                   </PersistGate>  
                </Provider>
      </Fragment>  
    )
};

export default  WrappedApp;