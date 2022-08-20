import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script'
export default class MyDocument extends Document {
    render () {
        return (
            <Html lang="es">           
                <Head>    
                    <link rel="preconnect" href="https://fonts.gstatic.com" />               
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700%7CPoppins:300,400,500,600,700" />
                    <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet"></link>
                    <link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css" />
                    <link rel="stylesheet" type="text/css" href="/css/fonts-molla.min.css" />
                    <link rel="stylesheet" type="text/css" href="/vendor/line-awesome/css/line-awesome.min.css" />                              
                </Head>
                <body>                     
                    <Main />
               
                    <Script src="/js/jquery.min.js"  strategy="beforeInteractive" />                 
                    <NextScript />
                </body>
            </Html>
        )
    }
}