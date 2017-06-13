import React from 'react';
import {PropTypes} from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import Table from 'react-bootstrap/lib/Table';

export default class PricePlans extends React.Component
{
    static propTypes = {
        name: PropTypes.string.isRequired,
        priceplans: PropTypes.array.isRequired,
        onOpenPrice: PropTypes.func.isRequired,
        onDeletePrice: PropTypes.func.isRequired
    };

    constructor(props)
    {
        super(props);
    }

    render()
    {
        const {contacts, name} = this.props;

        return (
            <div className='contact'>
                <Table responsive striped bordered hover>
                    <thead>
                        <tr style={{height: '14px'}}>
                            <th>{name}</th>
                            <th>Комментарий</th>
                            <th style={{width: '15px', textAlign: 'center'}}>
                                <Button className='add' bsSize='xsmall' bsStyle='success' style={{minWidth: '23px'}} onClick={() => {this.props.onOpenPrice();}}/>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {priceplans.map((price) => (
                            <tr key={price.id}>
                                <td>{price.value}</td>
                                <td>{price.comment}</td>
                                <td style={{width: '70px', textAlign: 'center'}}>
                                    <Button className='edit' bsSize='xsmall' style={{minWidth: '23px'}} onClick={() => {this.props.onOpenPrice(price);}}/>
                                    <Button className='delete' bsSize='xsmall' bsStyle='danger' style={{minWidth: '23px', marginLeft: '5px'}} onClick={() => {this.props.onDeletePrice(price);}}/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}
