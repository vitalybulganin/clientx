import React from 'react';
import {PropTypes} from 'prop-types';
import {bindAll, isEmpty, isObject} from 'lodash';
import {Table, Checkbox} from 'react-bootstrap';

export default class Skills extends React.Component
{
    static propTypes = {
        name: PropTypes.string.isRequired,
        skills: PropTypes.array.isRequired,
        selectedItems: PropTypes.array,
        onChange: PropTypes.func.isRequired
    };

    constructor(props)
    {
        super(props);

        bindAll(this, ['renderSkill']);
    }

    renderSkill(skill)
    {
        let {selectedItems} = this.props; if (isEmpty(selectedItems) !== false && isObject(selectedItems) !== true) { selectedItems = []; }
        const selectedIndex = selectedItems.findIndex(selectedSkill => selectedSkill.id === skill.id);

        return (
            <tr key={skill.id}>
                <td>
                    {
                        (selectedIndex !== -1)
                            ? <Checkbox id='skillId' bsSize='small' checked onChange={() => {this.props.onChange(this, skill);}}>{skill.name}</Checkbox>
                            : <Checkbox id='skillId' bsSize='small' onChange={() => {this.props.onChange(this, skill);}}>{skill.name}</Checkbox>
                    }
                </td>
                <td>{skill.comment}</td>
            </tr>
        );
    }

    render()
    {
        const {skills, name} = this.props;

        return (
            <div className='skills'>
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
