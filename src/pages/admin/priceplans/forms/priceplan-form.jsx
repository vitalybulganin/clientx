import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {bindAll} from 'lodash';
import {Modal, FormControl, ControlLabel, FormGroup, Button, Checkbox} from 'react-bootstrap';

import {closePriceForm, editPriceForm} from './actions';

class PricePlanForm extends Component
{
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        price: PropTypes.object.isRequired,
        onSave: PropTypes.func.isRequired
    };

    static defaultProps = {
        showForm: false,
        price: {
            id: 0,
            name: '',
            begin: new Date().toLocaleDateString(),
            end: null,
            count: 8,
            duration: 60,
            rate: 1600,
            comment: ''
        }
    };

    constructor(props)
    {
        super(props);

        bindAll(this, ['onSave', 'onClose', 'onTextChanged']);
    }

    onTextChanged(event)
    {
        const {id, value} = event.target;
        const {price} = this.props.price;

        switch (id)
        {
            case 'name':
                price.name = value;
                break;

            case 'begin':
                price.begin = value;
                break;

            case 'end':
                price.end = value;
                break;

            case 'count':
                price.count = value;
                break;

            case 'rate':
                price.rate = value;
                break;

            case 'duration':
                price.duration = value;
                break;

            case 'comment':
                price.comment = value;
                break;

            case 'checkedEnd':
                price.checked = (Boolean(price.checked) === false);
                break;

            default:
                console.log('Unknown component id', id);
                break;
        }
        this.props.dispatch(editPriceForm(price));
    }

    onSave()
    {
        const {price} = this.props.price;

        this.props.onSave(price);
        this.onClose();
    }

    onClose()
    {
        this.props.dispatch(closePriceForm());
    }

    render()
    {
        const {price, showForm, error} = this.props.price;
        const title = (price.id === -1) ? 'Добавить новый тарифный план' : 'Редактирование тарифного плана';

        return (
            <div className='rate-form' style={{width: '300px'}}>
                <Modal show={showForm} onHide={this.onClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <FormGroup bsSize='small'>
                            <ControlLabel>Наименование</ControlLabel>
                            <FormControl type='text' id='name' placeholder='Введите наименование тарифного плана' defaultValue={price.name} onChange={this.onTextChanged}/>
                        </FormGroup>
                        <FormGroup bsSize='small'>
                            <ControlLabel style={{width: '100px'}}>Начало
                                <FormControl type='text' id='begin' placeholder='Начало действия' defaultValue={price.begin} onChange={this.onTextChanged}/>
                            </ControlLabel>
                            <ControlLabel style={{marginLeft: '10px', width: '100px'}}>Окончание
                                {
                                    (price.checked === true) ? <FormControl type='text' id='end' placeholder='Окончание действия' disabled defaultValue={price.end !== null ? price.end : ''} onChange={this.onTextChanged}/>
                                                             : <FormControl type='text' id='end' placeholder='Окончание действия' defaultValue={price.end !== null ? price.end : ''} onChange={this.onTextChanged}/>
                                }
                            </ControlLabel> 
                            <ControlLabel style={{marginLeft: '5px'}}>
                                {price.checked === true ? <Checkbox id='checkedEnd' onChange={this.onTextChanged} checked>Бессрочно</Checkbox> : <Checkbox id='checkedEnd' onChange={this.onTextChanged}>Бессрочно</Checkbox> }
                            </ControlLabel>
                        </FormGroup>
                        <FormGroup bsSize='small'>
                            <ControlLabel>Кол-во занятий
                                <FormControl type='text' id='count' style={{textAlign: 'right'}} placeholder='Кол-во занятий' defaultValue={price.count} onChange={this.onTextChanged}/>
                            </ControlLabel>

                            <ControlLabel style={{marginLeft: '10px'}}>Нормочас, руб/ч
                                <FormControl type='text' id='rate' style={{textAlign: 'right'}} placeholder='Стоимость за час' defaultValue={price.rate} onChange={this.onTextChanged}/>
                            </ControlLabel>

                            <ControlLabel style={{marginLeft: '10px', width: '30%'}}>Длительность. мин
                                <FormControl type='text' id='duration' style={{textAlign: 'right'}} placeholder='Длительность занятия' defaultValue={price.duration} onChange={this.onTextChanged}/>
                            </ControlLabel>
                        </FormGroup>

                        <FormGroup bsSize='small'>
                            <ControlLabel>Комментарий</ControlLabel>
                            <FormControl componentClass='textarea' id='comment' placeholder='Комментарий' defaultValue={price.comment} onChange={this.onTextChanged}/>
                        </FormGroup>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button className='cross' bsStyle='danger' bsSize='xsmall' onClick={this.onClose}>Закрыть</Button>
                        {
                            ((price.name === '' || price.begin === '') || (price.checked === false && (price.end === '' || price.end === null)))
                                ? <Button className='save' type='submit' bsStyle='success' bsSize='xsmall' disabled onClick={this.onSave}>Сохранить</Button>
                                : <Button className='save' type='submit' bsStyle='success' bsSize='xsmall' onClick={this.onSave}>Сохранить</Button>
                        }
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    price: state.price
});
export default connect(mapStateToProps)(PricePlanForm);
