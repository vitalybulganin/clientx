/**
 * Created by vitalyb on 02.05.2017.
 */
import React, {Component, PropTypes} from 'react';
import {Modal, FormControl, ControlLabel, FormGroup, Button} from 'react-bootstrap';

export default class SkillForm extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        const {title, skill, showForm} = this.props;

        return (
            <div className='skill-form' style={{width: '450px'}}>
                <Modal show={showForm} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <FormGroup bsSize='small'>
                            <ControlLabel>Наименование:</ControlLabel>
                            <FormControl type='text' id='name' placeholder='Введите новый навык' defaultValue={skill.name}/>
                        </FormGroup>

                        <FormGroup bsSize='small'>
                            <ControlLabel>Комментарий:</ControlLabel>
                            <FormControl type='textarea' id='comment' placeholder='Комментарий' defaultValue={skill.comment}/>
                        </FormGroup>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button className='save' bsStyle='success' bsSize='xsmall'>Сохранить</Button>
                        <Button className='cross' bsSize='xsmall' onClick={() => {this.props.close();}}>Закрыть</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
