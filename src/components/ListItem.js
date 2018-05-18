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
                    <p>Name: {user.name === null ? 'Unnamed Man :)' : user.name}</p>
                    <p>Profile link: <a href={user.html_url} target='_blank'>{user.html_url}</a></p>
                    <p>Followers: {user.followers}</p>
                    <p>Following: {user.following}</p>
                    <p>Created at: {user.created_at}</p>
                    <p>{user.company}</p>
                    <p>{user.email}</p>
                    <p>{user.location}</p>
                    <p>{user.blog}</p>
                    <p>{user.bio}</p>
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