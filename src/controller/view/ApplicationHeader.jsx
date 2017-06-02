import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, SplitButton, MenuItem} from 'react-bootstrap';

import {Link} from 'react-router-dom';

class ApplicationHeader extends Component
{
    constructor(props, context)
    {
        super(props, context);

        this.handleChangeSelect = this.handleChangeSelect.bind(this);
        this.openLogin = this.openLogin.bind(this);
    }

    handleChangeSelect(name, value)
    {
        console.debug(name);
        console.debug(value);

        this.props.change(name, value);
    }

    openLogin() { this.props.openLogin(); }

    render()
    {
        console.debug(this.props.selectedView);

        return (
            <Navbar inverse collapseOnSelect staticTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <img src="./images/logo2.jpg"/>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={2} href="#">Link</NavItem>
                        <NavDropdown id="basic-nav-dropdown" eventKey={3} title={this.props.selectedView}>
                            <MenuItem eventKey={2.1} selected="true" onClick={this.handleChangeSelect.bind(this, 'Сегодня')}>Сегодня</MenuItem>
                            <MenuItem eventKey={2.2} onClick={this.handleChangeSelect.bind(this, 'Завтра')}>Завтра</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={2.3} onClick={this.handleChangeSelect.bind(this, 'Месяц')}>Месяц</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavDropdown id={3} eventKey={3} title={this.props.userName} id="basic-nav-dropdown">
                            <NavDropdown id={4} title="Администрирование">
                                <NavDropdown id={5} title="Справочники">
                                    <MenuItem eventKey={5.1} ref="/skills">Справочник навыков</MenuItem>
                                    <MenuItem eventKey={5.1} href="/rates">Справочник ставок</MenuItem>
                                    <MenuItem eventKey={5.1} href="/priceplans">Справочник тарифных планов</MenuItem>
                                </NavDropdown>
                                <MenuItem eventKey={4.1} href="/instructors">Список инструкторов</MenuItem>
                                <MenuItem eventKey={4.1} href="/clients">Список клиентов</MenuItem>
                            </NavDropdown>
                            <MenuItem eventKey={3.2} href="/profile" disabled>Профиль</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3} href="/login" onClick={this.openLogin}>Войти...</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
};
export default ApplicationHeader;
