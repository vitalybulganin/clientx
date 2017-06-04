import React, {Component} from 'react';

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
        "gender": "M"
    },
    {
        "id": "2",
        "lastName": "Петров",
        "firstName": "Максим",
        "secondName": "Иванович",
        "mobile": "(903) 123-12-12",
        "email": "eee@gmail.com",
        "birthday": "20-05-2016",
        "gender": "M"
    },
    {
        "id": "3",
        "lastName": "Кудыкин",
        "firstName": "Павел",
        "secondName": "Сергеевич",
        "mobile": "(903) 203-23-32",
        "email": "yyy@mail.com",
        "birthday": "20-05-2016",
        "gender": "M"
    },
    {
        "id": "4",
        "lastName": "Жадный",
        "firstName": "Дмитрий",
        "secondName": "Павлович",
        "mobile": "(903) 658-00-36",
        "email": "xxx@yandex.com",
        "birthday": "20-05-2016",
        "gender": "M"
    },
    {
        "id": "5",
        "lastName": "Жадный",
        "firstName": "Павел",
        "secondName": "Павлович",
        "mobile": "(903) 658-00-36",
        "email": "xxx@yandex.com",
        "birthday": "20-05-2016",
        "gender": "M"
    },
    {
        "id": "6",
        "lastName": "Жадный",
        "firstName": "Анатолий",
        "secondName": "Павлович",
        "mobile": "(903) 658-00-36",
        "email": "xxx@yandex.com",
        "birthday": "20-05-2016",
        "gender": "M"
    },
    {
        "id": "7",
        "lastName": "Жадный",
        "firstName": "Дмитрий",
        "secondName": "Павлович",
        "mobile": "(903) 658-00-36",
        "email": "xxx@yandex.com",
        "birthday": "20-05-2016",
        "gender": "M"
    }
];

export default class InstructorsPage extends Component
{
    static path = '/instructors';

    state = {
        deleteShowed: false,
        clients: data,
        showClient: false,
        queryText: '',
        selectedColor: 'white'
    }

    constructor(props)
    {
        super(props);

        this.onLinkClick = this.onLinkClick.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
        this.close = this.close.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
    }

    componentWilMount() {

    }

    onLinkClick() { this.setState({showClient: true}); }
    onDeleteClick() { console.debug(this.state.activeClient); }
    onSearch(q) { this.setState({queryText: q}); }
    close() { this.setState({showClient: false}); }
    onMouseOver()
    {
    }

    render()
    {
        var displayCursor = {cursor: "pointer"};
        var displayDelete = {display: (this.state.deleteShowed !== false) ? 'inline-flex' : 'none'};
        var selectedItem = {'background-color': this.state.selectedColor};
        var queryText = this.state.queryText;
        var filtered = [];

        this.state.clients.forEach(function(client) {
            if ((client.firstName.toLowerCase().indexOf(queryText)!=-1) ||
                (client.lastName.toLowerCase().indexOf(queryText)!=-1) ||
                (client.secondName.toLowerCase().indexOf(queryText)!=-1) ||
                (client.mobile.toLowerCase().indexOf(queryText)!=-1) ||
                (client.email.toLowerCase().indexOf(queryText)!=-1) ||
                (client.birthday.toLowerCase().indexOf(queryText)!=-1))
            {
                filtered.push(client);
            }
        }); //forEach

        return (
            <div>
                <Search onSearch={this.onSearch}/>

                <ul className="client-list media">
                    {filtered.map(client => (
                        <li className="client-item media" key={client.id} onMouseOver={this.onMouseOver}>
                            <div className="client-info media-body">
                                <div className="client-head">
                                    <button className="delete btn-danger" onClick={() => {this.setState({activeClient: client}, this.onDeleteClick)}} style={displayDelete}>X</button>
                                    <span className="client-name"><a style={displayCursor} onClick={() => {this.setState({activeClient: client}, this.onLinkClick)}}>{client.lastName} {client.firstName} {client.secondName}</a></span>
                                    <span className="client-mobile pull-right">{client.mobile}</span>
                                </div>
                                <div className="client-date">
                                    <span className="label-item">Дата рождения: </span>
                                    {client.birthday}
                                    <span className="client-mobile pull-right">{client.email}</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <InstructorForm client={this.state.activeClient} showClient={this.state.showClient} close={this.close}/>
            </div>
        );
    }
}
