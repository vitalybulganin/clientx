import React, {Component, PropTypes} from 'react';
import {Button, Table} from 'react-bootstrap';

import SkillForm from './form/skill-form.jsx';

const data = [
    {
        "id": "1",
        "name": "Сноуборд",
        "comment": ""
    },
    {
        "id": "2",
        "name": "Горные лыжи",
        "comment": ""
    },
    {
        "id": "3",
        "name": "Ролики",
        "comment": ""
    },
    {
        "id": "4",
        "name": "Лонгборд",
        "comment": ""
    },
];

export default class Skills extends Component
{
    static path = '/skills';

    constructor(props, context)
    {
        super(props, context);

        this.state = {
            showForm: false,
            selectedItem: []
        };

        this.onEditItem = this.onEditItem.bind(this);
        this.onDeleteItem = this.onDeleteItem.bind(this);
    }

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
        let items= data || [];
        let formTitle = (this.state.selectedItem !== null) ? 'Редактирование навыка' : 'Создание нового навыка';

        return (
            <div className='clientx-skill'>
                <h1 style={{textAlign: 'center'}}>Список навыков</h1>
                <Table responsive striped bordered hover>
                    <thead>
                    <tr style={{height: '14px'}}>
                        <th style={{width: '100px', textAlign: 'center'}}>#</th>
                        <th style={{width: '500px'}}>Наименование</th>
                        <th>Комментарий</th>
                        <th style={{width: '70px', textAlign: 'center'}}>
                            <Button className='add' bsSize='xsmall' bsStyle='success' style={{minWidth: '23px'}} onClick={() => {this.setState({showForm: true, selectedItem: []})}}/>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td style={{textAlign: 'center'}}>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.comment}</td>
                            <td style={{textAlign: 'center'}}>
                                <Button className='edit' bsSize='xsmall' bsStyle='default' style={{minWidth: '23px'}} onClick={() => {this.setState({showForm: true, selectedItem: item}, this.onEditItem)}}/>
                                <Button className='delete' bsSize='xsmall' bsStyle='danger' style={{minWidth: '23px', marginLeft: '5px'}} onClick={() => {this.setState({selectedItem: item}, this.onDeleteItem)}}/>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                <SkillForm title={formTitle} showForm={this.state.showForm} skill={this.state.selectedItem} close={() => {this.setState({showForm: false, selectedItem: []});}}/>
            </div>
        );
    }
}
