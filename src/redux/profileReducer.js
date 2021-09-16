import { userAPI } from '../api/api';

const ADD_POST = 'ADD-POST',
      UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
      SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
   posts: [
      {id: 1, message: 'Hi, it is my first post', likeCount: 15},
      {id: 2, message: 'Hello', likeCount: 12},
      {id: 3, message: 'Blalala', likeCount: 42},
      {id: 4, message: 'Dada', likeCount: 182}
   ],
   newPostText: '',
   profile: null
};

const profileReducer = (state = initialState, action) => {

   switch(action.type) {

      case ADD_POST:
         const newPost = {
            id: state.posts.length + 1,
            message: state.newPostText,
            likeCount: 0
         };
         return { ...state, posts: [...state.posts, newPost], newPostText: '' };

      case UPDATE_NEW_POST_TEXT:
         return { ...state, newPostText: action.newText };
      
      case SET_USER_PROFILE:
         return { ...state, profile: action.profile }

      default:
         return state;
   }

};

export const addPost = () => ( { type: ADD_POST } );
export const updateNewPostText = (text) => ( {type: UPDATE_NEW_POST_TEXT, newText: text} );
const setUserProfile = (profile) => ( {type: SET_USER_PROFILE, profile} );

export const getUserProfile = (userId) => (dispatch) => {
   userAPI.getProfile(userId).then(res => {
      dispatch(setUserProfile(res.data));
   });
};

export default profileReducer;