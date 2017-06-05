import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {bindAll} from 'lodash';
import {Tabs, Tab, Modal, FormControl, ControlLabel, FormGroup, Button, Form} from 'react-bootstrap';

import Person from '../../../components/common/person/person.jsx';
import Contacts from '../../../components/common/contacts/contacts.jsx';

// const contacts = [
//     {
//         id: '1',
//         value: '903-010-0962',
//         comment: ''
//     },
//     {
//         id: '2',
//         value: '965-352-3669',
//         comment: 'не звонить'
//     }
// ];

export default class ClientForm extends Component
{
    static propTypes = {
        showForm: PropTypes.bool.isRequired,
        client: PropTypes.object,
        contacts: PropTypes.array,
        onSave: PropTypes.func.isRequired,
        onClose: PropTypes.func.isRequired
    };

    static defaultProps = {
        client: [],
        contacts: [],
        showForm: false
    };

    constructor(props)
    {
        super(props);

        bindAll(this, ['onClose', 'onSave']);
    }

    onClose() { this.props.onClose(); }
    onSave() { this.props.onSave(); }

    render()
    {
        const {client, showForm} = this.props;
        const {contacts} = client;

        return (
            <div className='client-form' style={{width: '450px'}}>
                <Form>
                <Modal show={showForm} onHide={this.onClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{client.lastName} {client.firstName} {client.secondName}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Tabs id='clientTabs' defaultActiveKey={1} animation={false}>
                            <Tab eventKey={1} title='Профайл'>

                                <FormGroup bsSize='small'>
                                    <Person client={client}/>
                                </FormGroup>

                                <FormGroup bsSize='small'>
                                    <Contacts name='Контакт' contacts={typeof contacts !== 'undefined' ? contacts : []}/>
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
                        <Button className='cross' bsSize='xsmall' onClick={this.onClose}>Закрыть</Button>
                    </Modal.Footer>
                </Modal>
                    </Form>
            </div>
        );
    };
}
