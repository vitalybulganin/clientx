import React, {Component} from 'react';
import {Button, Table} from 'react-bootstrap';

import RateForm from './forms/rate-form.jsx';

const data = [
    {
        "id": "1",
        "name": "Базовая ставка сноубордиста",
        "rate": "600",
        "students": "0",
        "skill": "Сноуборд",
        "wekeends": "Да",
        "comment": ""
    },
    {
        "id": "2",
        "name": "Базовая ставка лыжника",
        "rate": "600",
        "students": "0",
        "skill": "Горные лыжи",
        "wekeends": "Да",
        "comment": ""
    }
];

class Rates extends Component
{
    static path = '/rates';

    state = {
        showForm: false,
        selectedItem: []
    };

    constructor(props, context)
    {
        super(props, context);

        this.close = this.close.bind(this);
        this.onEditItem = this.onEditItem.bind(this);
        this.onDeleteItem = this.onEditItem.bind(this);
    }

    close() { this.setState({showForm: false, selectItem: []}); }

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
        var formTitle = (this.state.selectedItem !== null) ? 'Редактирование ставки' : 'Создание новой ставки';

        return (
            <div className="clientx-rate">
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
                            <Button className="add" bsSize="xsmall" bsStyle="success" style={{minWidth: '23px'}} onClick={() => {this.setState({showForm: true, selectedItem: []})}}/>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td style={{textAlign: 'center'}}>{item.id}</td>
                            <td>{item.name}</td>
                            <td style={{textAlign: 'right'}}>{item.rate}</td>
                            <td style={{textAlign: 'right'}}>{item.students}</td>
                            <td>{item.skill}</td>
                            <td style={{textAlign: 'center'}}>{item.wekeends}</td>
                            <td>{item.comment}</td>
                            <td style={{textAlign: 'center'}}>
                                <Button className="edit" bsSize="xsmall" bsStyle="default" style={{minWidth: '23px'}} onClick={() => {this.setState({showForm: true, selectedItem: item}, this.onEditItem)}}/>
                                <Button className="delete" bsSize="xsmall" bsStyle="danger" style={{minWidth: '23px', marginLeft: '5px'}} onClick={() => {this.setState({selectedItem: item}, this.onDeleteItem)}}/>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                <RateForm title={formTitle} showForm={this.state.showForm} rate={this.state.selectedItem} close={this.close}/>
            </div>
        );
    };
};
export default Rates;
