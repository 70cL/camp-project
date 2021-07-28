import React from "react";
import { Dropdown, DropdownMenu, Menu, Image } from "semantic-ui-react";

export default function SignIn({signOut}) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="http://www.gazeteilksayfa.com/d/gallery/331_1.jpg"
        ></Image>
        <Dropdown text="Övünç" pointing="top">
          <DropdownMenu>
            <Dropdown.Item text="Bilgilerim" icon="info"></Dropdown.Item>
            <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"></Dropdown.Item>
          </DropdownMenu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
