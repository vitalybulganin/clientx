import React, {Component, PropTypes} from 'react';
import {bindAll} from 'lodash';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';

import './search.less';

export default class Search extends Component
{
    static propTypes = {
        onSearch: PropTypes.func.isRequired,
        onClick: PropTypes.func
    };

    constructor(props)
    {
        super(props);

        bindAll(this, ['onSearch', 'onClick']);
    }

    onSearch(e) { this.props.onSearch(e.target.value); }
    onClick() { this.props.onClick(); }

    render() {
        const width = (typeof this.props.onClick !== 'undefined') ? '90%' : '100%';

        return (
             <div className='client-item client-search' style={{maxWidth: '75%', margin: '0px auto'}}>
                 <FormControl type='text' style={{width}} placeholder='Поиск' onChange={this.onSearch}/>
                 { (typeof this.props.onClick !== 'undefined') ? <Button className='add' style={{margin: '0px 0px 0px 5px'}} bsStyle='success' bsSize='xsmall' onClick={this.onClick}/> : null }
             </div>
        );
    }
}
