import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown, DropdownDivider } from 'semantic-ui-react'


export default function CartSummary() {
    return (
        <div>
            <Dropdown item text="Cart Summary" style={{marginTop:"0.4em"}}>
              <Dropdown.Menu>
                <Dropdown.Item>Portakal</Dropdown.Item>
                <Dropdown.Item>Muz</Dropdown.Item>
                <Dropdown.Item>Hıyar</Dropdown.Item>
                <DropdownDivider></DropdownDivider>
                <Dropdown.Item as={NavLink} to="/cart">Sepete Git</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
