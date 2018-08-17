import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {bindAll} from 'lodash';
import {Tabs, Tab, Modal, FormControl, ControlLabel, FormGroup, Button, Form} from 'react-bootstrap';

import {Person, Contacts, ContactForm} from '../../../components';
import {openContactForm, addContact, updateContact, deleteContact} from '../../../components/forms';

import {closeClientForm, editClientForm} from './actions';

class ClientForm extends Component
{
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        onSave: PropTypes.func.isRequired,
        client: PropTypes.object.isRequired
    };

    static defaultProps = {
        client: {
            id: -1,
            lastName: '',
            firstName: '',
            secondName: '',
            birthday: '',
            gender: '',
            comment: '',
            contacts: []
        }
    };

    constructor(props)
    {
        super(props);

        bindAll(this, ['onClose', 'onSave', 'onDeleteContact', 'onOpenContact', 'onSaveContact', 'onPersonChanged', 'onTextChanged']);
    }

    onOpenContact(contact)
    {
        this.props.dispatch(openContactForm(contact));
    }

    onSaveContact(contact)
    {
        const {client} = this.props.client;

        (contact.id !== -1) ? this.props.dispatch(updateContact(client, contact)) : this.props.dispatch(addContact(client, contact));
        // Sending EDIT action.
        this.props.dispatch(editClientForm(client));
    }

    onDeleteContact(contact)
    {
        const {client} = this.props.client;

        this.props.dispatch(deleteContact(client, contact));
    }

    onTextChanged(event)
    {
        const {id, value} = event.target;
        const {client} = this.props.client;

        switch (id)
        {
            case 'comment':
                client.comment = value;
                break;

            default:
                console.error('Unknown coponent id', id);
        }
        this.props.dispatch(editClientForm(client));
    }

    onPersonChanged(id, value)
    {
        const {client} = this.props.client;

        switch (id)
        {
            case 'lastName':
                client.lastName = value;
                break;

            case 'firstName':
                client.firstName = value;
                break;

            case 'secondName':
                client.secondName = value;
                break;

            case 'radioMale':
                client.gender = 'M';
                break;

            case 'radioFemale':
                client.gender = 'F';
                break;

            case 'birthday':
                client.birthday = value;
                break;

            default:
                console.error('Unknown component id', id);
                break;
        }
        this.props.dispatch(editClientForm(client));
    }

    onClose() { this.props.dispatch(closeClientForm()); }

    onSave()
    {
        const {client} = this.props.client;
        // Saving the client.
        this.props.onSave(client);
        // Closing the form.
        this.onClose();
    }

    render()
    {
        const {client, showForm} = this.props.client;
        const {contacts} = client || [];

        return (
            <div className='client-form' style={{width: '450px'}}>
                <Form>
                    <Modal show={showForm} onHide={this.onClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{client.lastName} {client.firstName} {client.secondName}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Tabs id='clientTabs' defaultActiveKey={1} animation={true}>
                                <Tab eventKey={1} title='Профайл'>

                                    <FormGroup bsSize='small'>
                                        <Person client={client} onChange={this.onPersonChanged}/>
                                    </FormGroup>

                                    <FormGroup bsSize='small'>
                                        <Contacts name='Контакт' contacts={contacts} onOpenContact={this.onOpenContact} onDeleteContact={this.onDeleteContact} onSaveContact={this.onSaveContact}/>
                                    </FormGroup>

                                    <FormGroup bsSize='small'>
                                        <ControlLabel>Комментарий</ControlLabel>
                                        <FormControl componentClass='textarea' id='comment' placeholder='Комментарий' defaultValue={client.comment} onChange={this.onTextChanged}/>
                                    </FormGroup>
                                </Tab>
                                <Tab eventKey={2} title='Записи' disabled/>
                            </Tabs>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button className='cross' bsStyle='danger' bsSize='xsmall' onClick={() => {this.props.dispatch(closeClientForm());}}>Закрыть</Button>
                            {
                                (client.lastName === '' && client.firstName === '' && contacts.length === 0)
                                    ? <Button className='save' bsStyle='success' bsSize='xsmall' disabled onClick={this.onSave}>Сохранить</Button>
                                    : <Button className='save' bsStyle='success' bsSize='xsmall' onClick={this.onSave}>Сохранить</Button>

                            }
                        </Modal.Footer>
                    </Modal>
                </Form>
                <ContactForm onSave={this.onSaveContact}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    client: state.client
});
export default connect(mapStateToProps)(ClientForm);
