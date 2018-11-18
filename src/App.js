import React, { Component } from 'react';
import './App.css';
import { Layout, Content } from 'react-mdl';
import Main from './components/content/main';
import Nav from './components/nav/nav';

class App extends Component {
  render() {
    return (
      <div className="main-style">
        <Layout>
            <Nav/>
            <Content>
                <Main/>
            </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
