import React from 'react';
import { Navbar, Nav, NavItem, Button, NavbarBrand } from "reactstrap";

function NavigationBar({addTable}) {
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Chlebíčko braní</NavbarBrand>
            <Nav>
                <NavItem>
                    <Button color="secondary" className="m-1" href="/">Vymazat data</Button>
                </NavItem>
                <NavItem>
                    <Button color="secondary" className="m-1" href="/">Počáteční stav</Button>
                </NavItem>
                <NavItem>
                    <Button color="success" className="m-1" onClick={addTable}>Přidat stůl</Button>
                </NavItem>
            </Nav>
        </Navbar>
    );
}

export default NavigationBar;