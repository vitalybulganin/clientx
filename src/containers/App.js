import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

import {DevTools} from '../utils';

import {ApplicationHeader, ApplicationFooter, LoginForm} from '../components';

export default class App extends Component
{
    static path = '/';

    static propTypes = {
        children: PropTypes.any.isRequired
    };

    constructor(props)
    {
        super(props);

		this.state = {
	        userName: 'Пользователь',
	        selectedView: 'Представление',
	        showLoginForm: false
	    };
    }

    onSelectedItem(selectedView)
    {
        console.debug(selectedView);

        this.state.selectedView = selectedView;
    }

    handleChangeSelect(name)
    {
        this.setState({selectedView: name});

        console.log('View type: ', this.state.selectedView);
    }

    render()
    {
        console.log('Children', this.props.children);

        return (
            <div className="app-clientx-crm">
                <div className="app-header">
                    <ApplicationHeader selectedView={this.state.selectedView} userName={this.state.userName} change={this.handleChangeSelect.bind(this)} openLogin={() => {this.setState({showLoginForm: true})}}/>
                </div>
                {this.props.children}
                <div className="app-footer">
                    <ApplicationFooter/>
                </div>
                <LoginForm showForm={this.state.showLoginForm} close={() => {this.setState({showLoginForm: false})}}/>
                { process.env.NODE_ENV !== 'production' ? <DevTools /> : null }
            </div>
        );
    }
}; // main
