import React from 'react';
import {PropTypes} from 'prop-types';
import {Modal, FormGroup, ControlLabel, FormControl, Checkbox, Button} from 'react-bootstrap';
import {bindAll} from 'lodash';

export default class LoginForm extends React.Component
{
    static propTypes = {
        onClose: PropTypes.func.isRequired,
        showForm: PropTypes.bool
    };

    static defaultProps = {
        showForm: false
    };

    constructor(props)
    {
        super(props);

        bindAll(this, ['onClose']);
    }

    onClose()
    {
        this.props.onClose();
    }

    render()
    {
        const {showForm} = this.props;

        return (
            <div className='clientx-login'>
                <Modal show={showForm} onHide={this.onClose} container={this} aria-labelledby='contained-modal-title'>
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
                        <Button bsSize='xsmall' onClick={this.onClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
