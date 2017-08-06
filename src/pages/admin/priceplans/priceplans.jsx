import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {bindAll} from 'lodash';
import {Button, Table} from 'react-bootstrap';

import {Loader} from '../../../components/common';

import {PricePlanForm, openPriceForm} from './forms';
import {getPrices, savePrices, addPrice, updatePrice, deletePrice} from './actions';

class PricePlansPage extends Component
{
    static path = '/priceplans';

    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };

    componentDidMount()
    {
        this.props.dispatch(getPrices());
    }

    componentWillUnmount()
    {
        const {prices} = this.props.prices;

        this.props.dispatch(savePrices(prices));
    }

    constructor(props)
    {
        super(props);

        bindAll(this, ['renderPrice', 'onSave']);
    }

    onSave(price)
    {
        this.props.dispatch((price.id === -1) ? addPrice(price) : updatePrice(price));
        // Saving any changes in a storage.
        this.componentWillUnmount();
    }

    renderPrice(price)
    {
        return (
            <tr key={price.id}>
                <td style={{textAlign: 'center'}}>{price.id}</td>
                <td>{price.name}</td>
                <td style={{textAlign: 'center'}}>{price.begin}</td>
                <td style={{textAlign: 'center'}}>{price.end}</td>
                <td style={{textAlign: 'center'}}>{price.count}</td>
                <td style={{textAlign: 'center'}}>{price.duration}</td>
                <td style={{textAlign: 'center'}}>{price.rate}</td>
                <td>{price.comment}</td>
                <td style={{textAlign: 'center'}}>
                    <Button className='edit' bsSize='xsmall' bsStyle='default' style={{minWidth: '23px'}} onClick={() => {this.props.dispatch(openPriceForm(price));}}/>
                    <Button className='delete' bsSize='xsmall' bsStyle='danger' style={{minWidth: '23px', marginLeft: '5px'}} onClick={() => {this.props.dispatch(deletePrice(price));}}/>
                </td>
            </tr>
        );
    }

    render()
    {
        const {prices, loaded} = this.props.prices;

        if (loaded !== true) { return (<Loader />); }

        return (
            <div className='clientx-priceplans'>
                <h1 style={{textAlign: 'center'}}>Список тарифных планов</h1>
                <Table responsive striped bordered hover>
                    <thead>
                        <tr style={{height: '14px'}}>
                            <th style={{width: '100px', textAlign: 'center'}}>#</th>
                            <th style={{width: '450px'}}>Наименование</th>
                            <th style={{width: '100px', textAlign: 'center'}}>Начало</th>
                            <th style={{width: '100px', textAlign: 'center'}}>Окончание</th>
                            <th style={{width: '80px', textAlign: 'center'}}>Кол-во</th>
                            <th style={{width: '150px', textAlign: 'center'}}>Длительность, мин</th>
                            <th style={{width: '200px', textAlign: 'center'}}>Нормочас, руб/ч</th>
                            <th>Комментарий</th>
                            <th style={{width: '100px', textAlign: 'center'}}>
                                <Button className='add' bsSize='xsmall' bsStyle='success' style={{minWidth: '23px'}} onClick={() => {this.props.dispatch(openPriceForm({}));}}/>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        { prices.map(this.renderPrice) }
                    </tbody>
                </Table>
                <PricePlanForm onSave={this.onSave}/>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    prices: state.prices
});
export default connect(mapStateToProps)(PricePlansPage);
