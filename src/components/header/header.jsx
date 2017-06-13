import React, {Component} from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import {bindAll} from 'lodash';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Image} from 'react-bootstrap';
import {Link} from 'react-router';
import {Search} from '../common';

class Header extends Component
{
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        onChange: PropTypes.func.isRequired,
        selectedView: PropTypes.string,
        userName: PropTypes.string,
        onOpenLogin: PropTypes.func
    };

    constructor(props)
    {
        super(props);

        bindAll(this, ['onChange', 'onSearch']);
    }

    onChange(value)
    {
        this.props.onChange(value);
    }

    onSearch(value)
    {
        this.props.onSearch(value);
    }

    render()
    {
        const {selectedView, userName} = this.props;

        return (
            <Navbar inverse collapseOnSelect staticTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Image src='./images/logo2.jpg' circle/>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={2}><Link to='/'>Главная</Link></NavItem>
                        <NavDropdown id='basic-nav-dropdown' eventKey={3} title={selectedView}>
                            <MenuItem eventKey={2.1} selected={true} onClick={() => {this.onChange('Сегодня');}}>Сегодня</MenuItem>
                            <MenuItem eventKey={2.2} onClick={() => {this.onChange('Завтра');}}>Завтра</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={2.3} onClick={() => {this.onChange('Месяц');}}>Месяц</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Search onSearch={this.onSearch} style={{width: '250px', backgroundColor: 'black'}}/>
                    </Nav>
                    <Nav pullRight>
                        <NavDropdown id={3} eventKey={3} title={userName}>
                            <MenuItem eventKey={3.2}><Link to='/profile' disabled>Профиль</Link></MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3} onClick={() => {this.props.onOpenLogin();}}>Войти...</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavDropdown id={4} title='Администрирование'>
                            <NavDropdown id={5} title='Справочники'>
                                <MenuItem eventKey={5.1}><Link to='/skills'>Справочник навыков</Link></MenuItem>
                                <MenuItem eventKey={5.2}><Link to='/rates'>Справочник ставок</Link></MenuItem>
                                <MenuItem eventKey={5.3}><Link to='/priceplans'>Справочник тарифных планов</Link></MenuItem>
                            </NavDropdown>
                            <MenuItem eventKey={4.1}><Link to='/instructors'>Список инструкторов</Link></MenuItem>
                            <MenuItem eventKey={4.2}><Link to='/clients'>Список клиентов</Link></MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={2}>Добавить</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

const mapStateToProps = (state) => ({
    header: state.header
});
export default connect(mapStateToProps)(Header);
