import React from 'react';
import { Menu, Input, Button } from 'semantic-ui-react';

const Navbar = () => (
  <Menu secondary>
    <Menu.Item header>DEV@Deakin</Menu.Item>
    <Menu.Item>
      <Input icon="search" placeholder="Search..." />
    </Menu.Item>
    <Menu.Menu position="right">
      <Menu.Item><Button basic>Post</Button></Menu.Item>
      <Menu.Item><Button basic>Login</Button></Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default Navbar;
