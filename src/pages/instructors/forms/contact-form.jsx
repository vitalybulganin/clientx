import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {bindAll} from 'lodash';
import {Modal, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

import {closeModal} from '../../../components';

class ContactForm extends Component
{
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        contact: PropTypes.object.isRequired,
        onSave: PropTypes.func.isRequired
    };

    static defaultProps = {
        contact: {
            id: -1,
            type: 'Мобильный',
            value: '',
            comment: ''
        }
    };

    constructor(props)
    {
        super(props);

        bindAll(this, ['onSave', 'onClose'], 'onTextChanged');

        this.state = {
            types: [
                {
                    id: 1,
                    name: 'Мобильный'
                },
                {
                    id: 2,
                    name: 'Рабочий'
                },
                {
                    id: 3,
                    name: 'Почта'
                }
            ]
        };
    }

    onTextChanged(event)
    {
        const {id, value} = event.target;
        const {contact} = this.props;

        switch (id)
        {
            case 'type':
                contact.type = value;
                break;

            case 'contact':
                contact.value = value;
                break;

            case 'comment':
                contact.comment = value;
                break;

            default:
                console.error('Unknown component id', id);
                break;
        }
        this.setState({contact});
    }

    onSave()
    {
        const {contact} = this.props;
        // Saving the contact.
        this.props.onSave(contact);
        // Closing the form.
        this.onClose();
    }

    onClose()
    {
        const {contact} = ContactForm.defaultProps;

        this.props.dispatch(closeModal());
        this.setState({contact});
    }

    render()
    {
        let {contact} = this.props;
        console.log('Selected contact', contact);
        if (contact === null) { contact = defaultProps.contact; }


        return (
            <div className='clientx-form'>
                <Modal.Body>
                    <FormGroup bsSize='small'>
                        <ControlLabel style={{width: '50%', paddingRight: '10px'}}>Тип контакта:
                            <FormControl componentClass='select' id='type' defaultValue={contact.type} placeholder='Выберите тип контакта' onChange={this.onTextChanged}>
                                { this.state.types.map((type) => (<option key={type.id}>{type.name}</option>)) }
                            </FormControl>
                        </ControlLabel>
                        <ControlLabel style={{width: '50%'}}>Контакт:
                            <FormControl type='text' id='contact' defaultValue={contact.value} onChange={this.onTextChanged}/>
                        </ControlLabel>
                    </FormGroup>
                    <FormGroup bsSize='small'>
                        <ControlLabel>Комментарий:</ControlLabel>
                        <FormControl componentClass='textarea' id='comment' placeholder='Комментарий' defaultValue={contact.comment} onChange={this.onTextChanged}/>
                    </FormGroup>
                </Modal.Body>

                <Modal.Footer>
                    <Button className='cross' bsStyle='danger' bsSize='xsmall' onClick={this.onClose}>Закрыть</Button>
                    <Button className='save' bsStyle='success' bsSize='xsmall' onClick={this.onSave}>Сохранить</Button>
                </Modal.Footer>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
});
export default connect(mapStateToProps)(ContactForm);
