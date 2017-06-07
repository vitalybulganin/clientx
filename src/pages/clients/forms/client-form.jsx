import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {bindAll} from 'lodash';
import {Tabs, Tab, Modal, FormControl, ControlLabel, FormGroup, Button, Form} from 'react-bootstrap';

import Person from '../../../components/common/person/person.jsx';
import Contacts from '../../../components/common/contacts/contacts.jsx';

import ContactForm from './contact-form.jsx';

import {closeForm, openContact, updateContact, addContact, deleteContact, closeContact} from './actions';
import {addClient} from '../actions';

class ClientForm extends Component
{
    static propTypes = {
        onSave: PropTypes.func.isRequired,
        client: PropTypes.object,
        contacts: PropTypes.array
    };

    static defaultProps = {
        client: [],
        contacts: []
    };

    constructor(props)
    {
        super(props);

        bindAll(this, ['onClose', 'onSave', 'onDeleteContact', 'onOpenContact', 'onSaveContact']);
    }

    onOpenContact(contact) { this.props.dispatch(openContact((typeof contact !== 'undefined') ? contact : {})); }
    onDeleteContact(contact)
    {
        const {client} = this.props.client;
        const {contacts} = client || [];

        this.props.dispatch(deleteContact(contacts, contact));
    }

    onSaveContact(contact)
    {
        const {client} = this.props.client;
        const {contacts} = client || [];

        (contact.id !== -1) ? this.props.dispatch(updateContact(contact)) : this.props.dispatch(addContact(contacts, contact));
        // Closing the contact form.
        this.props.dispatch(closeContact());
    }

    onClose() { this.props.dispatch(closeForm()); }

    onSave()
    {
        const client = {
            id: -1,
            lastName: 'Петров',
            firstName: 'Максим',
            secondName: 'Иванович',
            mobile: '(903) 123-12-12',
            email: 'eee@gmail.com',
            birthday: '20-05-2016',
            gender: 'M',
            contacts: [
                {
                    id: 1,
                    value: '333-13-45',
                    comment: ''
                }
            ],
            comment: ''
        };
        this.props.onSave((typeof this.props.client.client !== 'undefined' && typeof this.props.client.client.id !== 'undefined') ? this.props.client.client : client);
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
                                        <Person client={client}/>
                                    </FormGroup>

                                    <FormGroup bsSize='small'>
                                        <Contacts name='Контакт' contacts={typeof contacts !== 'undefined' ? contacts : []} onOpenContact={this.onOpenContact} onDeleteContact={this.onDeleteContact} onSaveContact={this.onSaveContact}/>
                                    </FormGroup>
                                    <FormGroup bsSize='small'>
                                        <ControlLabel>Комментарий:</ControlLabel>
                                        <FormControl type='textarea' id='comment'/>
                                    </FormGroup>
                                </Tab>
                                <Tab eventKey={2} title='Записи' disabled>

                                </Tab>
                            </Tabs>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button className='save' bsStyle='success' bsSize='xsmall' onClick={this.onSave}>Сохранить</Button>
                            <Button className='cross' bsSize='xsmall' onClick={() => {this.props.dispatch(closeForm());}}>Закрыть</Button>
                        </Modal.Footer>
                    </Modal>
                </Form>
                <ContactForm onSave={this.onSaveContact} onClose={() => {this.props.dispatch(closeContact());}}/>
            </div>
        );
    };
}

const mapStateToProps = (state) => ({
    client: state.client
});
const mapDispatchToProps = dispatch => bindActionCreators({
    getClients,
    addClient,
    removeClient
}, dispatch);
export default connect(mapStateToProps)(ClientForm);
