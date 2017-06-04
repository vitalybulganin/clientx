import React, {Component, PropTypes} from 'react';
import {Tabs, Tab, Modal, FormGroup, Button, Form} from 'react-bootstrap';

import {Person, Contacts} from '../../../components/common';

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
const skills = [
    {
        id: '1',
        value: 'сноуборд',
        comment: ''
    },
    {
        id: '2',
        value: 'горные лыжи',
        comment: 'не люблю'
    }
];
const rates = [
    {
        id: '1',
        value: 'Базовая ставка',
        comment: ''
    }
];

export default class InstructorForm extends Component
{
    static propTypes = {
        client: PropTypes.object,
        close: PropTypes.func,
        showClient: PropTypes.boolean
    };

    static defaultProps = {
        showClient: false
    };

    constructor(props)
    {
        super(props);
    }

    render()
    {
        const client = this.props.client || {};

        return (
            <div className='client-form' style={{width: '450px'}}>
                <Form>
                <Modal show={this.props.showClient} onHide={this.close}>
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
                                    <Contacts name='Контакт' contacts={contacts}/>
                                </FormGroup>

                                <FormGroup bsSize='small'>
                                    <Contacts name='Навыки' contacts={skills}/>
                                </FormGroup>

                                <FormGroup bsSize='small'>
                                    <Contacts name='Ставки' contacts={rates}/>
                                </FormGroup>
                            </Tab>
                            <Tab eventKey={2} title='Записи' disabled>
                                <div/>
                            </Tab>
                        </Tabs>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button className='save' bsStyle='success' bsSize='xsmall'>Сохранить</Button>
                        <Button className='cross' bsSize='xsmall' onClick={() => {this.props.close();}}>Закрыть</Button>
                    </Modal.Footer>
                </Modal>
                    </Form>
            </div>
        );
    }
}
