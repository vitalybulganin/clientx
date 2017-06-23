import React from 'react';
import {PropTypes} from 'prop-types';
import {bindAll} from 'lodash';
import {Table, Checkbox} from 'react-bootstrap';

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

        bindAll(this, ['renderRate']);
    }

    onChanged(rate)
    {

    }

    renderRate(rate)
    {
        return (
            <tr style={{height: '14px'}} key={rate.id}>
                <td style={{height: '14px'}}>
                    <Checkbox style={{height: '14px'}} id='rateActive' bsSize='small' onChange={this.onChanged.bind(this, rate)}>{rate.name}</Checkbox>
                </td>
                <td style={{height: '14px'}}>{rate.comment}</td>
            </tr>
        );
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
                        </tr>
                    </thead>
                    <tbody>
                        { rates.map(this.renderRate) }
                    </tbody>
                </Table>
            </div>
        );
    }
}
