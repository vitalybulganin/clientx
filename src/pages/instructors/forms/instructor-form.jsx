import React, {Component} from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import {bindAll} from 'lodash';
import {Tabs, Tab, Modal, FormGroup, Button, Form} from 'react-bootstrap';

import {closeInstructorForm, updateContact, addContact, deleteContact} from './actions';

import {Person, Contacts, Skills, Rates} from '../../../components/common';
import {openModal} from '../../../components/common';
import {ContactForm} from '../../../components/forms';

class InstructorForm extends Component
{
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        instructor: PropTypes.object.isRequired,
        onSave: PropTypes.func.isRequired
    };

    static defaultProps = {
        instructor: {
            id: -1,
            lastName: '',
            firstName: '',
            secondName: '',
            birthday: '',
            gender: '',
            comment: '',
            contacts: [],
            skills: [],
            rates: [],
            priceplans: []
        }
    };

    constructor(props)
    {
        super(props);

        bindAll(this, [
            'onClose',
            'onSave',
            'onPersonChanged',
            'onTextChanged',
            'onDeleteContact',
            'onOpenContact',
            'onSaveContact',
            'onDeleteSkill',
            'onOpenSkill',
            'onSaveSkill',
            'onDeleteRate',
            'onOpenRate',
            'onSaveRate'
        ]);
    }

    onOpenContact(contact)
    {
        console.log('Open contact', contact);

        const options = {
            title: (typeof contact !== 'undefined') ? 'Редактирование контакта' : 'Новый контакт',
            content: <ContactForm contact={contact} onSave={this.onSaveContact}/>
        };
        this.props.dispatch(openModal(options));
    }

    onSaveContact(contact)
    {
        (contact.id !== -1) ? this.props.dispatch(updateContact(contact)) : this.props.dispatch(addContact(contact));
    }

    onDeleteContact(contact)
    {
        this.props.dispatch(deleteContact(contact));
    }

    onOpenSkill(skill)
    {
        const options = {
            title: (typeof contact !== 'undefined') ? 'Редактирование контакта' : 'Новый контакт',
            content: <ContactForm contact={contact} onSave={this.onSaveContact}/>
        };
        this.props.dispatch(openModal(options));
    }

    onSaveSkill(skill)
    {
        // (skill.id !== -1) ? this.props.dispatch(updateContact(contact)) : this.props.dispatch(addContact(contact));
    }

    onDeleteSkill(skill)
    {
        // this.props.dispatch(deleteContact(contact));
    }

    onOpenRate(rate)
    {
        const options = {
            title: (typeof contact !== 'undefined') ? 'Редактирование контакта' : 'Новый контакт',
            content: <ContactForm contact={contact} onSave={this.onSaveContact}/>
        };
        this.props.dispatch(openModal(options));
    }

    onSaveRate(rate)
    {
        // (contact.id !== -1) ? this.props.dispatch(updateContact(contact)) : this.props.dispatch(addContact(contact));
    }

    onDeleteRate(rate)
    {
        // this.props.dispatch(deleteContact(contact));
    }

    onTextChanged(event)
    {
        const {id, value} = event.target;
        const {instructor} = this.props.instructor;

        switch (id)
        {
            case 'comment':
                instructor.comment = value;
                break;

            default:
                console.error('Unknown coponent id', id);
        }
        this.setState({form: {instructor}});
    }

    onPersonChanged(id, value)
    {
        const {instructor} = this.props.instructor;

        switch (id)
        {
            case 'lastName':
                instructor.lastName = value;
                break;

            case 'firstName':
                instructor.firstName = value;
                break;

            case 'secondName':
                instructor.secondName = value;
                break;

            case 'radioMale':
                instructor.gender = 'M';
                break;

            case 'radioFemale':
                instructor.gender = 'F';
                break;

            case 'birthday':
                instructor.birthday = value;
                break;

            default:
                console.error('Unknown component id', id);
                break;
        }
        this.setState({instructor: {instructor}});
    }

    onClose() { this.props.dispatch(closeInstructorForm()); }

    onSave()
    {
        const {instructor} = this.props.instructor;
        // Saving the instructor.
        this.props.onSave(instructor);
    }

    render()
    {
        const {showForm} = this.props.instructor;
        let {instructor} = this.props.instructor;
        if (instructor === null) { instructor = InstructorForm.defaultProps.instructor; }
        console.log('Instructor', instructor);
        const {contacts} = instructor || [];
        const {skills} = instructor || [];
        const {rates} = instructor || [];
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
                                        <Person client={instructor} onChange={this.onPersonChanged}/>
                                    </FormGroup>

                                    <FormGroup bsSize='small'>
                                        <Contacts name='Контакт' contacts={contacts} onOpenContact={this.onOpenContact} onDeleteContact={this.onDeleteContact} onSaveContact={this.onSaveContact}/>
                                    </FormGroup>

                                    <FormGroup bsSize='small'>
                                        <Skills name='Навыки' skills={skills} onOpenSkill={this.onOpenSkill} onDeleteSkill={this.onDeleteSkill} onSaveSkill={this.onSaveSkill}/>
                                    </FormGroup>

                                    <FormGroup bsSize='small'>
                                        <Rates name='Ставки' rates={rates} onOpenRate={this.onOpenRate} onDeleteRate={this.onDeleteRate} onSaveRate={this.onSaveRate}/>
                                    </FormGroup>
                                </Tab>
                                <Tab eventKey={2} title='Записи' disabled>
                                    <div/>
                                </Tab>
                            </Tabs>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button className='cross' bsStyle='danger' bsSize='xsmall' onClick={this.onClose}>Закрыть</Button>
                            <Button className='save' bsStyle='success' bsSize='xsmall' onClick={this.onSave}>Сохранить</Button>
                        </Modal.Footer>
                    </Modal>
                </Form>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    instructor: state.instructor
});
export default connect(mapStateToProps)(InstructorForm);
