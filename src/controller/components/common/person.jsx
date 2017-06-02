/**
 * Created by vitalyb on 11.05.2017.
 */
import React, {Component} from 'react';
import {FormControl, ControlLabel, FormGroup, Radio, Pane} from 'react-bootstrap';

var person = function({...props})
{
    var male = "", female = "";

    if (props.client.gender === "M") { male="checked"; }
    if (props.client.gender === "F") { female="checked"; }

    return (
        <div className="person-fields">
            <FormGroup bsSize="small">
                <FormGroup bsSize="small">
                    <ControlLabel>Фамилия:</ControlLabel>
                    <FormControl id="lastName" type="text" bsSize="small" defaultValue={props.client.lastName}/>
                </FormGroup>
                <FormGroup bsSize="small">
                    <ControlLabel>Имя:</ControlLabel>
                    <FormControl id="firstName" type="text" defaultValue={props.client.firstName}/>
                </FormGroup>
                <FormGroup bsSize="small">
                    <ControlLabel style={{width: '75%', paddingRight: '10px'}}>Отчество:
                        <FormControl id="secondName" type="text" defaultValue={props.client.secondName}/>
                    </ControlLabel>
                    <ControlLabel style={{width: '25%'}}>Дата рождения:
                        <FormControl id="birthday" type="text" defaultValue={props.client.birthday}/>
                    </ControlLabel>
                </FormGroup>
                <FormGroup bsSize="small">
                    <Radio id="radioMale" name="radioGroup" style={{checked: 'true'}} inline>Мужской</Radio>
                    <Radio id="radioFemale" name="radioGroup" inline>Женский</Radio>
                </FormGroup>
            </FormGroup>
        </div>
    );
}
export default person;