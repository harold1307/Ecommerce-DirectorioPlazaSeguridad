import { Menu } from 'antd';
import { AppstoreOutlined, SettingOutlined, InboxOutlined } from '@ant-design/icons';

const Header = () => (

    <Menu mode="horizontal" defaultSelectedKeys={['mail']} >
      <Menu.Item key="mail" icon={<InboxOutlined />}>
        Mis Anuncios
      </Menu.Item>
      <Menu.SubMenu key="SubMenu" title="Administrador" icon={<SettingOutlined />}>
          <Menu.Item key="two" icon={<AppstoreOutlined />}>
            Perfil
          </Menu.Item>
          <Menu.Item key="three" icon={<AppstoreOutlined />}>
            Estadisticas
          </Menu.Item>            
      </Menu.SubMenu>
    </Menu>
 
);

export default Header;