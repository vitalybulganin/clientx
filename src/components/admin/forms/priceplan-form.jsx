/**
 * Created by vitalyb on 02.05.2017.
 */
import React, {Component} from 'react';
import {Modal, FormControl, ControlLabel, FormGroup, Button, Checkbox} from 'react-bootstrap';

class PricePlanForm extends Component
{
    constructor(props, context)
    {
        super(props, context);

        this.close = this.close.bind(this);
    }

    close() { this.props.close(); }

    render()
    {
        return (
            <div className="rate-form" style={{width: '300px'}}>
                <Modal show={this.props.showForm} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <FormGroup bsSize="small">
                            <ControlLabel>Наименование:</ControlLabel>
                            <FormControl type="text" id="name" placeholder="Введите наименование тарифа" defaultValue={this.props.price.name}/>
                        </FormGroup>
                        <FormGroup bsSize="small">
                            <ControlLabel style={{width: '100px'}}>Начало:
                                <FormControl type="text" id="begin" placeholder="Начало действия" defaultValue={this.props.price.begin}/>
                            </ControlLabel>
                            <ControlLabel style={{marginLeft: '10px', width: '100px'}}>Окончание:
                                <FormControl type="text" id="end" placeholder="Окончание действия" disabled defaultValue={this.props.price.end}/>
                            </ControlLabel>
                            <ControlLabel style={{marginLeft: '5px'}}>
                                <Checkbox>Бессрочно</Checkbox>
                            </ControlLabel>
                        </FormGroup>
                        <FormGroup bsSize="small">
                            <ControlLabel>Кол-во занятий:
                                <FormControl type="text" id="count" style={{textAlign: 'right'}} placeholder="Кол-во" defaultValue={this.props.price.count}/>
                            </ControlLabel>

                            <ControlLabel style={{marginLeft: '10px'}}>Нормочас, руб/ч:
                                <FormControl type="text" id="rate" style={{textAlign: 'right'}} placeholder="" defaultValue={this.props.price.rate}/>
                            </ControlLabel>

                            <ControlLabel style={{marginLeft: '10px'}}>Длительность. мин:
                                <FormControl type="text" id="duration" style={{textAlign: 'right'}} placeholder="Кол-во" defaultValue={this.props.price.count}/>
                            </ControlLabel>
                        </FormGroup>

                        <FormGroup bsSize="small">
                            <ControlLabel>Комментарий:</ControlLabel>
                            <FormControl type="textarea" id="comment" placeholder="Комментарий" defaultValue={this.props.price.comment}/>
                        </FormGroup>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button className="save" type="submit" bsStyle="success" bsSize="xsmall">Сохранить</Button>
                        <Button className="cross" bsSize="xsmall" onClick={this.close}>Закрыть</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    };
};
export default PricePlanForm;
