import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {bindAll} from 'lodash';
import {Modal, FormControl, ControlLabel, FormGroup, Button, Checkbox} from 'react-bootstrap';

import {editRateForm, closeRateForm} from './actions';

class RateForm extends Component
{
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        rate: PropTypes.object.isRequired,
        onSave: PropTypes.func.isRequired
    };

    static defaultProps = {
        rate: {

        }
    };

    constructor(props)
    {
        super(props);

        bindAll(this, ['onSave', 'onClose', 'onTextChanged', 'onChanged', 'renderSkill']);
    }

    onChanged(event)
    {
        const {id, value} = event.target;
        const {rate} = this.props.rate;

        switch (id)
        {
            case 'skill':
                rate.skill = value;
                break;

            case 'weekends':
                rate.weekends = (Boolean(rate.weekends) === false);
                break;

            default:
                break;
        }
        this.props.dispatch(editRateForm(rate));
    }

    onTextChanged(event)
    {
        const {id, value} = event.target;
        const {rate} = this.props.rate;

        switch (id)
        {
            case 'name':
                rate.name = value;
                break;

            case 'rate':
                rate.rate = value;
                break;

            case 'students':
                rate.students = Number(value);
                break;

            case 'comment':
                rate.comment = value;
                break;

            default:
                break;
        }
        this.props.dispatch(editRateForm(rate));
    }

    onSave()
    {
        const {rate} = this.props.rate;

        this.props.onSave(rate);
        // Closing the form.
        this.onClose();
    }

    onClose()
    {
        this.props.dispatch(closeRateForm());
    }

    renderSkill(skill)
    {
        return (
            <option key={skill.id}>{skill.name}</option>
        );
    }

    render()
    {
        const {rate, showForm} = this.props.rate;
        const {skills} = this.props.rates;
        const title = (rate.id === -1) ? 'Создание ставки' : 'Редактирование ставки';

        return (
            <div className='rate-form' style={{width: '450px'}}>
                <Modal show={showForm} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <FormGroup bsSize='small'>
                            <ControlLabel>Наименование</ControlLabel>
                            <FormControl type='text' id='name' placeholder='Введите наименование ставки' defaultValue={rate.name} onChange={this.onTextChanged}/>
                        </FormGroup>
                        <FormGroup bsSize='small'>
                            <ControlLabel style={{width: '50%', paddingRight: '10px'}}>Навык
                                <FormControl componentClass='select' id='skill' defaultValue={rate.skill} placeholder='Выберите навык' onChange={this.onChanged}>
                                    { skills.map(this.renderSkill) }
                                </FormControl>
                            </ControlLabel>
                            <ControlLabel style={{width: '50%'}}>Ставка
                                <FormControl type='text' id='rate' placeholder='Базовая ставка' defaultValue={rate.rate} onChange={this.onTextChanged}/>
                            </ControlLabel>
                        </FormGroup>
                        <FormGroup bsSize='small'>
                            <ControlLabel>Доплата</ControlLabel>
                            <FormControl type='text' id='students' placeholder='Доплата' defaultValue={rate.students} onChange={this.onTextChanged}/>
                            {
                                (Boolean(rate.weekends) === true) ? <Checkbox id='weekends' onChange={this.onChanged} checked>Выходные и праздничные дни</Checkbox>
                                                                  : <Checkbox id='weekends' onChange={this.onChanged}>Выходные и праздничные дни</Checkbox>
                            }
                        </FormGroup>

                        <FormGroup bsSize='small'>
                            <ControlLabel>Комментарий</ControlLabel>
                            <FormControl componentClass='textarea' id='comment' placeholder='Комментарий' defaultValue={rate.comment} onChange={this.onTextChanged}/>
                        </FormGroup>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button className='cross' bsStyle='danger' bsSize='xsmall' onClick={this.onClose}>Закрыть</Button>
                        {
                            (rate.name === '') ? <Button className='save' bsStyle='success' bsSize='xsmall' disabled onClick={this.onSave}>Сохранить</Button> :
                                                 <Button className='save' bsStyle='success' bsSize='xsmall' onClick={this.onSave}>Сохранить</Button>
                        }
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    rate: state.rate,
    rates: state.rates
});
export default connect(mapStateToProps)(RateForm);
