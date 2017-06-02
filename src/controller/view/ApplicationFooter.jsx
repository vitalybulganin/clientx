import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

import '../../../libs/css/clientx-footer.css';

class ApplicationFooter extends React.Component {

    render()
    {
        var overrideStyle = {
            'background-image': "-webkit-linear-gradient(top, #3c3c3c 0, #222 100%)",
            'background-image': "-o-linear-gradient(top, #3c3c3c 0, #222 100%)",
            'background-image': "-webkit-gradient(linear, left top, left bottom, from(#3c3c3c), to(#222))",
            'background-image': "linear-gradient(to bottom, #3c3c3c 0, #222 100%)",
            filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff3c3c3c', endColorstr='#ff222222', GradientType=0)",
            filter: "progid:DXImageTransform.Microsoft.gradient(enabled=false)",
            'background-repeat': 'repeat-x',
            height: '30px',
            'min-height': '30px',
            'font-size': '10px'
        }

        return (
            <div className="clientx-footer">
            <Navbar inverse collapseOnSelect style={overrideStyle}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <p>All contents &copy; 2017. All rights reserved.</p>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">Link</NavItem>
                        <NavItem eventKey={2} href="#">Link</NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={2} href="#">Link Right</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        );
    }
};
export default ApplicationFooter;