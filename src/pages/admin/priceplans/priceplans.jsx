import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {Button, Table} from 'react-bootstrap';
import {bindAll} from 'lodash';

import {PricePlanForm} from './form';

const date = new Date();

const data = [
    {
        id: 1,
        name: 'VIP абонемент на 8 занятий в любой день',
        begin: '20.11.2016',
        end: null,
        count: 8,
        duration: 90,
        rate: 2500,
        comment: ''
    },
    {
        id: 2,
        name: 'VIP абонемент на 8 занятий в любой день',
        begin: '20.11.2016',
        end: null,
        count: 8,
        duration: 60,
        rate: 1500,
        comment: ''
    },
    {
        id: 3,
        name: 'VIP абонемент на 8 занятий в любой день',
        begin: '20.11.2016',
        end: null,
        count: 4,
        duration: 120,
        rate: 4500,
        comment: ''
    },
    {
        id: 4,
        name: 'VIP абонемент на 8 занятий в любой день',
        begin: '20.11.2016',
        end: '25.04.2017',
        count: 8,
        duration: 90,
        rate: 2500,
        comment: ''
    }
];

export default class PricePlansPage extends Component
{
    static path = '/priceplans';

    constructor(props)
    {
        super(props);

        bindAll(this, ['onEditItem', 'onDeleteItem', 'onSave', 'onClose']);

        this.state = {
            showForm: false,
            items: data,
            selectedItem: {}
        };
    }

    onEditItem()
    {
        console.debug('Selected price plan is', this.state.selectedItem, this.state.showForm);
    }

    onDeleteItem()
    {
        console.debug(this.state.selectedItem, this.state.showForm);
    }

    onSave(price)
    {
        console.log('Price', price);
        // Closing the form.
        this.setState({showForm: false});

    }

    onClose()
    {
        this.setState({showForm: false, selectedItem: {}});
    }

    render()
    {
        const {items, selectedItem, showForm} = this.state;

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
                            <th style={{width: '150px', textAlign: 'center'}}>Занятие, мин</th>
                            <th style={{width: '200px', textAlign: 'center'}}>Нормочас, руб/ч</th>
                            <th>Комментарий</th>
                            <th style={{width: '100px', textAlign: 'center'}}>
                                <Button className='add' bsSize='xsmall' bsStyle='success' style={{minWidth: '23px'}} onClick={() => {this.setState({showForm: true, selectedItem: {}})}}/>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <tr key={item.id}>
                                <td style={{textAlign: 'center'}}>{item.id}</td>
                                <td>{item.name}</td>
                                <td style={{textAlign: 'center'}}>{item.begin}</td>
                                <td style={{textAlign: 'center'}}>{item.end}</td>
                                <td style={{textAlign: 'center'}}>{item.count}</td>
                                <td style={{textAlign: 'center'}}>{item.duration}</td>
                                <td style={{textAlign: 'center'}}>{item.rate}</td>
                                <td>{item.comment}</td>
                                <td style={{textAlign: 'center'}}>
                                    <Button className='edit' bsSize='xsmall' bsStyle='default' style={{minWidth: '23px'}} onClick={() => {this.setState({showForm: true, selectedItem: item}, this.onEditItem)}}/>
                                    <Button className='delete' bsSize='xsmall' bsStyle='danger' style={{minWidth: '23px', marginLeft: '5px'}} onClick={() => {this.setState({selectedItem: item}, this.onDeleteItem)}}/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <PricePlanForm showForm={showForm} price={selectedItem} onSave={this.onSave} onClose={this.onClose}/>
            </div>
        );
    };
};
