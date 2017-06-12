import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {bindAll} from 'lodash';
import {FormControl, ControlLabel, FormGroup, Radio, Pane} from 'react-bootstrap';

export default class Person extends Component
{
    static propTypes = {
        client: PropTypes.object,
        onChange: PropTypes.func.isRequired
    };

    static defaultProps = {
        client: {lastName: '', firstName: '', secondName: '', birthday: new Date()}
    };

    constructor(props)
    {
        super(props);

        bindAll(this, ['onChange']);
    }

    onChange(event)
    {
        const {id, value} = event.target;

        this.props.onChange(id, value);
    }

    render()
    {
        const {client} = this.props;

        return (
            <div className='person-fields'>
                <FormGroup bsSize='small'>
                    <FormGroup bsSize='small'>
                        <ControlLabel style={{width: '50%', paddingRight: '10px'}}>Фамилия:
                            <FormControl id='lastName' type='text' bsSize='small' defaultValue={client.lastName} onChange={this.onChange}/>
                        </ControlLabel>
                        <ControlLabel style={{width: '50%'}}>Имя:
                            <FormControl id='firstName' type='text' defaultValue={client.firstName} onChange={this.onChange}/>
                        </ControlLabel>
                    </FormGroup>
                    <FormGroup bsSize='small'>
                        <ControlLabel style={{width: '75%', paddingRight: '10px'}}>Отчество:
                            <FormControl id='secondName' type='text' defaultValue={client.secondName} onChange={this.onChange}/>
                        </ControlLabel>
                        <ControlLabel style={{width: '25%'}}>Дата рождения:
                            <FormControl id='birthday' type='text' defaultValue={client.birthday} onChange={this.onChange}/>
                        </ControlLabel>
                    </FormGroup>
                    <FormGroup bsSize='small'>
                        {client.gender === 'M' ? <Radio id='radioMale' name='radioGroup' onChange={this.onChange} checked inline>Мужской</Radio> : <Radio id='radioMale' name='radioGroup' onChange={this.onChange} inline>Мужской</Radio>}
                        {client.gender === 'F' ? <Radio id='radioFemale' name='radioGroup' onChange={this.onChange} checked inline>Женский</Radio> : <Radio id='radioFemale' name='radioGroup' onChange={this.onChange} inline>Женский</Radio>}
                    </FormGroup>
                </FormGroup>
            </div>
        );
    }
}
