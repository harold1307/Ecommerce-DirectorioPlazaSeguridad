import React , { useState } from 'react';
import Image from 'next/image';
import { AppstoreOutlined, MailOutlined, SettingOutlined, PlusCircleOutlined,ShopOutlined, EditOutlined, DeleteOutlined, IdcardOutlined   } from '@ant-design/icons';
  import { Layout, Menu } from 'antd';
  const { Sider } = Layout;
  import ALink from '../../components/features/alink';

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
    getItem( 'Empresas', 'sub1', <IdcardOutlined /> , [
      getItem( <ALink href={ { pathname: '/dashboard/empresa/crear' }} scroll={ false }>Crear Empresa</ALink>, '1', <PlusCircleOutlined />, ),
      getItem(<ALink href={ { pathname: '/dashboard/empresa/editar' }} scroll={ false }>Editar Empresa</ALink>, '2', <EditOutlined />),
      getItem(<ALink href={ { pathname: '/dashboard/empresa/borrar' }} scroll={ false }>Borrar Empresa</ALink>, '3', <DeleteOutlined />),
      getItem('Option 4', '4'),
    ]),
    getItem('Producto', 'sub2', <ShopOutlined />, [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),
    getItem('Navigation Three', 'sub4', <SettingOutlined />, [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
      getItem('Option 11', '11'),
      getItem('Option 12', '12'),
    ]),
  ];




function SidebarAdmin() {
    const [collapsed, setCollapsed] = useState(false);


  return (
    <>
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}  width={250} >
                 
          <Image
            src="/images/logo.png"
            alt="Logo"
            width= {200}
            height={50}
        />          
         
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