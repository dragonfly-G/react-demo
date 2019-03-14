import React from 'react';
import Sliderbar from '../components/Sliderbar'
import Topbar from '../components/Topbar'
import { Layout } from 'antd';

const { Content } = Layout;

class Pagehome extends React.Component {
  state  = {
    collapsed: false
  };
  
  changeCollapsed = (viewParams) => {
    this.setState({
      collapsed: viewParams
    })
  };
  
  render() {
    return (
      <Layout>
        <Sliderbar status={this.state.collapsed} />
        <Layout>
          <Topbar handleChange={this.changeCollapsed}/>
          <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
          }}
          >
            Content11111111111111111111111111
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Pagehome;
