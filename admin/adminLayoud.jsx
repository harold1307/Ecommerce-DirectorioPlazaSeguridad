import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import { Breadcrumb, Layout, Menu ,  Col, Row } from 'antd';
const { Content, Footer} = Layout;
import 'antd/dist/antd.css';
import SidebarAdmin from './sidebar';
import HeaderAdmin from './header';
import Helmet from "react-helmet";

const AdminLayoud = ({children}) => {
   const router = useRouter();
    const query = router.query;
    return (
      <Fragment>
        <Helmet>                
              <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
              <meta charset="utf-8" />
              <title>Panel Administrador | Directorio Plaza Seguridas</title>
              <meta name="keywords" content= '' />
              <meta name="description" content=  'Adminstrador'  />
              <meta name="author" content= 'Directorio Plaza Seguridas' />
              <meta name="apple-mobile-web-app-title" content= 'Directorio Plaza Seguridas' />
              <meta name="application-name" content="Directorio Plaza Seguridas" />
              <meta name="msapplication-TileColor" content="#cc9966" />
              <meta name="msapplication-config" content="images/icons/browserconfig.xml" />
              <meta name="theme-color" content="#cc9966" />                    
              <link rel="apple-touch-icon" sizes="180x180" href="https://cdndirectorio.s3.amazonaws.com/assets/images/favicon.svg" />
              <link rel="icon" type="image/png" sizes="32x32" href="https://cdndirectorio.s3.amazonaws.com/assets/images/favicon.svg" />
              <link rel="icon" type="image/png" sizes="16x16" href="https://cdndirectorio.s3.amazonaws.com/assets/images/favicon.svg" />
              <link rel="mask-icon" href="images/icons/safari-pinned-tab.svg" color="#666666" />
              <link rel="shortcut icon" type="image/x-icon" href="https://cdndirectorio.s3.amazonaws.com/assets/images/favicon.svg"></link>
        </Helmet>
        <Row>
            <Col span={24}>
              <Layout
                style={{
                  minHeight: '100vh',
                }}
              >
                  <SidebarAdmin />
                  <Layout className="site-layout">        
                    <HeaderAdmin />
                    <Content style={{ margin: '0 30px' }} >

                      <Row>
                          <Col span={24}>
                            <Breadcrumb style={{ margin: '16px 0'}}>
                              <Breadcrumb.Item><strong>Ruta:</strong> {router.pathname}</Breadcrumb.Item>
                            </Breadcrumb>
                          </Col>
                      </Row>
                      <Row>
                        <Col span={24}>
                          <div className="site-layout-background">
                              {children}
                          </div>
                        </Col>
                    </Row>



                        
                    </Content>
                    <Footer style={{ textAlign: 'center'}} > ©2022 Diseñado por Harold Caraballo</Footer>
                  </Layout>
              </Layout>

            </Col>           
        </Row>
      </Fragment>
    );
  };
  
  export default  AdminLayoud;