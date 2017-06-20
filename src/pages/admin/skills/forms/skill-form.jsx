import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {bindAll} from 'lodash';
import {Modal, FormControl, ControlLabel, FormGroup, Button} from 'react-bootstrap';

import {closeSkillForm} from './actions';

class SkillForm extends Component
{
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        skill: PropTypes.object.isRequired,
        onSave: PropTypes.func.isRequired
    };

    constructor(props)
    {
        super(props);

        bindAll(this, ['onClose', 'onSave', 'onEditText']);

        this.state = {
            skill: {
                id: -1,
                name: '',
                comment: ''
            }
        }
    }

    onClose() { this.props.dispatch(closeSkillForm()); }

    onSave()
    {
        this.props.onSave(this.state.skill);
        // Clear the state.
        this.setState({skill: {}});
        // Closing the form.
        this.onClose();
    }

    onEditText(event)
    {
        const {id, value} = event.target;
        const {skill} = this.props.skill;

        switch (id)
        {
            case 'name':
                skill.name = value;
                break;

            case 'comment':
                skill.comment = value;
                break;

            default:
                console.log('Unknown a component id', id);
                break;
        }
        this.setState({skill});
    }

    render()
    {
        const {skill, showForm} = this.props.skill;
        const title = (skill.id === -1) ? 'Новый навык' : 'Редактирование навыка';

        return (
            <div className='skill-form' style={{width: '450px'}}>
                <Modal show={showForm} onHide={this.onClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <FormGroup bsSize='small'>
                            <ControlLabel>Наименование</ControlLabel>
                            <FormControl type='text' id='name' placeholder='Введите новый навык' defaultValue={skill.name} onChange={this.onEditText}/>
                        </FormGroup>

                        <FormGroup bsSize='small'>
                            <ControlLabel>Комментарий</ControlLabel>
                            <FormControl componentClass='textarea' id='comment' placeholder='Комментарий' defaultValue={skill.comment} onChange={this.onEditText}/>
                        </FormGroup>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button className='cross' bsStyle='danger' bsSize='xsmall' onClick={this.onClose}>Закрыть</Button>
                        {
                            (skill.name === '') ? <Button className='save' bsStyle='success' bsSize='xsmall' disabled onClick={this.onSave}>Сохранить</Button> :
                                                  <Button className='save' bsStyle='success' bsSize='xsmall' onClick={this.onSave}>Сохранить</Button>
                        }
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    skill: state.skill
});
export default connect(mapStateToProps)(SkillForm);
