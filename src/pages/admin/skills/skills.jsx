import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {bindAll} from 'lodash';
import {Button, Table} from 'react-bootstrap';

import {getSkills, saveSkills, addSkill, updateSkill, deleteSkill, findSkill} from './actions';
import {SkillForm, openSkillForm} from './forms';
import {Loader} from '../../../components/common';

class SkillsPage extends Component
{
    static path = '/skills';

    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };

    static defaultProps = {
        skill: {
            id: -1,
            name: '',
            comment: ''
        }
    };

    constructor(props, context)
    {
        super(props, context);

        bindAll(this, ['renderSkill', 'onSave']);
    }

    componentDidMount()
    {
        this.props.dispatch(getSkills());
    }

    componentWillUnmount()
    {
        const {skills} = this.props.skills;

        this.props.dispatch(saveSkills(skills));
    }

    onSave(skill)
    {
        this.props.dispatch((skill.id === -1) ? addSkill(skill) : updateSkill(skill));
        // Saving the list of skills.
        this.componentWillUnmount();
    }

    renderSkill(skill)
    {
        return (
            <tr key={skill.id}>
                <td style={{textAlign: 'center'}}>{skill.id}</td>
                <td>{skill.name}</td>
                <td>{skill.comment}</td>
                <td style={{textAlign: 'center'}}>
                    <Button className='edit' bsSize='xsmall' bsStyle='default' style={{minWidth: '23px'}} onClick={() => {this.props.dispatch(openSkillForm(skill));}}/>
                    <Button className='delete' bsSize='xsmall' bsStyle='danger' style={{minWidth: '23px', marginLeft: '5px'}} onClick={() => {this.props.dispatch(deleteSkill(skill));}}/>
                </td>
            </tr>
        );
    }

    render()
    {
        const {skills, loaded} = this.props.skills;
        const {defaultSkill} = SkillsPage.defaultProps;

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
                                <Button className='add' bsSize='xsmall' bsStyle='success' style={{minWidth: '23px'}} onClick={() => {this.props.dispatch(openSkillForm(defaultSkill));}}/>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (loaded !== true) ? <Loader /> : (skills.length !== 0) ? skills.map(this.renderSkill) : null
                        }
                    </tbody>
                </Table>
                <SkillForm onSave={this.onSave}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    skills: state.skills
});
export default connect(mapStateToProps)(SkillsPage);
