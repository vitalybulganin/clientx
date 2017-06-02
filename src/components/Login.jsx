/**
 * Created by vitalyb on 28.04.2017.
 */
import React, {Component} from 'react'

import Form from 'react-bootstrap/lib/Form'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import Checkbox from 'react-bootstrap/lib/Checkbox'
import Button from 'react-bootstrap/lib/Button'
import Col from 'react-bootstrap/lib/Col'
import Image from 'react-bootstrap/lib/Image'

class Login extends Component
{
    render() {

        return (
            <div>
                <Form horizontal>
                    <FormGroup controlId="formHorizontalImage">
                        <Col sm={4}/>
                        <Col sm={4}>
                            <Image src="./images/logo.svg" circle width="64"/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalLogin">
                        <Col sm={4}/>
                        <Col sm={4}>
                            <Col componentClass={ControlLabel}>Login</Col>
                            <FormControl type="login" placeholder="Login" />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col sm={4}/>
                        <Col sm={4}>
                            <Col componentClass={ControlLabel}>Password</Col>
                            <FormControl type="password" placeholder="Password" />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col sm={4}/>
                        <Col sm={4}>
                            <Checkbox>Remember me</Checkbox>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col sm={4}/>
                        <Col sm={4}>
                            <Button type="submit">Sign in</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
};
export default Login;
