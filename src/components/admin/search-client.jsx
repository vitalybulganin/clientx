import React, {Component} from 'react';
import {FormGroup, FormControl, SplitButton, MenuItem, Col} from 'react-bootstrap';

import '../../../../libs/css/clients.css';

class SearchClient extends Component
{
    constructor(props, context)
    {
        super(props, context);

        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(e) { this.props.onSearch(e.target.value); }

    render()
    {
        var displayStyle =
        {
            width: "75%",
            "marginLeft": "500px"
        };
        var widthStyle =
        {
            width: "50%"
        };

        return (
            <div className="input-group">
                <FormGroup bsSize="small">
                    <div className="client-item client-search" style={displayStyle}>
                        <FormControl type="text" placeholder="Поиск" style={widthStyle} onChange={this.handleSearch}/>
                    </div>
                </FormGroup>
            </div>
        );
    }
};
module.exports = SearchClient;
