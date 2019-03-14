import React from 'react';
import {Link} from 'react-router-dom';
import { Menu, Layout, Icon, Avatar, Dropdown  } from 'antd';

import './Topbar.css'

const { Header } = Layout;

class Topbar extends React.Component {
  state = {
    collapsed: false,
  };
  
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    }, () => {
      this.props.handleChange(this.state.collapsed)
    });
  };
  
  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
        </Menu.Item>
      </Menu>
    );
    return (
      <Header>
        <Icon
          className="trigger"
          type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
        />
        <Dropdown overlay={menu} className='login-user'>
          <Link to='' >
            <Avatar icon="user" size="small" />
            <span className=''>请登录</span>
            <Icon type="down" />
          </Link>
        </Dropdown>
      </Header>
    );
  }
}

export default Topbar;
