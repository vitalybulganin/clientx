import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {bindAll} from 'lodash';

import {closeModal} from './actions';

import './styles.less';

class ModalForm extends Component
{
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        modal: PropTypes.object.isRequired
    };

    constructor(props)
    {
        super(props);

        bindAll(this, ['onClose']);
    }

    onClose()
    {
        this.props.dispatch(closeModal());
    }

    render() {
        const { isOpen, title, content, btnText } = this.props.modal;

        if (isOpen !== true) { return null; }

        return (
            <div className='modal fade in'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <button type='button' className='close' onClick={ this.close }><span>&times;</span></button>
                            <h4 className='modal-title'>{ title }</h4>
                        </div>
                        <div className='modal-body'>
                            { content }
                        </div>
                        <div className='modal-footer'>
                            <button type='button' className='btn btn-default' onClick={ this.close }>Закрыть</button>
                            <button type='button' className='btn btn-primary'>{ btnText }</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        modal: state.modal
    };
}
export default connect(mapStateToProps)(ModalForm);
