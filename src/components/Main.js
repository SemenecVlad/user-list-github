import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import List from './List';
import ListItem from './ListItem';

export default class Main extends Component {
    render() {
        return (
            <div className='main'>
                <Switch>
                    <Route exact path='/' component={List} />
                    <Route path='/user/:username' component={ListItem} />
                </Switch>
                This is Main container
            </div>
        )
    }
}