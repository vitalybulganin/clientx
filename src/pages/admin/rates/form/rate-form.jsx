import React, {Component, PropTypes} from 'react';
import {Modal, FormControl, ControlLabel, FormGroup, Button, Checkbox} from 'react-bootstrap';

export default class RateForm extends Component
{
    static propTypes = {
        rate: PropTypes.object,
        title: PropTypes.string,
        showForm: PropTypes.boolean
    };

    static defaultProps = {
        showForm: false
    };

    constructor(props)
    {
        super(props);
    }

    render()
    {
        const {rate, title, showForm} = this.props;

        return (
            <div className='rate-form' style={{width: '450px'}}>
                <Modal show={showForm} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <FormGroup bsSize='small'>
                            <ControlLabel>Наименование:</ControlLabel>
                            <FormControl type='text' id='name' placeholder='Введите наименование ставки' defaultValue={rate.name}/>
                        </FormGroup>
                        <FormGroup bsSize="small">
                            <ControlLabel>Ставка:</ControlLabel>
                            <FormControl type='text' id='name' placeholder='Базовая ставка' defaultValue={rate.rate}/>
                        </FormGroup>
                        <FormGroup bsSize='small'>
                            <ControlLabel>Доплата:</ControlLabel>
                            <FormControl type='text' id='name' placeholder='Доплата' defaultValue={rate.students}/>
                            <Checkbox defaultValue={rate.students}>Выходные и праздничные дни</Checkbox>
                        </FormGroup>

                        <FormGroup bsSize='small'>
                            <ControlLabel>Комментарий:</ControlLabel>
                            <FormControl type='textarea' id='comment' placeholder='Комментарий' defaultValue={rate.comment}/>
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
