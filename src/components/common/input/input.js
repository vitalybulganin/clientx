import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import classnames from 'classnames';
import {bindAll} from 'lodash';

export default class Input extends Component
{
    static propTypes = {
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        divClasses: PropTypes.string,
        error: PropTypes.string
    };

    constructor(props)
    {
        super(props);

        const {value} = this.props;
        this.state = {value};

        bindAll(this, ['onChange']);
    }

    onChange(event)
    {
        const {value} = event.target;
        this.props.onChange(event);
        this.setState({value});
    }

    render()
    {
        const divClasses = classnames({
            'form-group': true,
            'has-error': this.props.error ? true : false
        });
        const {value, error} = this.props;

        return (
            <div className={divClasses}>
                <input className='form-control' type='text' value={value} onChange={this.onChange}/>
                {error ? <span className='help-block'>{error}</span> : null}
            </div>
        );
    }
}
