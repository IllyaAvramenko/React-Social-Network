import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.scss';

const MyPosts = (props) => {
   
   const postsElements = props.posts.map(post => <Post key={post.id} message={post.message} likeCount={post.likeCount}/>)

   const onAddPost = () => {
      props.addPost();
   };

   const onPostChange = (e) => {
      const text = e.target.value;
      props.updateNewPostText(text);
   };

   return (
      <div className={s.postsBlock}>
         <h3>My Posts</h3>
         <div>
            <div>
               <textarea 
                  onChange={onPostChange}
                  value={props.newPostText}/>
            </div>
            <div>
               <button onClick={ onAddPost }>App Post</button>
            </div>
            <div className={s.posts}>
               {postsElements}
            </div>
         </div>
      </div>
   )
}

export default MyPosts;