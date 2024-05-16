import { Menu } from 'antd';
import { UserOutlined, BellOutlined, MessageOutlined } from '@ant-design/icons';
import "./NavbarStyles.css";
import Logo from "../../assets/intelispend-favicon-black.png";
import { Link, useNavigate } from 'react-router-dom';
import { account } from '../../firebase/Config';
import { toast } from 'sonner';


const { SubMenu } = Menu;

const Navbar = () => {
  const navigate = useNavigate();
 async function handleLogOut(){
    try{
       await account.signOut();
        toast.info("Logout Successfull")
        navigate("/")
    }catch(err){
      toast.error(err)
    }

  }
  return (
    <Menu mode="horizontal" className='Navbar'>
      <Menu.Item key="logo" className='logo'><Link to="/"><img src={Logo} alt="" /></Link></Menu.Item>
      {/* <Menu.Item key="mail" icon={<MailOutlined />} style={{ marginLeft: 'auto' }}>
        Settings
      </Menu.Item> */}
      <Menu.Item key="notification" icon={<BellOutlined />} style={{ marginLeft: 'auto' }}>
        Notifications
      </Menu.Item>
      <Menu.Item key="chat" icon={<MessageOutlined />} >
        Chat
      </Menu.Item>
      <SubMenu key="profile" icon={<UserOutlined />} title="Profile">
        <Menu.Item key="setting:1">My Account</Menu.Item>
        <Menu.Item key="setting:2"><Link onClick={handleLogOut}>Logout</Link></Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default Navbar;