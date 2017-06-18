import React from 'react';
import {PropTypes} from 'prop-types';
import {bindAll} from 'lodash';
import Button from 'react-bootstrap/lib/Button';
import Table from 'react-bootstrap/lib/Table';

export default class Contact extends React.Component
{
    static propTypes = {
        name: PropTypes.string.isRequired,
        contacts: PropTypes.array.isRequired,
        onOpenContact: PropTypes.func.isRequired,
        onDeleteContact: PropTypes.func.isRequired,
        onSaveContact: PropTypes.func.isRequired
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

        bindAll(this, ['renderContact']);

        this.state = {
            contact: Contact.defaultProps.contact
        };
    }

    renderContact(contact)
    {
        return (
            <tr key={contact.id}>
                <td>{contact.value}</td>
                <td>{contact.comment}</td>
                <td style={{width: '70px', textAlign: 'center'}}>
                    <Button className='edit' bsSize='xsmall' style={{minWidth: '23px'}}
                            onClick={() => {this.props.onOpenContact(contact);}}/>
                    <Button className='delete' bsSize='xsmall' bsStyle='danger' style={{minWidth: '23px', marginLeft: '5px'}}
                            onClick={() => {this.props.onDeleteContact(contact);}}/>
                </td>
            </tr>
        );
    }

    render()
    {
        const {contacts, name} = this.props;
        const defaultContact = {
            contact: {
                id: -1,
                type: 'Мобильный',
                value: '',
                comment: ''
            }
        };

        return (
            <div className='contact'>
                <Table responsive striped bordered hover>
                    <thead>
                        <tr style={{height: '14px'}}>
                            <th>{name}</th>
                            <th>Комментарий</th>
                            <th style={{width: '15px', textAlign: 'center'}}>
                                <Button className='add' bsSize='xsmall' bsStyle='success' style={{minWidth: '23px'}}
                                        onClick={() => {this.props.onOpenContact(defaultContact);}}/>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        { contacts.map(this.renderContact) }
                    </tbody>
                </Table>
            </div>
        );
    }
}
