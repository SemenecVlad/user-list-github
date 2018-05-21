import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component {

    componentDidMount() {
        const { match: { params } } = this.props;
        this.props.fetchSingleUser(params.username);
        console.log('user', this.props.user)
    }

    renderUser = () => {
        const { user } = this.props;
        return (
            <Fragment>
                <div>
                    <img alt={user.name} src={user.avatar_url} />
                </div>
                <div>
                    <p><strong>Name:</strong> {user.name === null ? 'Unnamed Man :)' : user.name}</p>
                    <p><strong>Profile link:</strong> <a href={user.html_url} target='_blank'>{user.html_url}</a></p>
                    <p><strong>Followers:</strong> {user.followers}</p>
                    <p><strong>Following:</strong> {user.following}</p>
                    <p><strong>Created at:</strong> {user.created_at}</p>
                    <p><strong>Company:</strong>{user.company === null ? ' This info is not available' : user.company}</p>
                    <p><strong>Email:</strong>{user.email === null ? ' This info is not available' : user.email}</p>
                    <p><strong>Location:</strong>{user.location === null ? ' This info is not available' : user.location}</p>
                    <p><strong>Blog:</strong>{user.blog === null ? ' This info is not available' : user.blog}</p>
                    <p><strong>Bio:</strong>{user.bio === null ? ' This info is not available' : user.bio}</p>
                    <Link to='/' className='button'>Go Back to List</Link>
                </div>
            </Fragment>
        )
    }
    
    render() {
        const { user } = this.props;
        return (
            <div className='list-item'>
                {(user) ? this.renderUser() : <p>Sorry</p>}                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.list.user 
})

export default connect(mapStateToProps, actions)(ListItem);