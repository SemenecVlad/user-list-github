import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ListItem extends Component {
    render() {
        return (
            <div className='list-item'>
                <h2>My name is USER</h2>
                <Link to='/' className='button'>Go Back to List</Link>
            </div>
        )
    }
}