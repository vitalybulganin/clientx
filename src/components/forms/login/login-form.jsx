import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {bindAll} from 'lodash';
import {Form, Modal, FormGroup, ControlLabel, FormControl, Checkbox, Button} from 'react-bootstrap';

import {closeLoginForm, editLoginForm, login2server} from './actions';

class LoginForm extends React.Component
{
    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };

    constructor(props)
    {
        super(props);

        bindAll(this, ['onTextChange', 'onChecked', 'onLogin', 'onClose']);
    }

    onTextChange(event)
    {
        const {user} = this.props.login;

        const {id, value} = event.target;

        switch (id)
        {
            case 'login':
                user.login = value;
                break;

            case 'password':
                user.password = value;
                break;

            default:
                console.error('Unknown component id', id);
                break;
        }
        this.props.dispatch(editLoginForm(user));
    }

    onChecked()
    {
        const {user} = this.props.login;

        user.saved = Boolean(user.saved) === false;
        this.props.dispatch(editLoginForm(user));
    }

    onLogin()
    {
        const {user} = this.props.login;
        // Sending a request to server.
        this.props.dispatch(login2server(user));
        // Closing the form.
        this.onClose();
    }

    onClose()
    {
        this.props.dispatch(closeLoginForm());
    }

    render()
    {
        const {user, showForm} = this.props.login;
        const title = 'Авторизация';

        return (
            <div className='clientx-form'>
                <Form>
                    <Modal show={showForm} onHide={this.onClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='clientx-login'>
                                <FormGroup bsSize='small'>
                                    <ControlLabel>Логин</ControlLabel>
                                    <FormControl id='login' type='login' bsSize='small' placeholder='Логин' onChange={this.onTextChange}/>
                                </FormGroup>

                                <FormGroup bsSize='small'>
                                    <ControlLabel>Пароль</ControlLabel>
                                    <FormControl id='password' type='password' bsSize='small' placeholder='Пароль' onChange={this.onTextChange}/>
                                </FormGroup>

                                <FormGroup bsSize='small'>
                                    {
                                        (user.saved !== false)
                                            ? <Checkbox onClick={this.onChecked} checked>Запомнить пароль</Checkbox>
                                            : <Checkbox onClick={this.onChecked}>Запомнить пароль</Checkbox>
                                    }
                                </FormGroup>
                                <FormControl.Feedback/>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className='cross' bsStyle='danger' bsSize='xsmall' onClick={this.onClose}>Закрыть</Button>
                            <Button className='save' bsStyle='success' bsSize='xsmall' onClick={this.onLogin}>Sign In</Button>
                        </Modal.Footer>
                    </Modal>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    login: state.login
});

export default connect(mapStateToProps)(LoginForm);
