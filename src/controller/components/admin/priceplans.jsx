/**
 * Created by vitalyb on 02.05.2017.
 */
import React, {Component} from 'react';
import {ButtonGroup, Button, Table} from 'react-bootstrap';

import PricePlanForm from './forms/priceplan-form';

import '../../../../libs/css/clients.css';

const data = [
    {
        "id": "1",
        "name": "Абонемент на 8 занятий",
        "begin": "20.11.2017",
        "end": "",
        "count": "8",
        "duration": "90",
        "rate": "1500",
        "comment": ""
    },
    {
        "id": "2",
        "name": "Абонемент на 5 занятий",
        "begin": "20.11.2017",
        "end": "",
        "count": "5",
        "duration": "90",
        "rate": "1500",
        "comment": ""
    },
    {
        "id": "3",
        "name": "Абонемент выходного дня на 8 занятий",
        "begin": "20.11.2017",
        "end": "",
        "count": "8",
        "duration": "90",
        "rate": "2000",
        "comment": ""
    },
    {
        "id": "4",
        "name": "VIP абонемент на 8 занятий в любой день",
        "begin": "20.11.2017",
        "end": "",
        "count": "8",
        "duration": "90",
        "rate": "2500",
        "comment": ""
    }
];

class PricePlans extends Component
{
    state = {
        showForm: false,
        selectedItem: []
    }

    constructor(props, context)
    {
        super(props, context)

        this.close = this.close.bind(this);
        this.onEditItem = this.onEditItem.bind(this);
        this.onDeleteItem = this.onEditItem.bind(this);
    }

    close() { this.setState({showForm: false, selectedItem: []}); }
    onEditItem()
    {
        console.debug(this.state.selectedItem, this.state.showForm);
    }

    onDeleteItem()
    {
        console.debug(this.state.selectedItem, this.state.showForm);
    }

    render()
    {
        var items= data || [];
        var formTitle = (this.state.selectedItem !== null) ? 'Редактирование тарифного плана' : 'Создание новой тарифного плана';

        return (
            <div className="clientx-priceplans">
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
                            <Button className="add" bsSize="xsmall" bsStyle="success" style={{minWidth: '23px'}} onClick={() => {this.setState({showForm: true, selectedItem: []})}}/>
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
                                <Button className="edit" bsSize="xsmall" bsStyle="default" style={{minWidth: '23px'}} onClick={() => {this.setState({showForm: true, selectedItem: item}, this.onEditItem)}}/>
                                <Button className="delete" bsSize="xsmall" bsStyle="danger" style={{minWidth: '23px', marginLeft: '5px'}} onClick={() => {this.setState({selectedItem: item}, this.onDeleteItem)}}/>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                <PricePlanForm title={formTitle} showForm={this.state.showForm} price={this.state.selectedItem} close={this.close}/>
            </div>
        );
    };
};
export default PricePlans;