import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { createPost } from '../actions/index'
import renderField from './render_field'
import { Link } from 'react-router'

class PostsNew extends Component {
  static contextTypes = { router: PropTypes.object }; // defining PostsNew.contextTypes
  //avoid using context in general, only when you are working with a router

  onSubmitRoute(props) {
    createPost(props).payload
    .then( () => {
      this.context.router.push('/');
    });
  }

  render() {
    const { handleSubmit }  = this.props; // === ES6 for: const handleSubmit = this.props.handleSubmit;

    return (
      <form onSubmit={handleSubmit(this.onSubmitRoute.bind(this))}>
        <h2>Create a new post</h2>
        <Field name='title' component={renderField} type="text" />
        <Field name='categories' component={renderField} type="text" />
        <Field name='content' component={renderField} type="text" textarea={true} />
        <button type="submit" className='btn btn-primary'>Submit</button>
        <Link to="/" className='btn btn-danger'>Cancel</Link>
      </form>
      );
  }
}

const validate = values => {
    const errors = {};

    if(!values.title) errors.title = 'Please, enter a title';
    if (!values.categories) errors.categories = 'Please, enter categories';
    if (!values.content) errors.content = 'Please, enter a content';

    return errors;
};


// connect: 1st_arg is  mapStateToProps, 2nd_arg is mapDispatchToProps
// reduxForm: 1st_arg is form config, 2nd_arg is  mapStateToProps and 3rd_arg is mapDispatchToProps
export default reduxForm({form: 'PostsNewForm', validate}, null, { createPost })(PostsNew);
