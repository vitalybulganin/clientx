import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {bindAll} from 'lodash';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap';

import {getClients, saveClients, addClient, updateClient, deleteClient, findClient} from './actions';
import {openClientForm, closeClientForm, ClientForm} from './forms';
import {Loader, Search} from '../../components/common';

import './clients.less';

class ClientsPage extends Component
{
    static path = '/clients';

    static propTypes = {
        clients: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    static defaultProps = {
        client: {
            id: -1,
            lastName: '',
            firstName: '',
            secondName: '',
            birthday: '',
            gender: '',
            comment: '',
            contacts: []
        }
    };

    constructor(props)
    {
        super(props);

        bindAll(this, ['onSave', 'onSearch', 'renderClient']);

        this.state = {
	        deleteShowed: true,
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

    onSearch(value)
    {
        this.props.dispatch(getClients());
        this.props.dispatch(findClient(value));
    }

    onSave(client)
    {
        console.log('Saving the client', client);

        (client.id === -1) ? this.props.dispatch(addClient(client)) : this.props.dispatch(updateClient(client));
        // Closing the form.
        this.props.dispatch(closeClientForm());
        this.componentWillUnmount();
    }

    renderClient(client)
    {
        const displayCursor = {cursor: 'pointer'};
        const displayDelete = {display: (this.state.deleteShowed !== false) ? 'inline-flex' : 'none', marginTop: '2px'};
        const mobiles = [];
        const emails = [];

        client.contacts.forEach(function(contact) {
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
            <li className='client-item' key={client.id}>
                <div className='client-info'>
                    <div className='client-head'>
                        <Button className='delete pull-right' bsStyle='danger' bsSize='xsmall' onClick={() => {this.props.dispatch(deleteClient(client));}} style={displayDelete}/>
                        <span className='client-name'><a style={displayCursor} onClick={() => {this.props.dispatch(openClientForm(client));}}>{client.lastName} {client.firstName} {client.secondName}</a></span>
                        {
                            mobiles.map((mobile, index) => (
                                <span key={index} className='client-mobile pull-right' style={{paddingRight: '20px'}}><b>{mobile}</b></span>
                            ))
                        }
                    </div>
                    <div className='client-date'>
                        <span className='label-item'>Дата рождения: {client.birthday}</span>
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
        const {clients, loaded} = this.props.clients;
        const {client} = ClientsPage.defaultProps;

        return (
            <div>
                <Search onSearch={this.onSearch}/>
                <Button className='add' onClick={() => {this.props.dispatch(openClientForm(client));}}/>

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
export default connect(mapStateToProps)(ClientsPage);
