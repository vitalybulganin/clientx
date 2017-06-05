/**
 * Created by vitalyb on 11.05.2017.
 */
import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Table from 'react-bootstrap/lib/Table';

/**
 *
 */
var contact = function({...props})
{
    const contacts = props.contacts || [];

    return (
        <div className="contact">
            <Table responsive striped bordered hover>
                <thead>
                    <tr style={{height: '14px'}}>
                        <th>{props.name}</th>
                        <th>Комментарий</th>
                        <th style={{width: '15px', textAlign: 'center'}}>
                            <Button className="add" bsSize="xsmall" bsStyle="success" style={{minWidth: '23px'}}/>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((item) => (
                        <tr key={item.id}>
                            <td>{item.value}</td>
                            <td>{item.comment}</td>
                            <td style={{width: '70px', textAlign: 'center'}}>
                                <Button className="edit" bsSize="xsmall" style={{minWidth: '23px'}}/>
                                <Button className="delete" bsSize="xsmall" bsStyle="danger" style={{minWidth: '23px', marginLeft: '5px'}}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};
export default contact;
