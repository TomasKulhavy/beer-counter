import React from 'react';
import { Navbar, Nav, NavItem, Button, NavbarBrand } from "reactstrap";

function NavigationBar() {
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Chlebíčko braní</NavbarBrand>
            <Nav>
                <NavItem>
                    <Button color="secondary" href="/">Vymazat data</Button>
                </NavItem>
                <NavItem>
                    <Button color="secondary" href="/">Počáteční stav</Button>
                </NavItem>
                <NavItem>
                    <Button color="success" href="/">Přidat stůl</Button>
                </NavItem>
            </Nav>
        </Navbar>
    );
}

export default NavigationBar;