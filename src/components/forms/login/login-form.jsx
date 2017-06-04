import React, {PropTypes} from 'react';
import {Modal, FormGroup, ControlLabel, FormControl, Checkbox, Button} from 'react-bootstrap';

// import 'libs/css/login-form.css';

export default class LoginForm extends React.Component
{
    static propTypes = {
        showForm: PropTypes.boolean,
        showForm: PropTypes.boolean,
        close: PropTypes.func
    };

    static defaultPropTypes = {
        showForm: false
    };

    constructor(props, context)
    {
        super(props, context);
    }

    render()
    {
        return (
            <div className='clientx-login'>
                <Modal show={this.props.showForm} onHide={this.close} container={this} aria-labelledby='contained-modal-title'>
                    <Modal.Header closeButton>
                        <Modal.Title>Авторизация</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                            <FormGroup bsSize='small'>
                                <ControlLabel>Логин</ControlLabel>
                                <FormControl id='login' type='login' placeholder='Логин'/>
                            </FormGroup>

                            <FormGroup bsSize='small'>
                                <ControlLabel>Пароль</ControlLabel>
                                <FormControl id='password' type='password' bsSize='small' placeholder='Пароль'/>
                            </FormGroup>

                            <FormGroup bsSize='small'>
                                <Checkbox>Запомнить пароль</Checkbox>
                            </FormGroup>
                            <FormControl.Feedback/>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button bsSize='xsmall' bsStyle='primary'>Sign In</Button>
                        <Button bsSize='xsmall' onClick={() => { this.props.close(); }}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
