import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {bindAll} from 'lodash';

import {InstructorForm} from './forms';
import {Search} from '../../components/common';

const data = [
    {
        "id": "1",
        "lastName": "Иванов",
        "firstName": "Иван",
        "secondName": "Петрович",
        "mobile": "(903) 000-00-00",
        "email": "xxx@xxx.com",
        "birthday": "20-05-2016",
        "gender": 'F'
    },
    {
        "id": "2",
        "lastName": "Петров",
        "firstName": "Максим",
        "secondName": "Иванович",
        "mobile": "(903) 123-12-12",
        "email": "eee@gmail.com",
        "birthday": "20-05-2016",
        "gender": 'M'
    },
    {
        "id": "3",
        "lastName": "Кудыкин",
        "firstName": "Павел",
        "secondName": "Сергеевич",
        "mobile": "(903) 203-23-32",
        "email": "yyy@mail.com",
        "birthday": "20-05-2016",
        "gender": 'M'
    },
    {
        "id": "4",
        "lastName": "Жадный",
        "firstName": "Дмитрий",
        "secondName": "Павлович",
        "mobile": "(903) 658-00-36",
        "email": "xxx@yandex.com",
        "birthday": "20-05-2016",
        "gender": 'M'
    },
    {
        "id": "5",
        "lastName": "Жадный",
        "firstName": "Павел",
        "secondName": "Павлович",
        "mobile": "(903) 658-00-36",
        "email": "xxx@yandex.com",
        "birthday": "20-05-2016",
        "gender": 'M'
    },
    {
        "id": "6",
        "lastName": "Жадный",
        "firstName": "Анатолий",
        "secondName": "Павлович",
        "mobile": "(903) 658-00-36",
        "email": "xxx@yandex.com",
        "birthday": "20-05-2016",
        "gender": 'M'
    },
    {
        "id": "7",
        "lastName": "Жадный",
        "firstName": "Дмитрий",
        "secondName": "Павлович",
        "mobile": "(903) 658-00-36",
        "email": "xxx@yandex.com",
        "birthday": "20-05-2016",
        "gender": 'M'
    }
];

export default class InstructorsPage extends Component
{
    static path = '/instructors';

    static propTypes = {

    };

    static defaultProps = {

    };

    constructor(props)
    {
        super(props);

        bindAll(this, ['onLinkClick', 'onDeleteClick', 'onClose', 'onSearch', 'onMouseOver', 'onAdd']);

        this.state = {
            deleteShowed: false,
            instructors: data,
            showForm: false,
            queryText: '',
            selectedColor: 'white'
        }
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

    render()
    {
        const displayCursor = {cursor: 'pointer'};
        const displayDelete = {display: (this.state.deleteShowed !== false) ? 'inline-flex' : 'none'};
        const selectedItem = {'background-color': this.state.selectedColor};
        const queryText = this.state.queryText;
        const filtered = [];
        const {instructors, showForm, activeInstructor} = this.state;

        instructors.forEach(function(instructor) {
            if ((instructor.firstName.toLowerCase().indexOf(queryText)!=-1) ||
                (instructor.lastName.toLowerCase().indexOf(queryText)!=-1) ||
                (instructor.secondName.toLowerCase().indexOf(queryText)!=-1) ||
                (instructor.mobile.toLowerCase().indexOf(queryText)!=-1) ||
                (instructor.email.toLowerCase().indexOf(queryText)!=-1) ||
                (instructor.birthday.toLowerCase().indexOf(queryText)!=-1))
            {
                filtered.push(instructor);
            }
        }); //forEach

        return (
            <div>
                <Search onSearch={this.onSearch}/>

                <ul className="client-list media">
                    {filtered.map(instructor => (
                        <li className="client-item media" key={instructor.id} onMouseOver={this.onMouseOver}>
                            <div className="client-info media-body">
                                <div className="client-head">
                                    <button className="delete btn-danger" onClick={() => {this.setState({activeInstructor: instructor}, this.onDeleteClick)}} style={displayDelete}/>
                                    <span className="client-name"><a style={displayCursor} onClick={() => {this.setState({activeInstructor: instructor}, this.onLinkClick)}}>{instructor.lastName} {instructor.firstName} {instructor.secondName}</a></span>
                                    <span className="client-mobile pull-right">{instructors.mobile}</span>
                                </div>
                                <div className="client-date">
                                    <span className="label-item">Дата рождения: </span>
                                    {instructor.birthday}
                                    <span className="client-mobile pull-right">{instructor.email}</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <InstructorForm instructor={typeof activeInstructor !== 'undefined' ? activeInstructor : {}} showForm={showForm} onClose={this.onClose}/>
            </div>
        );
    }
}
