import React, {Component, PropTypes} from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';

export default class Search extends Component
{
    static propTypes = {
        onSearch: PropTypes.func.isRequired
    };

    constructor(props)
    {
        super(props);
    }

    handleSearch(e) { this.props.onSearch(e.target.value); }

    render() {

        return (
             <div className='client-item client-search' style={{maxWidth: '75%', margin: '0px auto'}}>
                 <FormControl type='text' style={{width: '100%'}} placeholder='Поиск' onChange={this.handleSearch.bind(this)}/>
             </div>
        );
    }
}
