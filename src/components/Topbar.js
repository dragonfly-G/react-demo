import React from 'react';
import { Layout, Icon } from 'antd';

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
    return (
      <Header style={{ background: '#fff', padding: 0 }}>
        <Icon
          className="trigger"
          type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
        />
      </Header>
    );
  }
}

export default Topbar;
