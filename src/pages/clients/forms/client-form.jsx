import React, {Component, PropTypes} from 'react';
import {Tabs, Tab, Modal, FormControl, ControlLabel, FormGroup, Button, Form} from 'react-bootstrap';

import Person from '../../../components/common/person/person.jsx';
import Contacts from '../../../components/common/contacts/contacts.jsx';

const contacts = [
    {
        id: '1',
        value: '903-010-0962',
        comment: ''
    },
    {
        id: '2',
        value: '965-352-3669',
        comment: 'не звонить'
    }
];

export default class ClientForm extends Component
{
    static propTypes = {
        client: PropTypes.Object,
        contacts: PropTypes.Array,
        showClient: PropTypes.boolean
    };

    static defaultProps = {
        client: [],
        contacts: [],
        showClient: false
    };

    constructor(props)
    {
        super(props);

        this.close = this.close.bind(this);
    }

    close() { this.props.close(); }

    render()
    {
        const { client } = this.props || {};

        return (
            <div className="client-form" style={{width: '450px'}}>
                <Form>
                <Modal show={this.props.showClient} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>{client.lastName} {client.firstName} {client.secondName}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Tabs id="clientTabs" defaultActiveKey={1} animation={false}>
                            <Tab eventKey={1} title="Профайл">

                                <FormGroup bsSize="small">
                                    <Person client={client}/>
                                </FormGroup>

                                <FormGroup bsSize="small">
                                    <Contacts name="Контакт" contacts={contacts}/>
                                </FormGroup>
                                <FormGroup bsSize="small">
                                    <ControlLabel>Комментарий:</ControlLabel>
                                    <FormControl type="textarea" id="comment"/>
                                </FormGroup>
                            </Tab>
                            <Tab eventKey={2} title="Записи" disabled>

                            </Tab>
                        </Tabs>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button className="save" bsStyle="success" bsSize="xsmall">Сохранить</Button>
                        <Button className="cross" bsSize="xsmall" onClick={this.close}>Закрыть</Button>
                    </Modal.Footer>
                </Modal>
                    </Form>
            </div>
        );
    };
}
