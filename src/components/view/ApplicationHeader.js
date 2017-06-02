import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, SplitButton, MenuItem} from 'react-bootstrap';
import {Link} from 'react-router';

export default class ApplicationHeader extends Component
{
    constructor(props)
    {
        super(props);
    }

    handleChangeSelect(name, value)
    {
        console.debug(name);
        console.debug(value);

        this.props.change(name, value);
    }

    render()
    {
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
                        <NavDropdown id={3} eventKey={3} title={this.props.userName}>
                            <MenuItem eventKey={3.2} href="/profile"><Link to="/profile" disabled>Профиль</Link></MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3} onClick={() => {this.props.openLogin()}}>Войти...</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavDropdown id={4} title="Администрирование">
                            <NavDropdown id={5} title="Справочники">
                                <MenuItem eventKey={5.1}><Link to="/skills">Справочник навыков</Link></MenuItem>
                                <MenuItem eventKey={5.2}><Link to="/rates">Справочник ставок</Link></MenuItem>
                                <MenuItem eventKey={5.3}><Link to="/priceplans">Справочник тарифных планов</Link></MenuItem>
                            </NavDropdown>
                            <MenuItem eventKey={4.1} href="/instructors"><Link to="/instructors">Список инструкторов</Link></MenuItem>
                            <MenuItem eventKey={4.1} href="/clients"><Link to="/clients">Список клиентов</Link></MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
};
