import React from 'react';
import {PropTypes} from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import Table from 'react-bootstrap/lib/Table';

export default class Rates extends React.Component
{
    static propTypes = {
        name: PropTypes.string.isRequired,
        rates: PropTypes.array.isRequired,
        onOpenRate: PropTypes.func.isRequired,
        onDeleteRate: PropTypes.func.isRequired
    };

    constructor(props)
    {
        super(props);
    }

    render()
    {
        const {rates, name} = this.props;

        return (
            <div className='contact'>
                <Table responsive striped bordered hover>
                    <thead>
                        <tr style={{height: '14px'}}>
                            <th>{name}</th>
                            <th>Комментарий</th>
                            <th style={{width: '15px', textAlign: 'center'}}>
                                <Button className='add' bsSize='xsmall' bsStyle='success' style={{minWidth: '23px'}} onClick={() => {this.props.onOpenRate();}}/>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {rates.map((rate) => (
                            <tr key={rate.id}>
                                <td>{rate.value}</td>
                                <td>{rate.comment}</td>
                                <td style={{width: '70px', textAlign: 'center'}}>
                                    <Button className='edit' bsSize='xsmall' style={{minWidth: '23px'}} onClick={() => {this.props.onOpenRate(rate);}}/>
                                    <Button className='delete' bsSize='xsmall' bsStyle='danger' style={{minWidth: '23px', marginLeft: '5px'}} onClick={() => {this.props.onDeleteRate(rate);}}/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}
