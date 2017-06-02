/**
 * Created by vitalyb on 02.05.2017.
 */
import React, {Component} from 'react';
import {Modal, FormControl, ControlLabel, FormGroup, Button, Checkbox} from 'react-bootstrap';

class RateForm extends Component
{
    constructor(props, context)
    {
        super(props, context);

        this.close = this.close.bind(this);
    }

    close() { this.props.close(); }

    render()
    {
        console.debug(this.props.showForm);

        return (
            <div className="rate-form" style={{width: '450px'}}>
                <Modal show={this.props.showForm} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <FormGroup bsSize="small">
                            <ControlLabel>Наименование:</ControlLabel>
                            <FormControl type="text" id="name" placeholder="Введите наименование ставки" defaultValue={this.props.rate.name}/>
                        </FormGroup>
                        <FormGroup bsSize="small">
                            <ControlLabel>Ставка:</ControlLabel>
                            <FormControl type="text" id="name" placeholder="Базовая ставка" defaultValue={this.props.rate.rate}/>
                        </FormGroup>
                        <FormGroup bsSize="small">
                            <ControlLabel>Доплата:</ControlLabel>
                            <FormControl type="text" id="name" placeholder="Доплата" defaultValue={this.props.rate.students}/>
                            <Checkbox defaultValue={this.props.rate.students}>Выходные и праздничные дни</Checkbox>
                        </FormGroup>

                        <FormGroup bsSize="small">
                            <ControlLabel>Комментарий:</ControlLabel>
                            <FormControl type="textarea" id="comment" placeholder="Комментарий" defaultValue={this.props.rate.comment}/>
                        </FormGroup>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button className="save" bsStyle="success" bsSize="xsmall">Сохранить</Button>
                        <Button className="cross" bsSize="xsmall" onClick={this.close}>Закрыть</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    };
};
export default RateForm;
