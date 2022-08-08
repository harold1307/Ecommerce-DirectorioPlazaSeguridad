
  import { useRouter } from 'next/router';
  import { Breadcrumb, Layout, Menu } from 'antd';
  import 'antd/dist/antd.css';
  import React, { useState } from 'react';
  const { Header, Content, Footer} = Layout;

  import SidebarAdmin from './sidebar';
  import HeaderAdmin from './header';

  import ALink from '../components/features/alink';
  
  
const AdminLayoud = ({children}) => {
  
    return (

      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <SidebarAdmin />


        <Layout className="site-layout">        
          <HeaderAdmin />
          <Content
            style={{
              margin: '0 0px',
            }}
          >

            <div className="site-layout-background">
              
            <Breadcrumb
              style={{
                margin: '16px 0',
              }}
            >
              <Breadcrumb.Item>Administrador</Breadcrumb.Item>
              <Breadcrumb.Item>query</Breadcrumb.Item>
            </Breadcrumb>
           
           <div className="container">
              <div className="row">
                  <div className="">
                        {children}
                  </div>
              </div>
           </div>
             
  
  
  
            </div>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
              }}
              >
            ©2022 Diseñado por Harold Caraballo 
          </Footer>
        </Layout>
      </Layout>
  
    );
  };
  
  export default  AdminLayoud;