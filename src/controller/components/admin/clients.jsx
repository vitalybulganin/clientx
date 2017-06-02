import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getClients, addClient, removeClient} from '../../../actions/clients';
import {ButtonGroup, Button} from 'react-bootstrap';

import * as types from '../../../constants/action-types';

import ClientForm from './forms/client-form'
import Search from './search';

import '../../../../libs/css/clients.css';

class Clients extends Component
{
    constructor(props, context)
    {
        super(props, context);
		
	    this.state = {
	        deleteShowed: false,
	        showClient: false,
	        queryText: '',
	        selectedColor: 'white'
	    }

        this.onLinkClick = this.onLinkClick.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
        this.close = this.close.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    componentDidMount() { }
    componentWillUnmount() {  }

    onLinkClick() { this.setState({showClient: true}); }
    onDeleteClick() { console.debug(this.state.activeClient); }
    onSearch(value) { this.setState({queryText: value}); }
    close() { this.setState({showClient: false}); }

    render()
    {
        var displayCursor = {cursor: "pointer"};
        var displayDelete = {display: (this.state.deleteShowed !== false) ? 'inline-flex' : 'none'};
        var selectedItem = {'background-color': this.state.selectedColor};
        var queryText = this.state.queryText;
        var clients = this.props.clients || [];

        return (
            <div>
                <Search onSearch={this.onSearch}/>

                 <ul className="client-list media">
                    {clients.map(client => (
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
                <ClientForm client={this.state.activeClient} showClient={this.state.showClient} close={this.close}/>
            </div>
        );
    };
};

const mapStateToProps = state => ({
    clients: state.clients.length > 0 && state.clients.filter(client => client.firstName.includes(state.filterClients) || client.secondName.includes(state.filterClients) || client.lastName.includes(state.filterClients))
});
const mapDispatchToProps = dispatch => bindActionCreators({
    getClients,
    addClient,
    removeClient
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
