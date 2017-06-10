import React, {Component} from 'react';
import {Form, Modal, Button} from 'react-bootstrap';
import {bindAll} from 'lodash';

import './loader.less';

export default class Loader extends Component
{
    constructor(props)
    {
        super(props);

        bindAll(this, ['onClose']);

        this.state = {
            showForm: true
        }
    }

    onClose()
    {
        //<???> this.props.dispatch(closeForm());
        this.setState({showForm: false});
    }

    render()
    {
        return (
            <div className='clientx-loader'>
                <Form>
                    <Modal show={this.state.showForm} onHide={this.onClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Загрузка...</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <span className='clientx-loader-spinner'/>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button className='cancel' bsSize='xsmall' onClick={this.onClose}>Закрыть</Button>
                        </Modal.Footer>
                    </Modal>
                </Form>
            </div>
        );
    }
}; // main
