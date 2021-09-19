import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST',
      DELETE_POST = 'DELETE_POST',
      SET_USER_PROFILE = 'SET_USER_PROFILE',
      SET_STATUS = 'SET_STATUS';

let initialState = {
   posts: [
      {id: 1, message: 'Hi, it is my first post', likeCount: 15},
      {id: 2, message: 'Hello', likeCount: 12},
      {id: 3, message: 'Blalala', likeCount: 42},
      {id: 4, message: 'Dada', likeCount: 182}
   ],
   profile: null,
   status: ''
};

const profileReducer = (state = initialState, action) => {

   switch(action.type) {

      case ADD_POST:
         const newPost = {
            id: state.posts.length + 1,
            message: action.newPostText,
            likeCount: 0
         };
         return { ...state, posts: [...state.posts, newPost] };

      case DELETE_POST:
         return { ...state, posts: [...state.posts.filter(p => p.id !== action.postId)] };
      
      case SET_USER_PROFILE:
         return { ...state, profile: action.profile }
      
      case SET_STATUS:
         return { ...state, status: action.status }

      default:
         return state;
   }

};

export const addPost = (newPostText) => ( { type: ADD_POST, newPostText } );
export const deletePost = (postId) => ( { type: DELETE_POST, postId } );
const setUserProfile = (profile) => ( {type: SET_USER_PROFILE, profile} );
const setStatus = (status) => ( {type: SET_STATUS, status} );

export const getUserProfile = (userId) => async (dispatch) => {
   const response = await profileAPI.getProfile(userId);

   dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
   const response = await profileAPI.getStatus(userId);
   
   dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
   const response = await profileAPI.updateStatus(status);

   if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
   }
};

export default profileReducer;