import React from 'react';
import {PropTypes} from 'prop-types';
import {bindAll} from 'lodash';
import {Table, Checkbox} from 'react-bootstrap';

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

        bindAll(this, ['renderSkill']);
    }

    onChanged(skill)
    {

    }

    renderSkill(skill)
    {
        return (
            <tr key={skill.id}>
                <td>
                    <Checkbox id='skillActive' bsSize='small' onChange={this.onChanged.bind(this, skill)}>{skill.name}</Checkbox>
                </td>
                <td>{skill.comment}</td>
            </tr>
        );
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
                        </tr>
                    </thead>
                    <tbody>
                        { skills.map(this.renderSkill) }
                    </tbody>
                </Table>
            </div>
        );
    }
}
