import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {bindAll} from 'lodash';

import {DevTools} from '../utils';

import {Header, Footer, LoginForm} from '../components';

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
            showForm: false
	    };
        bindAll(this, ['onSelectedItem', 'onClose']);
    }

    onSelectedItem(name)
    {
        this.setState({selectedView: name});
    }

    onClose()
    {
        this.setState({showForm: false});
    }

    render()
    {
        console.log('Children list: ', this.props.children);

        const {selectedView, userName, showForm} = this.state;

        return (
            <div className='app-clientx-crm'>
                <div className='app-header'>
                    <Header selectedView={selectedView} userName={userName} onChange={this.onSelectedItem} onOpenLogin={() => {this.setState({showForm: true})}}/>
                </div>
                {this.props.children}
                <div className='app-footer'>
                    <Footer />
                </div>
                <LoginForm showForm={showForm} onClose={this.onClose}/>
                { process.env.NODE_ENV !== 'production' ? <DevTools /> : null }
            </div>
        );
    }
}
