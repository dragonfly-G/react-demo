import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import {Link} from 'react-router-dom';

import './Sliderbar.css'
const { Sider } = Layout;

class Sliderbar extends React.Component {
  
  render() {
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={this.props.status}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to='/Pageone'>
              <Icon type="user" />
              <span>nav 1</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to='/Pagetwo'>
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to='/Pagethree'>
              <Icon type="upload" />
              <span>nav 3</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="file-sync" />
            <span>nav 4</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default Sliderbar;
