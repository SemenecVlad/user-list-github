import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class List extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        return (
            <div>
                <h2>LIST Component</h2>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}

export default connect(mapStateToProps, actions)(List);