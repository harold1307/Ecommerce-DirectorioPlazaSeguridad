import React , { useState } from 'react';
import Image from 'next/image';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
  import { Layout, Menu } from 'antd';
  const {  Header } = Layout;
  import ALink from '../../components/features/alink';


  function getItem(label, key,  children, type) {
    return {
      key,
      
      children,
      label,
      type,
    };
  }
  
  const items = [
    getItem('Perfil', 'sub1',  [
      getItem('Option 1', '1'),
      getItem('Option 2', '2'),
      getItem('Option 3', '3'),
      getItem('Option 4', '4'),
    ])
  ]; 
  
  const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];




function HeaderAdmin() {
    

 


      const [openKeys, setOpenKeys] = useState(['sub1']);

      const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
          setOpenKeys(keys);
        } else {
          setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
      };


  return (
  
<Header>


<div className="container">
    <div className="row">
        <div className="col-md-8">
                <h6>Panel Administrador</h6>
        </div>
        <div className="col-md-4">
          <div className="avatar">


          <div className="">
            <Menu
                mode="inline"
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                style={{
                    width: 256,
                }}
                items={items}
            />
        </div>


                
          </div>

        </div>

    </div>
</div>





</Header>

  )
}

export default HeaderAdmin;