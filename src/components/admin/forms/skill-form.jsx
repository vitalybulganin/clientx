/**
 * Created by vitalyb on 02.05.2017.
 */
import React, {Component} from 'react';
import {Modal, FormControl, ControlLabel, FormGroup, Button} from 'react-bootstrap';

class SkillForm extends Component
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
            <div className="skill-form" style={{width: '450px'}}>
                <Modal show={this.props.showForm} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <FormGroup bsSize="small">
                            <ControlLabel>Наименование:</ControlLabel>
                            <FormControl type="text" id="name" placeholder="Введите новый навык" defaultValue={this.props.skill.name}/>
                        </FormGroup>

                        <FormGroup bsSize="small">
                            <ControlLabel>Комментарий:</ControlLabel>
                            <FormControl type="textarea" id="comment" placeholder="Комментарий" defaultValue={this.props.skill.comment}/>
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
export default SkillForm;
