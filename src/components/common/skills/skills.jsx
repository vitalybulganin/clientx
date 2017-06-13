import React from 'react';
import {PropTypes} from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import Table from 'react-bootstrap/lib/Table';

export default class Skills extends React.Component
{
    static propTypes = {
        name: PropTypes.string.isRequired,
        skills: PropTypes.array.isRequired,
        onOpenSkill: PropTypes.func.isRequired,
        onDeleteSkill: PropTypes.func.isRequired
    };

    constructor(props)
    {
        super(props);
    }

    render()
    {
        const {skills, name} = this.props;

        return (
            <div className='contact'>
                <Table responsive striped bordered hover>
                    <thead>
                        <tr style={{height: '14px'}}>
                            <th>{name}</th>
                            <th>Комментарий</th>
                            <th style={{width: '15px', textAlign: 'center'}}>
                                <Button className='add' bsSize='xsmall' bsStyle='success' style={{minWidth: '23px'}} onClick={() => {this.props.onOpenSkill();}}/>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {skills.map((skill) => (
                            <tr key={skill.id}>
                                <td>{skill.value}</td>
                                <td>{skill.comment}</td>
                                <td style={{width: '70px', textAlign: 'center'}}>
                                    <Button className='edit' bsSize='xsmall' style={{minWidth: '23px'}} onClick={() => {this.props.onOpenSkill(skill);}}/>
                                    <Button className='delete' bsSize='xsmall' bsStyle='danger' style={{minWidth: '23px', marginLeft: '5px'}} onClick={() => {this.props.onDeleteSkill(skill);}}/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}
