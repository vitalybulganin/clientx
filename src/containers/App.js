import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {bindAll} from 'lodash';
import {connect} from 'react-redux';

import {DevTools} from '../utils';

import {Header, Footer, ModalForm, LoginForm} from '../components';
import {openLoginForm} from '../components/forms';

class App extends Component
{
    static path = '/';

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        children: PropTypes.any.isRequired
    };

    constructor(props)
    {
        super(props);

        this.state = {
	        userName: 'Пользователь',
	        selectedView: 'Представление'
	    };
        bindAll(this, ['onSelectedItem', 'onClose', 'onOpenLogin', 'onSearch']);
    }

    onSelectedItem(name)
    {
        this.setState({selectedView: name});
    }

    onOpenLogin()
    {
        const {user} = this.props.login;

        this.props.dispatch(openLoginForm(user));
    }

    onSearch(value)
    {
        this.props.dispatch(findItem({search: value}));
    }

    onClose()
    {
        this.setState({showForm: false});
    }

    render()
    {
        console.log('Children list: ', this.props.children);

        const {selectedView, userName} = this.state;

        return (
            <div className='app-clientx-crm'>
                <div className='app-header'>
                    <Header selectedView={selectedView} userName={userName} onChange={this.onSelectedItem} onOpenLogin={this.onOpenLogin} onSearch={this.onSearch}/>
                </div>
                {this.props.children}
                <div className='app-footer'>
                    {/* <Footer />*/}
                </div>
                <LoginForm />
                { process.env.NODE_ENV !== 'production' ? <DevTools /> : null }
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    clients: state.clients,
    instructors: state.instructors,
    login: state.login,
    activePage: state.activePage
});
export default connect(mapStateToProps)(App);
