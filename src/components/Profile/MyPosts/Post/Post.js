import React from 'react';
import s from './Post.module.scss';

const Post = (props) => {
   const {message, likeCount} = props;
   return (
      <div className={s.post}>

         <div className={s.postInfo}>
            <div className={s.avatar}>
               <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg" alt="photop" />
            </div>
            <div className={s.postName}>
            </div>
         </div>

         <div className={s.postContent}>
            <div className={s.postContentMessage}>
               <p>{message}</p>
            </div>
            <div>
               <span>Likes: {likeCount}</span>
            </div>
         </div>

      </div>
   )
}

export default Post;