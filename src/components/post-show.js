import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { fetchPostDetails, deletePost } from '../actions/index'
import { Link } from 'react-router'

class PostShow extends Component {
  static contextTypes = { router: PropTypes.object };

  componentWillMount() {
    this.props.fetchPostDetails(this.props.params.id);//id goes from the URL
  }

  onDeleteClick() {
    this.props.deletePost(this.props.post.id)
    .then( () => {
      this.context.router.push('/');
    });
  }

  render() {
    const { post } = this.props;
    if(!post) {
      return (
        <div className='col-md-12'>
          <h2>Loading
            <i className="fa fa-spinner fa-spin" style={{fontSize: 24}} />
          </h2>
        </div>
    )}
    return (
      <div>
        <Link to='/' className='btn btn-primary'>Back to List</Link>
        <button className='btn btn-danger pull-xs-right' onClick={this.onDeleteClick.bind(this)}>Delete Post</button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    post: state.posts.post
  };
}

export default connect(mapStateToProps, { fetchPostDetails, deletePost })(PostShow);
