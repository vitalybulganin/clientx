import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {bindAll} from 'lodash';
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
        instructor: PropTypes.object.isRequired,
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
        const {showForm, instructor} = this.props;
        //<!!!> const {contacts, skills, rates} = instructor;
        console.log('Инструктор: ', instructor);

        return (
            <div className='client-form' style={{width: '450px'}}>
                <Form>
                    <Modal show={showForm} onHide={this.onClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{instructor.lastName} {instructor.firstName} {instructor.secondName}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Tabs id='clientTabs' defaultActiveKey={1} animation={false}>
                                <Tab eventKey={1} title='Профайл'>

                                    <FormGroup bsSize='small'>
                                        <Person client={typeof instructor !== 'undefined' ? instructor : {}}/>
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
                            <Button className='cross' bsSize='xsmall' onClick={this.onClose}>Закрыть</Button>
                        </Modal.Footer>
                    </Modal>
                </Form>
            </div>
        );
    }
}
