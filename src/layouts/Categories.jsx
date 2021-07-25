import React from "react";
import { Menu } from "semantic-ui-react";
import { Container } from 'semantic-ui-react';

export default function Categories() {
  return (
    <div>
      <Container className="main">
        <Menu pointing vertical>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />
          <Menu.Item name="friends" />
        </Menu>
      </Container>
    </div>
  );
}
