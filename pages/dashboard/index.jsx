import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import React, { useState } from 'react';
const { Header, Content, Footer, Sider } = Layout;
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import  CrearEmpresa from './empresa/crearEmpresa'

function getItem(label, key, icon, children, link) {
  return {
    key,
    icon,
    children,
    label,
    link
  };
}






const editar = ()=>{
    return <editarProducto />
}

const items = [
  getItem(<a href="/dashboard">Option 1</a>, '1', <PieChartOutlined /> ),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('Productos', 'sub1', <UserOutlined />, [
    getItem('Crear' , '3', onClick => {editar} ),
    getItem('Editar', '4'),
    getItem('Borrar', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];




const App = () => {




    const variable = 1;
  const [collapsed, setCollapsed] = useState(false);
  return (


    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo text-light text-center"><img src="images/logo.png" /></div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            

         
         <div class="container">
            <div class="row">
                <div class="offset-md-2 col-md-8">
                  <CrearEmpresa />
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
          Design ©2022 Created by 
        </Footer>
      </Layout>
    </Layout>

  



  );
};

export default App;