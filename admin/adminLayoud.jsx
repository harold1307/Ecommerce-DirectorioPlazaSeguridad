
import { useRouter } from 'next/router';
import { Breadcrumb, Layout, Menu ,  Col, Row } from 'antd';
import 'antd/dist/antd.css';
import React, { useState } from 'react';
const { Header, Content, Footer} = Layout;
import SidebarAdmin from './sidebar';
import HeaderAdmin from './header';
import ALink from '../components/features/alink';

const AdminLayoud = ({children}) => {
   const router = useRouter();
    const query = router.query;
    console.log(router)
    return (
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
                            <Breadcrumb.Item>Administrador</Breadcrumb.Item>
                            <Breadcrumb.Item></Breadcrumb.Item>
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
    );
  };
  
  export default  AdminLayoud;