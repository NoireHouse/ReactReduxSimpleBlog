import React, {Component} from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux'; //watch shortcut explanation at the end of the file
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
  componentWillMount() { //React lifecycle method
    //runs whenever a component is about to run
    this.props.fetchPosts();
    //fetch data over here
  }

  renderPosts(){
      return this.props.posts.map(post => {
        return(
          <Link to={`posts/${post.id}`} key={post.id}>
          <li className='list-group-item'>
            <span className='pull-xs-right'>{`Categories: ${post.categories}`}</span>
            <strong>{post.title}</strong>
          </li>
          </Link>
        )
      })
  }

  render(){
    return(
      <div>
        <div>
          <div className='text-xs-right'>
            <Link to="/posts/new" className='btn btn-primary'>
              Add a Post
            </Link>
          </div>
          <div>
            <h3>Posts</h3>
            <ul className='list-group'>
              {this.renderPosts()}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.all
  };
}

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators ({ fetchPosts }, dispatch);
// }

//instead of dispatching mapDispatchToProps to connect(),
//we can make a shortcut and put actionCreator directly
// it still goes through bindActionCreators();
export default connect(mapStateToProps, { fetchPosts })(PostsIndex); //{fetchPosts : fetchPosts} ES6 shortcut
