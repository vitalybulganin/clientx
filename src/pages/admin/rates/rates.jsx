import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {bindAll} from 'lodash';
import {Button, Table} from 'react-bootstrap';

import {Loader} from '../../../components/common';
import {RateForm, openRateForm} from './forms';
import {getRates, addRate, deleteRate, updateRate, saveRates} from './actions';

class RatesPage extends Component
{
    static path = '/rates';

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        rates: PropTypes.array.isRequired
    };

    static defaultProps = {
        reates: []
    };

    componentDidMount()
    {
        this.props.dispatch(getRates());
    }

    componentWillUnmount()
    {
        const {rates} = this.props.rates;

        this.props.dispatch(saveRates(rates));
    }

    constructor(props)
    {
        super(props);

        bindAll(this, ['renderRate', 'onSave']);
    }

    onSave(rate)
    {
        this.props.dispatch((rate.id === -1) ? addRate(rate) : updateRate(rate));
        // Saving the list of skills.
        this.componentWillUnmount();
    }

    renderRate(rate)
    {
        return (
            <tr key={rate.id}>
                <td style={{textAlign: 'center'}}>{rate.id}</td>
                <td>{rate.name}</td>
                <td style={{textAlign: 'right'}}>{rate.rate}</td>
                <td style={{textAlign: 'right'}}>{rate.students}</td>
                <td>{rate.skill}</td>
                <td style={{textAlign: 'center'}}>{(Boolean(rate.weekends) !== false) ? 'Да' : 'Нет'}</td>
                <td>{rate.comment}</td>
                <td style={{textAlign: 'center'}}>
                    <Button className='edit' bsSize='xsmall' bsStyle='default' style={{minWidth: '23px'}} onClick={() => {this.props.dispatch(openRateForm(rate));}}/>
                    <Button className='delete' bsSize='xsmall' bsStyle='danger' style={{minWidth: '23px', marginLeft: '5px'}} onClick={() => {this.props.dispatch(deleteRate(rate));}}/>
                </td>
            </tr>
        );
    }

    render()
    {
        const {rates, loaded} = this.props.rates;

        if (loaded !== true) { return (<Loader />); }

        return (
            <div className='clientx-rate'>
                <h1 style={{textAlign: 'center'}}>Список ставок</h1>
                <Table responsive striped bordered hover>
                    <thead>
                        <tr style={{height: '14px'}}>
                            <th style={{width: '100px', textAlign: 'center'}}>#</th>
                            <th style={{width: '500px'}}>Наименование</th>
                            <th style={{width: '150px', textAlign: 'center'}}>Ставка, руб/ч</th>
                            <th style={{width: '100px', textAlign: 'center'}}>Доплата</th>
                            <th style={{width: '150px'}}>Навык</th>
                            <th style={{width: '100px', textAlign: 'center'}}>Выходные</th>
                            <th>Комментарий</th>
                            <th style={{width: '100px', textAlign: 'center'}}>
                                <Button className='add' bsSize='xsmall' bsStyle='success' style={{minWidth: '23px'}}
                                        onClick={() => {this.props.dispatch(openRateForm());}}/>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        { rates.map(this.renderRate) }
                    </tbody>
                </Table>
                <RateForm onSave={this.onSave}/>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    rates: state.rates
});
export default connect(mapStateToProps)(RatesPage);
