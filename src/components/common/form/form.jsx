import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {bindAll} from 'lodash';
import {Form, Modal} from 'react-bootstrap';

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
        const { isOpen, title, content } = this.props.modal;

        if (isOpen !== true) { return null; }

        return (
            <Form>
                <Modal show={isOpen} onHide={this.onClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{ title }</Modal.Title>
                    </Modal.Header>
                    { content }
                </Modal>
            </Form>
        );
    }
}

function mapStateToProps(state) {
    return {
        modal: state.modal
    };
}
export default connect(mapStateToProps)(ModalForm);
