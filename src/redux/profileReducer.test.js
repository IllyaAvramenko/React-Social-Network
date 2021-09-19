import profileReducer, { addPost, deletePost } from './profileReducer';

let state = {
   posts: [
      {id: 1, message: 'Hi, it is my first post', likeCount: 15},
      {id: 2, message: 'Hello', likeCount: 12},
      {id: 3, message: 'Blalala', likeCount: 42},
      {id: 4, message: 'Dada', likeCount: 182}
   ]
};

it('length of post should be incremented', () => {
   let action = addPost('it-kamapulya');
   
   let initialState = {
      posts: [
         {id: 1, message: 'Hi, it is my first post', likeCount: 15},
         {id: 2, message: 'Hello', likeCount: 12},
         {id: 3, message: 'Blalala', likeCount: 42},
         {id: 4, message: 'Dada', likeCount: 182}
      ]
   };

   let newState = profileReducer(initialState, action);

   expect(newState.posts.length).toBe(5);
});
 

it('after deleting length of messages should be decrement', () => {
   let action = deletePost(1);

   let newState = profileReducer(state, action);

   expect(newState.posts.length).toBe(3);
});
