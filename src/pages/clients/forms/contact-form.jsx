import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {bindAll} from 'lodash';
import {Form, Modal, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

import {ModalForm} from '../../../components';

class ContactForm extends Component
{
    static propTypes = {
        client: PropTypes.object.isRequired,
        onSave: PropTypes.func.isRequired,
        onClose: PropTypes.func.isRequired,
    };

    constructor(props)
    {
        super(props);

        bindAll(this, ['onSave']);
    }

    onSave()
    {
        const contact = {id: -1, value: '123-36-98', comment: 'xxxx'};

        this.props.onSave(contact);
    }

    render()
    {
        let contactInfo = this.props.client.contact;
        if (typeof contactInfo === 'undefined') { contactInfo = {showForm: false, contact: {id: -1, value: '', comment: ''}}; }
        const {showForm, contact} = contactInfo;
        const title = (contact.id === -1) ? 'Добавление нового контакта' : 'Редактирование контакта';

        return (
            <div className='client-form' style={{width: '450px'}}>
                <Form>
                    <Modal show={showForm} onHide={() => {this.props.onClose()}}>
                        <Modal.Header closeButton>
                            <Modal.Title>{title}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <FormGroup bsSize='small'>
                                <ControlLabel>Контакт:</ControlLabel>
                                <FormControl type='text' id='contact' value={contact.value}/>
                            </FormGroup>
                            <FormGroup bsSize='small'>
                                <ControlLabel>Комментарий:</ControlLabel>
                                <FormControl type='textarea' id='comment' value={contact.comment}/>
                            </FormGroup>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button className='cross' bsStyle='danger' bsSize='xsmall' onClick={() => {this.props.onClose();}}>Закрыть</Button>
                            <Button className='save' bsStyle='success' bsSize='xsmall' onClick={this.onSave}>Сохранить</Button>
                        </Modal.Footer>
                    </Modal>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    client: state.client,
    contact: state.contact
});
export default connect(mapStateToProps)(ContactForm);
