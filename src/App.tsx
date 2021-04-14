import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import { Input, Layout, Typography, Menu, Button, Dropdown } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';

function App() {
  return (
    <div className = {styles.App}>
      <div className = {styles['app-header']}>
        {/* top-header */}
        <div className = {styles['top-header']}>
          <div className = {styles.inner}>
            <Typography.Text>Let your life better</Typography.Text>
            <Dropdown.Button  style = {{ marginLeft: 15}} 
            overlay = {
              <Menu>
                <Menu.Item>中文</Menu.Item>
                <Menu.Item>English</Menu.Item>
              </Menu>}
              icon = {<GlobalOutlined />}
            >
              Language
            </Dropdown.Button>
            <Button.Group className = {styles['button-group']}>
              <Button>Register</Button>
              <Button>Login</Button>
            </Button.Group>
          </div>
        </div>

        <Layout.Header className = {styles['main-header']}>
          <img className = {styles['App-logo']} src = {logo} alt = '' />
          <Typography.Title className = {styles.title} level = {3}> 
            Travel
          </Typography.Title>
          <Input.Search className = {styles['search-input']}
            placeholder = {'Please input your destination'}
          />
        </Layout.Header>
      
        <Menu mode = {'horizontal'} className = {styles['main-menu']}>
          <Menu.Item key={1}>Trval Front Page</Menu.Item>
          <Menu.Item key={2}>Weekend</Menu.Item>
          <Menu.Item key={3}>Group</Menu.Item>
          <Menu.Item key="4"> Private </Menu.Item>
          <Menu.Item key="5"> Small Group </Menu.Item>
          <Menu.Item key="6"> Cruise </Menu.Item>
          <Menu.Item key="7"> Hotel </Menu.Item>
          <Menu.Item key="8"> Local </Menu.Item>
          <Menu.Item key="9"> Theme </Menu.Item>
          <Menu.Item key="10"> Customize </Menu.Item>
          <Menu.Item key="11"> Learning </Menu.Item>
          <Menu.Item key="12"> Visa </Menu.Item>
          {/* <Menu.Item key="13"> Enterprise </Menu.Item>
          <Menu.Item key="14"> Luxury </Menu.Item>
          <Menu.Item key="15"> Outdoor </Menu.Item>
          <Menu.Item key="16"> Insurance </Menu.Item> */}
        </Menu>
      </div>
    
    
      <Layout.Footer>
        <Typography.Title level = {3} style = {{textAlign: 'center'}}>
          Copyright @ Jeffrey
        </Typography.Title>
      </Layout.Footer>
    </div>
  );
}

export default App;
