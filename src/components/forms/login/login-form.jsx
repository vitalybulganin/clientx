import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {bindAll} from 'lodash';
import {Modal, FormGroup, ControlLabel, FormControl, Checkbox, Button} from 'react-bootstrap';

import {closeModal, login} from '../../../components';

class LoginForm extends React.Component
{
    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };

    constructor(props)
    {
        super(props);

        this.state = {
            login: '',
            password: '',
            saved: false
        };

        bindAll(this, ['onTextChange', 'onChecked', 'onLogin', 'onClose']);
    }

    onTextChange(event)
    {
        const {id, value} = event.target;

        switch (id)
        {
            case 'login':
                this.setState({login: value});
                break;

            case 'password':
                this.setState({password: value});
                break;

            default:
                console.error('Unknown component id', id);
                break;
        }
    }

    onChecked()
    {
        const saved = (this.state.saved !== true) ? true : false;

        this.setState({saved});
    }

    onLogin()
    {
        const user = {
            login: this.state.login,
            password: this.state.password,
            saved: this.state.saved
        };
        console.log('User', user);
        // Sending a request to server.
        this.props.dispatch(login(user));
        // Closing the form.
        this.onClose();
    }

    onClose()
    {
        this.props.dispatch(closeModal());
    }

    render()
    {
        const {saved} = this.state;

        return (
            <div className='clientx-form'>
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
                            {saved !== false ? <Checkbox onClick={this.onChecked} checked>Запомнить пароль</Checkbox> : <Checkbox onClick={this.onChecked}>Запомнить пароль</Checkbox> }
                        </FormGroup>
                        <FormControl.Feedback/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='cross' bsStyle='danger' bsSize='xsmall' onClick={this.onClose}>Закрыть</Button>
                    <Button className='save' bsStyle='success' bsSize='xsmall' onClick={this.onLogin}>Sign In</Button>
                </Modal.Footer>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps)(LoginForm);
