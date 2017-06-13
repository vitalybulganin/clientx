import React, {Component} from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import {bindAll} from 'lodash';
import {Button} from 'react-bootstrap';

import {Search, Loader} from '../../components';

import {openInstructorForm, closeInstructorForm, InstructorForm} from './forms';
import {getInstructors, saveInstructors, deleteInstructor, updateInstructor, addInstructor} from './actions';

class InstructorsPage extends Component
{
    static path = '/instructors';

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        instructors: PropTypes.object.isRequired
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

        bindAll(this, ['onSave', 'onSearch', 'renderInstructor']);

        this.state = {
            deleteShowed: true
        };
    }

    componentDidMount()
    {
        this.props.dispatch(getInstructors());
    }

    componentWillUnmount()
    {
        const {instructors} = this.props.instructors;

        this.props.dispatch(saveInstructors(instructors));
    }

    onSearch(value)
    {
        this.props.dispatch(getInstructors());
        this.props.dispatch(findInstructor(value));
    }

    onSave(instructor)
    {
        console.log('Saving the instructor', instructor);

        (instructor.id === -1) ? this.props.dispatch(addInstructor(instructor)) : this.props.dispatch(updateInstructor(instructor));
        // Closing the form.
        this.props.dispatch(closeInstructorForm());
        this.componentWillUnmount();
    }

    renderInstructor(instructor)
    {
        const displayCursor = {cursor: 'pointer'};
        const displayDelete = {display: (this.state.deleteShowed !== false) ? 'inline-flex' : 'none', marginTop: '2px'};
        const mobiles = [];
        const emails = [];

        instructor.contacts.forEach(function(contact) {
            if (contact.type === 'Мобильный')
            {
                mobiles.push(contact.value);
            }
            else if (contact.type === 'Почта')
            {
                emails.push(contact.value);
            }
        });
        return (
            <li className='client-item media' key={instructor.id}>
                <div className='client-info media-body'>
                    <div className='client-head'>
                        <Button className='delete pull-right' bsStyle='danger' bsSize='xsmall' onClick={() => {this.props.dispatch(deleteInstructor(instructor));}} style={displayDelete}/>
                        <span className='client-name'><a style={displayCursor} onClick={() => {this.props.dispatch(openInstructorForm(instructor));}}>{instructor.lastName} {instructor.firstName} {instructor.secondName}</a></span>
                        {
                            mobiles.map((mobile, index) => (
                                <span key={index} className='client-mobile pull-right' style={{paddingRight: '20px'}}><b>{mobile}</b></span>
                            ))
                        }
                    </div>
                    <div className='client-date'>
                        <span className='label-item'>Дата рождения: {instructor.birthday}</span>
                        {
                            emails.map((email, index) => (
                                <span key={index} className='client-mobile pull-right' style={{paddingRight: '20px'}}>{email}</span>
                            ))
                        }
                    </div>
                </div>
            </li>
        );
    }

    render()
    {
        const {instructors, loaded} = this.props.instructors;
        const {instructor} = InstructorsPage.defaultProps;

        return (
            <div>
                <Search onSearch={this.onSearch}/>
                <Button className='add' onClick={() => {this.props.dispatch(openInstructorForm(instructor));}}/>

                <ul className='client-list media'>
                    {
                        (loaded !== true) ? <Loader /> : (instructors.length !== 0) ? instructors.map(this.renderInstructor) : null
                    }
                </ul>
                <InstructorForm onSave={this.onSave}/>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    instructors: state.instructors
});

export default connect(mapStateToProps)(InstructorsPage);
