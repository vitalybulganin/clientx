import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {bindAll} from 'lodash';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {LocalStorageManager} from '../../utils';

import {getClients, saveClients, addClient, updateClient, deleteClient} from './actions';
import {openForm, closeForm} from './forms/actions';

import {Loader} from '../../components/common';
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

        bindAll(this, ['onSave', 'onSearch', 'renderClient']);

        this.state = {
	        deleteShowed: false,
	        queryText: '',
	        selectedColor: 'white'
	    };
    }

    componentDidMount()
    {
        this.props.dispatch(getClients());
    }

    componentWillUnmount()
    {
        const {clients} = this.props.clients;

        this.props.dispatch(saveClients(clients));
    }

    renderClient(client)
    {
        const displayCursor = {cursor: 'pointer'};
        const displayDelete = {display: (this.state.deleteShowed !== false) ? 'inline-flex' : 'none'};

        return (
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
        );
    }

    onSearch(value) { this.setState({queryText: value}); }

    onSave(client)
    {
        console.log('Saving the client', client);

        (client.id === -1) ? this.props.dispatch(addClient(client)) : this.props.dispatch(updateClient(client));
        // Closing the form.
        this.props.dispatch(closeForm());
    }

    render()
    {
        const selectedItem = {'background-color': this.state.selectedColor};
        const queryText = this.state.queryText;
        const {clients, loaded} = this.props.clients;

        return (
            <div>
                <Search onSearch={this.onSearch}/>
                <button className='add' onClick={() => {this.props.dispatch(openForm({client: {}}));}}/>

                 <ul className='client-list media'>
                    {
                        (loaded !== true) ? <Loader /> : (clients.length !== 0) ? clients.map(this.renderClient) : null
                    }
                </ul>
                <ClientForm onSave={this.onSave}/>
            </div>
        );
    };
}

const mapStateToProps = (state) => ({
    clients: state.clients
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getClients,
    addClient,
    removeClient
}, dispatch);
export default connect(mapStateToProps)(ClientsPage);
