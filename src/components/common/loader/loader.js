import React, {Component} from 'react';

import './loader.less';

export default class Loader extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            show: true
        }
    }

    render()
    {
        if (this.state.show !== true) { return null; }

        return (
            <div>
                <div className='bg_load'>
                </div>
                <div className='wrapper'>
                </div>
            </div>
        );
    }
}; // main
