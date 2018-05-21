import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import * as actions from '../actions';

class List extends Component {
    
    componentDidMount() {
        this.props.fetchUsers(20, 0);
    }

    renderList = () => {
        return this.props.items.map(item => {
            return (
                <Link to={`/user/${item.login}`} className='list-element' key={item.id} item={item}>
                    <img alt={item.name} src={item.avatar_url} />
                    <div>
                        <h4 style={{marginTop: '5px', marginBottom: '5px'}}>User login: {item.login}</h4>
                        <p>Profile link: {item.html_url}</p>
                        <p>Profile ID: {item.id}</p>
                    </div>
                </Link>
            )
        })
    }

    render() {
        return (
            <div className='main-list'>
                <h2>User List</h2>
                {this.renderList()}
                <button onClick={this.props.nextPage}>Next</button>
                <button onClick={this.props.prevPage}>Prev</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const items = _.map(state.list.list, (val, uid) => {
        return { ...val, uid };
    });
    
    return { items };
}

export default connect(mapStateToProps, actions)(List);