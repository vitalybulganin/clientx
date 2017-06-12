import React, {Component} from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import {bindAll} from 'lodash';

import {InstructorForm} from './forms';
import {Search, Loader} from '../../components';

import {openForm, getInstructors, saveInstructors, deleteInstructor, updateInstructor, addInstructor} from './actions';

class InstructorsPage extends Component
{
    static path = '/instructors';

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        instructors: PropTypes.object.isRequired
    };

    static defaultProps = {
        instructor: {

        }
    };

    componentWillMount()
    {
        this.props.dispatch(getInstructors());
    }

    componentDidUnmount()
    {
        this.props.dispatch(saveInstructors());
    }

    constructor(props)
    {
        super(props);

        bindAll(this, ['onLinkClick', 'onDeleteClick', 'onClose', 'onSearch', 'onMouseOver', 'onAdd']);

        this.state = {
            deleteShowed: false,
            showForm: false,
            queryText: '',
            selectedColor: 'white'
        };
    }

    onAdd()
    {
        this.setState({showForm: true});
    }
    onLinkClick() { this.setState({showForm: true}); }
    onDeleteClick() { console.debug(this.state.activeClient); }
    onSearch(q) { this.setState({queryText: q}); }
    onClose() { this.setState({showForm: false}); }
    onMouseOver()
    {
    }

    renderInstructor(instructor)
    {
        return (
            <li className='client-item media' key={instructor.id} onMouseOver={this.onMouseOver}>
                <div className='client-info media-body'>
                    <div className='client-head'>
                        <button className='delete btn-danger' onClick={() => {this.props.dispatch(deleteInstructor(instructor));}} style={displayDelete}/>
                        <span className='client-name'><a style={displayCursor} onClick={() => {this.props.dispatch(openForm(instructor));}}>{instructor.lastName} {instructor.firstName} {instructor.secondName}</a></span>
                        <span className='client-mobile pull-right'>{instructors.mobile}</span>
                    </div>
                    <div className='client-date'>
                        <span className='label-item'>Дата рождения: {instructor.birthday}</span>
                        <span className='client-mobile pull-right'>{instructor.email}</span>
                    </div>
                </div>
            </li>
        );
    }

    render()
    {
        const {instructors, loaded} = this.state.instructors;

        return (
            <div>
                <Search onSearch={this.onSearch}/>

                <ul className='client-list media'>
                    {
                        (loaded !== true) ? <Loader /> : (instructors.length > 0) ? instructors.map(instructor => (this.renderInstructor(instructor))) : null
                    }
                </ul>
                {/*<InstructorForm instructor={instructor} showForm={showForm} onClose={this.onClose}/>*/}
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    instructors: state.instructors
});
export default connect(mapStateToProps)(InstructorsPage);
