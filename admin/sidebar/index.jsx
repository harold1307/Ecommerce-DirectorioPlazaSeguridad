import React , { useState,useEffect } from 'react';
import Image from 'next/image';
import { AppstoreOutlined, MailOutlined, SettingOutlined, PlusCircleOutlined,ShopOutlined, EditOutlined, DeleteOutlined, IdcardOutlined, MenuUnfoldOutlined   } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
import ALink from '../../components/features/alink';
import { cargarCompaniasAll } from "../../store/actions/companiesAllAction";
import { useDispatch }  from "react-redux";

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
    getItem( 'Empresas', 'sub1', <IdcardOutlined style={{ fontSize: '18px', color: '#ffc107' }}  /> , [
      getItem( <ALink href={ { pathname: '/dashboard/empresa/crear' }} scroll={ false }>Crear Empresa</ALink>, '1', <PlusCircleOutlined style={{ fontSize: '18px', color: '#ffc107' }} />, ),
      getItem(<ALink href={ { pathname: '/dashboard/empresa/lista' }} scroll={ false }>Mis Empresa</ALink>, '2', <MenuUnfoldOutlined style={{ fontSize: '18px', color: '#ffc107' }}  />),
     
    ]),
    getItem('Productos', 'sub2', <ShopOutlined style={{ fontSize: '18px', color: '#ffc107' }}  />, [
      getItem( <ALink href={ { pathname: '/dashboard/producto/crear' }} scroll={ false }>Crear Producto</ALink>, '5', <PlusCircleOutlined style={{ fontSize: '18px', color: '#ffc107' }}  />, ),
      getItem( <ALink href={ { pathname: '/dashboard/producto/lista' }} scroll={ false }>Mis Productos</ALink>, '6', <MenuUnfoldOutlined style={{ fontSize: '18px', color: '#ffc107' }}  />, ),
      getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),
    getItem('Navigation Three', 'sub4', <SettingOutlined style={{ fontSize: '18px', color: '#ffc107' }}  />, [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
      getItem('Option 11', '11'),
      getItem('Option 12', '12'),
    ]),
  ];


function SidebarAdmin() {

  const dispatch = useDispatch();

    useEffect(() => {       
         dispatch( cargarCompaniasAll() );       
    }, [ dispatch])


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
                  src="/images/logo.png"
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