import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

export default class ApplicationFooter extends React.Component {

    render()
    {
        const overrideStyle = {
            backgroundImage: '-webkit-linear-gradient(top, #3c3c3c 0, #222 100%)',
            backgroundImage: '-o-linear-gradient(top, #3c3c3c 0, #222 100%)',
            backgroundImage: '-webkit-gradient(linear, left top, left bottom, from(#3c3c3c), to(#222))',
            backgroundImage: 'linear-gradient(to bottom, #3c3c3c 0, #222 100%)',
            filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff3c3c3c", endColorstr="#ff222222", GradientType=0)',
            filter: 'progid:DXImageTransform.Microsoft.gradient(enabled=false)',
            backgroundRepeat: 'repeat-x',
            height: '30px',
            minHeight: '30px',
            fontSize: '10px'
        };

        return (
            <div className='clientx-footer'>
            <Navbar inverse collapseOnSelect style={overrideStyle}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <p>All contents &copy; 2017. All rights reserved.</p>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href='#'>Link</NavItem>
                        <NavItem eventKey={2} href='#'>Link</NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={2} href='#'>Link Right</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        );
    }
};
