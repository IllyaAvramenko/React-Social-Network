import React from 'react';
import s from './Post.module.scss';

const Post = (props) => {
   const {message, likeCount} = props;
   return (
      <div className={s.item}>
         <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg" alt="photop" />
         {message}
         <div>
            <span>Likes: {likeCount}</span>
         </div>
      </div>
   )
}

export default Post;