import React , { useState,useEffect } from 'react';
import Image from 'next/image';
import { AppstoreOutlined, MailOutlined, FileAddOutlined, ClusterOutlined ,BankOutlined, NotificationOutlined, LineChartOutlined, SettingOutlined, PlusCircleOutlined,ShopOutlined, EditOutlined, DeleteOutlined, IdcardOutlined, MenuUnfoldOutlined   } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
import ALink from '../../components/features/alink';



function SidebarAdmin() {
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

  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
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

    </>
  )
}

export default SidebarAdmin;