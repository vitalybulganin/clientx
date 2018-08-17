import React from 'react';
import {PropTypes} from 'prop-types';
import {bindAll, isEmpty, isObject} from 'lodash';
import {Table, Checkbox} from 'react-bootstrap';

export default class Rates extends React.Component
{
    static propTypes = {
        name: PropTypes.string.isRequired,
        rates: PropTypes.array.isRequired,
        selectedItems: PropTypes.array,
        onChange: PropTypes.func.isRequired
    };

    constructor(props)
    {
        super(props);

        bindAll(this, ['renderRate']);
    }

    renderRate(rate)
    {
        let {selectedItems} = this.props; if (isEmpty(selectedItems) !== false && isObject(selectedItems) !== true) { selectedItems = []; }
        const selectedIndex = selectedItems.findIndex(selectedRate => selectedRate.id === rate.id);

        return (
            <tr style={{height: '14px'}} key={rate.id}>
                <td style={{height: '14px'}}>
                    {
                        (selectedIndex !== -1)
                            ? <Checkbox style={{height: '14px'}} id='rateId' bsSize='small' checked onChange={() => {this.props.onChange(this, rate);}}>{rate.name}</Checkbox>
                            : <Checkbox style={{height: '14px'}} id='rateId' bsSize='small' onChange={() => {this.props.onChange(this, rate);}}>{rate.name}</Checkbox>
                    }
                </td>
                <td style={{height: '14px'}}>{rate.comment}</td>
            </tr>
        );
    }

    render()
    {
        const {rates, name} = this.props;

        return (
            <div className='rates'>
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
