import React, { Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import { Breadcrumb, Layout, Menu ,  Col, Row } from 'antd';
const { Content, Header, Sider, Footer} = Layout;
import Image from 'next/image';
import { AppstoreOutlined, MailOutlined, FileAddOutlined, ClusterOutlined ,BankOutlined, NotificationOutlined, LineChartOutlined, SettingOutlined, PlusCircleOutlined,ShopOutlined, EditOutlined, DeleteOutlined, IdcardOutlined, MenuUnfoldOutlined   } from '@ant-design/icons';
import 'antd/dist/antd.css';
import HeaderAdmin from './header';
import Helmet from "react-helmet";
import ALink from '../components/features/alink';

const AdminLayoudTest = ({children}) => {
    const router = useRouter();
    const query = router.query;
    const [collapsed, setCollapsed] = useState(false);
    console.log(collapsed);


    function getItem(label, key, icon, children, type) {
        return {      
          key,
          icon,
          children,
          label,
          type
        };
    }
    const items = [
      getItem( 'Empresas', 'sub1', <BankOutlined style={{ fontSize: '18px', color: '#ffc107' }}  /> , [
        getItem( <ALink href={ { pathname: '/dashboard/empresa/crear' }} scroll={ false }>Crear Empresa</ALink>, '1', <FileAddOutlined style={{ fontSize: '18px', color: '#ffc107' }} />, ),
        getItem(<ALink href={ { pathname: '/dashboard/empresa/lista' }} scroll={ false }>Mis Empresa</ALink>, '2', <ClusterOutlined style={{ fontSize: '18px', color: '#ffc107' }}  />),
        
      ]),
      getItem('Productos', 'sub2', <ShopOutlined style={{ fontSize: '18px', color: '#ffc107' }}  />, [
        getItem( <ALink href={ { pathname: '/dashboard/producto/crear' }} scroll={ false }>Crear Producto</ALink>, '5', <FileAddOutlined style={{ fontSize: '18px', color: '#ffc107' }}  />, ),
        getItem( <ALink href={ { pathname: '/dashboard/producto/lista' }} scroll={ false }>Mis Productos</ALink>, '6', <ClusterOutlined style={{ fontSize: '18px', color: '#ffc107' }}  />, ),
        
      ]),
      getItem('Estadísticas de Usuario', 'sub3', <LineChartOutlined style={{ fontSize: '18px', color: '#ffc107' }}  />, [
        getItem( <ALink href={ { pathname: '/dashboard/estadisticas' }} scroll={ false }>Analítica</ALink>, '9', <FileAddOutlined style={{ fontSize: '18px', color: '#ffc107' }}  />, ),
        getItem('Anuncios', '10'),
        
      ]),
      getItem('Mis Anuncios', 'sub4', <NotificationOutlined style={{ fontSize: '18px', color: '#ffc107' }}  />, [ 
        getItem('Campañas', '11'),
        getItem('Option 12', '12'),
      ]),
    ];   
      
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
        <Row id="main-dashboard">
          <Col span={24}>
          <>     
              <Layout 
                  style={{
                  minHeight: '100vh',
                  }}
              >
                <Sider 
                        collapsible collapsed={collapsed} 
                        onCollapse={(value) => setCollapsed(value)}  
                        width={320}   
                        breakpoint="md"
                        onBreakpoint={broken => {
                        console.log(broken);
                        }}
                        >
                            
                    <div className="text-center m-5">
                        <ALink href="/dashboard">
                            <Image
                            src="/Logo-Directorio-de-Seguridad.png"
                            alt="Logo"
                            width= {200}
                            height={50}                 
                        />    
                        </ALink>
                    </div>                                                    
                    <Menu
                      theme='dark'                         
                      defaultOpenKeys={['sub1']}
                      selectedKeys={[0]}                
                      mode="inline"
                      items={items}
                    />
                </Sider>
                <Layout>
                    <HeaderAdmin />
                    <Content style={{
                      margin: '5%',}}
                      >
                        {children}
                    </Content>
                    <Footer>
                      <div className='text-center'>Desarrollado por</div>
                    </Footer>
                </Layout>
              </Layout>
          </>     
          </Col>           
        </Row>
      </Fragment>
    );
  };
  
  export default  AdminLayoudTest;