import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {bindAll} from 'lodash';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {addClient, updateClient, deleteClient} from './actions';
import {openForm, closeForm} from './forms/actions';

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

        bindAll(this, ['onSave', 'onSearch']);

        this.state = {
	        deleteShowed: false,
	        queryText: '',
	        selectedColor: 'white'
	    };
    }

    onSearch(value) { this.setState({queryText: value}); }

    onSave(client)
    {
        (client.id === -1) ? this.props.dispatch(addClient(client)) : this.props.dispatch(updateClient(client));
        // Closing the form.
        this.props.dispatch(closeForm());
    }

    render()
    {
        const displayCursor = {cursor: 'pointer'};
        const displayDelete = {display: (this.state.deleteShowed !== false) ? 'inline-flex' : 'none'};
        const selectedItem = {'background-color': this.state.selectedColor};
        const queryText = this.state.queryText;

        const {clients} = this.props.clients;

        return (
            <div>
                <Search onSearch={this.onSearch}/>
                <button className='add' onClick={() => {this.props.dispatch(openForm({client: {}}));}}/>

                 <ul className='client-list media'>
                    {clients.map(client => (
                        <li className='client-item media' key={client.id}>
                            <div className='client-info media-body'>
                                <div className='client-head'>
                                    <button className='delete btn-danger' onClick={() => {this.props.dispatch(deleteClient(client.id))}} style={displayDelete}>X</button>
                                    <span className='client-name'><a style={displayCursor} onClick={() => {this.props.dispatch(openForm(client));}}>{client.lastName} {client.firstName} {client.secondName}</a></span>
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
                <ClientForm onSave={this.onSave}/>
            </div>
        );
    };
};

const mapStateToProps = (state) => ({
//<!!!> clients: state.clients.length > 0 && state.clients.filter((client) => client.firstName.includes(state.filterClients) || client.secondName.includes(state.filterClients) || client.lastName.includes(state.filterClients))
    clients: state.clients
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getClients,
    addClient,
    removeClient
}, dispatch);
export default connect(mapStateToProps)(ClientsPage);
