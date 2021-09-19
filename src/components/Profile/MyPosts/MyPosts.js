import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.scss';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const MyPosts = React.memo((props) => {
   const postsElements = props.posts.map(post => <Post key={post.id} message={post.message} likeCount={post.likeCount}/>)

   const addNewPost = (values) => {
      props.addPost(values.newPostText);
   };

   return (

      <div className={s.postsBlock}>
         <h3>My Posts</h3>

         <AddNewPostFormRedux onSubmit={ addNewPost } />

         <div className={s.posts}>
            {postsElements}
         </div>
      </div>
   )
});

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {

   return (
      <form  onSubmit={ props.handleSubmit } >
         <div>
            <Field name={'newPostText'} component={Textarea}
                  placeholder={'Post message'}
                  validate={ [required, maxLength10] } />
         </div>
         <div>
            <button>App Post</button>
         </div>
      </form>
   )
};

const AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm);

export default MyPosts;