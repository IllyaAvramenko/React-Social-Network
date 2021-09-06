import React from 'react';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer';
import s from './MyPosts.module.scss';

const MyPosts = (props) => {
   
   const postsElements = props.posts.map(post => <Post message={post.message} likeCount={post.likeCount}/>)

   const newPostElement = React.createRef();

   const addPost = () => {
      props.dispatch(addPostActionCreator());
   };

   const onPostChange = () => {
      const text = newPostElement.current.value;
      const action = updateNewPostTextActionCreator(text);
      props.dispatch(action);
   };

   return (
      <div className={s.postsBlock}>
         <h3>My Posts</h3>
         <div>
            <div>
               <textarea 
                  ref={newPostElement}
                  onChange={onPostChange}
                  value={props.newPostText}/>
            </div>
            <div>
               <button onClick={ addPost }>App Post</button>
            </div>
            <div className={s.posts}>
               {postsElements}
            </div>
         </div>
      </div>
   )
}

export default MyPosts;