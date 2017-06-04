import React, {Component, PropTypes} from 'react';
import {Modal, FormControl, ControlLabel, FormGroup, Button, Checkbox} from 'react-bootstrap';
import {bindAll} from 'lodash';
import {Input} from '../../../../components/common';

export default class PricePlanForm extends Component
{
    static propTypes = {
        price: PropTypes.object.isRequired,
        onClose: PropTypes.func.isRequired,
        onSave: PropTypes.func.isRequired,
        showForm: PropTypes.boolean,
        title: PropTypes.string
    };

    static defaultProps = {
        showForm: false,
        title: '',
        price: {}
    };

    constructor(props)
    {
        super(props);

        bindAll(this, ['onChange', 'onSave', 'onClose']);

        this.state = {
            price: {},
            error: ''
        };
    }

    onChange(value)
    {
        // this.price.setState({name: value});
        this.setState({error: value ? '' : 'Наименование не может быть пустым'});
    }

    onSave()
    {
        const {price} = this.state;
        console.log('Price: ', price.name);

        if (price === null || (price !== null && !price.name))
        {
            this.setState({error: 'Наименование не может быть пустым'});
            return;
        }
        this.props.onSave(price);
        this.setState({price, error: '', showForm: false});
    }

    onClose() { this.props.onClose(); }

    render()
    {
        const {title, price, error} = this.state;

        return (
            <div className='rate-form' style={{width: '300px'}}>
                <Modal show={this.props.showForm} onHide={this.onClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <FormGroup bsSize='small'>
                            <ControlLabel>Наименование:</ControlLabel>
                            {/*<FormControl type='text' id='name' placeholder='Введите наименование тарифа' defaultValue={price.name}/>*/}
                            <Input onChange={this.onChange} value={price ? price.name : ''} error={error}/>
                        </FormGroup>
                        <FormGroup bsSize='small'>
                            <ControlLabel style={{width: '100px'}}>Начало:
                                <FormControl type='text' id='begin' placeholder='Начало действия' defaultValue={price.begin}/>
                            </ControlLabel>
                            <ControlLabel style={{marginLeft: '10px', width: '100px'}}>Окончание:
                                <FormControl type='text' id='end' placeholder='Окончание действия' disabled defaultValue={price.end}/>
                            </ControlLabel>
                            <ControlLabel style={{marginLeft: '5px'}}>
                                <Checkbox>Бессрочно</Checkbox>
                            </ControlLabel>
                        </FormGroup>
                        <FormGroup bsSize='small'>
                            <ControlLabel>Кол-во занятий:
                                <FormControl type='text' id='count' style={{textAlign: 'right'}} placeholder='Кол-во' defaultValue={price.count}/>
                            </ControlLabel>

                            <ControlLabel style={{marginLeft: '10px'}}>Нормочас, руб/ч:
                                <FormControl type='text' id='rate' style={{textAlign: 'right'}} placeholder='' defaultValue={price.rate}/>
                            </ControlLabel>

                            <ControlLabel style={{marginLeft: '10px'}}>Длительность. мин:
                                <FormControl type='text' id='duration' style={{textAlign: 'right'}} placeholder='Кол-во' defaultValue={price.count}/>
                            </ControlLabel>
                        </FormGroup>

                        <FormGroup bsSize='small'>
                            <ControlLabel>Комментарий:</ControlLabel>
                            <FormControl type='textarea' id='comment' placeholder='Комментарий' defaultValue={price.comment}/>
                        </FormGroup>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button className='save' type='submit' bsStyle='success' bsSize='xsmall' onClick={this.onSave}>Сохранить</Button>
                        <Button className='cross' bsSize='xsmall' onClick={this.onClose}>Закрыть</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
