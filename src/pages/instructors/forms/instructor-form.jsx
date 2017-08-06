import React, {Component} from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import {bindAll, isEmpty} from 'lodash';
import {Tabs, Tab, Modal, FormGroup, Button, Form, FormControl, ControlLabel} from 'react-bootstrap';

import {closeInstructorForm, editInstructorForm} from './actions';

import {Person, Contacts, Skills, Rates, ContactForm} from '../../../components';
import {openContactForm, addContact, updateContact, deleteContact} from '../../../components/forms';

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
            prices: []
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
            'onCheckChanged'
        ]);
    }

    onOpenContact(contact)
    {
        this.props.dispatch(openContactForm(contact));
    }

    onSaveContact(contact)
    {
        const {instructor} = this.props.instructor;

        (contact.id !== -1) ? this.props.dispatch(updateContact(instructor, contact)) : this.props.dispatch(addContact(instructor, contact));
        // Sending EDIT action.
        this.props.dispatch(editInstructorForm(instructor));
    }

    onDeleteContact(contact)
    {
        const {instructor} = this.props.instructor;

        this.props.dispatch(deleteContact(instructor, contact));
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
        this.props.dispatch(editInstructorForm(instructor));
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
        this.props.dispatch(editInstructorForm(instructor));
    }

    onCheckChanged(sender, selectedItem)
    {
        const {instructor} = this.props.instructor;

        if (sender.props.name === 'Навыки')
        {
            const index = instructor.skills.findIndex(skill => skill.id === selectedItem.id);

            if (index !== -1) { instructor.skills = instructor.skills.filter(skill => skill.id !== selectedItem.id); }
            if (index === -1) { instructor.skills.push(selectedItem); }
        }
        else if (sender.props.name === 'Ставки')
        {
            const index = instructor.rates.findIndex(rate => rate.id === selectedItem.id);

            if (index !== -1) { instructor.rates = instructor.rates.filter(rate => rate.id !== selectedItem.id); }
            if (index === -1) { instructor.rates.push(selectedItem); }
        }
        this.props.dispatch(editInstructorForm(instructor));
    }

    onClose() { this.setState({selectedSkills: [], selectedRates: []}); this.props.dispatch(closeInstructorForm()); }

    onSave()
    {
        const {instructor} = this.props.instructor;
        // Saving the instructor.
        this.props.onSave(instructor);
        // Closing the form.
        this.onClose();
    }

    render()
    {
        const {instructor, showForm} = this.props.instructor;
        const {contacts} = instructor || {};
        const {skills, rates} = this.props;

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
                                        <Skills name='Навыки' skills={skills} selectedItems={instructor.skills} onChange={this.onCheckChanged}/>
                                    </FormGroup>

                                    <FormGroup bsSize='small'>
                                        <Rates name='Ставки' rates={rates} selectedItems={instructor.rates} onChange={this.onCheckChanged}/>
                                    </FormGroup>

                                    <FormGroup bsSize='small'>
                                        <ControlLabel>Комментарий</ControlLabel>
                                        <FormControl componentClass='textarea' id='comment' placeholder='Комментарий' defaultValue={instructor.comment} onChange={this.onTextChange}/>
                                    </FormGroup>
                                </Tab>
                                <Tab eventKey={2} title='Записи' disabled>
                                    <div/>
                                </Tab>
                            </Tabs>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button className='cross' bsStyle='danger' bsSize='xsmall' onClick={this.onClose}>Закрыть</Button>
                            {
                                (instructor.lastName === '' || instructor.firstName === '' || contacts.length === 0)
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
    instructor: state.instructor,
    skills: state.instructors.skills,
    rates: state.instructors.rates
});
export default connect(mapStateToProps)(InstructorForm);
