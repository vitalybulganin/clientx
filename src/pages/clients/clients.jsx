import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {bindAll} from 'lodash';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {addClient, editClient, deleteClient} from './actions';
import {ClientForm} from './forms';
import {Search} from '../../components/common';

class ClientsPage extends Component
{
    static path = '/clients';

    static propTypes = {
        clients: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    constructor(props)
    {
        super(props);

        bindAll(this, ['onLinkClick', 'onDeleteClick', 'onSave', 'onClose', 'onSearch', 'add']);

        this.state = {
	        deleteShowed: false,
            showForm: false,
	        queryText: '',
	        selectedColor: 'white'
	    };
    }

    onLinkClick() { this.setState({showForm: true}); }
    onDeleteClick() { console.debug(this.state.activeClient); }
    onSearch(value) { this.setState({queryText: value}); }
    add() { this.setState({showForm: true}); }
    onClose() { this.setState({showForm: false}); }
    onSave()
    {
        const {clients} = this.props.clients;
        const client = {
            id: clients.length + 1,
            lastName: 'Петров',
            firstName: 'Максим',
            secondName: 'Иванович',
            mobile: '(903) 123-12-12',
            email: 'eee@gmail.com',
            birthday: '20-05-2016',
            gender: 'M',
            contacts: [
                {
                    id: 1,
                    value: '333-13-45',
                    comment: ''
                },
                {
                    id: 2,
                    value: '555-35-55',
                    comment: 'новая Хрень!'
                },
                {
                    id: 3,
                    value: '000-00-00',
                    comment: ''
                }
            ],
            comment: ''
        };
        this.props.dispatch(addClient(client));
        this.setState({showForm: false, client: {}});
    }

    render()
    {
        const displayCursor = {cursor: 'pointer'};
        const displayDelete = {display: (this.state.deleteShowed !== false) ? 'inline-flex' : 'none'};
        const selectedItem = {'background-color': this.state.selectedColor};
        const queryText = this.state.queryText;

        const {clients} = this.props.clients;
        const {showForm, activeClient} = this.state;

        return (
            <div>
                <Search onSearch={this.onSearch}/>
                <button className='add' onClick={this.add}/>

                 <ul className='client-list media'>
                    {clients.map(client => (
                        <li className='client-item media' key={client.id} onMouseOver={this.onMouseOver}>
                            <div className='client-info media-body'>
                                <div className='client-head'>
                                    <button className='delete btn-danger' onClick={() => {this.setState({activeClient: client}, this.onDeleteClick)}} style={displayDelete}>X</button>
                                    <span className='client-name'><a style={displayCursor} onClick={() => {this.setState({activeClient: client}, this.onLinkClick)}}>{client.lastName} {client.firstName} {client.secondName}</a></span>
                                    <span className='client-mobile pull-right'>{client.mobile}</span>
                                </div>
                                <div className='client-date'>
                                    <span className='label-item'>Дата рождения: </span>
                                    {client.birthday}
                                    <span className='client-mobile pull-right'>{client.email}</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <ClientForm client={typeof activeClient !== 'undefined' ? activeClient : {}} showForm={showForm} onSave={this.onSave} onClose={this.onClose}/>
            </div>
        );
    };
};

const mapStateToProps = (state) => ({
//    clients: state.clients.length > 0 && state.clients.filter(client => client.firstName.includes(state.filterClients) || client.secondName.includes(state.filterClients) || client.lastName.includes(state.filterClients))
    clients: state.clients
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getClients,
    addClient,
    removeClient
}, dispatch);
export default connect(mapStateToProps)(ClientsPage);
