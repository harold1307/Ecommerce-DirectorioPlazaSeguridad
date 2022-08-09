import React , { useState } from 'react';
import Image from 'next/image';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
const {  Header } = Layout;
import ALink from '../../components/features/alink';




function HeaderAdmin() {    
const [openKeys, setOpenKeys] = useState(['sub1']);

 return (  
  <Layout>
    <Header>
      <div className="container">
          <div className="row">
              <div className="col-md-8 py-3 align-self-center">
                  <h3 className="text-center">Panel Administrador</h3>
              </div>
              <div className="col-md-4 d-flex align-content-end">
                  <div className="avatar">
                        <div className="">
                              <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
                                <Menu.Item key="mail" icon={<MailOutlined />}>
                                  Navigation One
                                </Menu.Item>
                                <Menu.SubMenu key="SubMenu" title="Navigation Two - Submenu" icon={<SettingOutlined />}>
                                  <Menu.Item key="two" icon={<AppstoreOutlined />}>
                                    Navigation Two
                                  </Menu.Item>
                                  <Menu.Item key="three" icon={<AppstoreOutlined />}>
                                    Navigation Three
                                  </Menu.Item>
                                  <Menu.ItemGroup title="Item Group">
                                    <Menu.Item key="four" icon={<AppstoreOutlined />}>
                                      Navigation Four
                                    </Menu.Item>
                                    <Menu.Item key="five" icon={<AppstoreOutlined />}>
                                      Navigation Five
                                    </Menu.Item>
                                  </Menu.ItemGroup>
                                </Menu.SubMenu>
                              </Menu>
                        </div>


                        
                  </div>
              </div>

          </div>
      </div>
    </Header>
    </Layout>
  )
}

export default HeaderAdmin;