import { reset, stopSubmit } from 'redux-form';
import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST',
      DELETE_POST = 'DELETE_POST',
      SET_USER_PROFILE = 'SET_USER_PROFILE',
      SET_STATUS = 'SET_STATUS',
      SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

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
         
      case SAVE_PHOTO_SUCCESS:
         return { ...state, profile: {...state.profile, photos: action.photos} }

      default:
         return state;
   }

};

const addPostSuccess = (newPostText) => ( { type: ADD_POST, newPostText } );
export const deletePost = (postId) => ( { type: DELETE_POST, postId } );
const setUserProfile = (profile) => ( {type: SET_USER_PROFILE, profile} );
const setStatus = (status) => ( {type: SET_STATUS, status} );
const savePhotoSuccess = (photos) => ( {type: SAVE_PHOTO_SUCCESS, photos} );

export const addPost = (newPostText) => async (dispatch) => {
   dispatch(addPostSuccess(newPostText));
   dispatch(reset('ProfileAddNewPostForm'));
};

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

export const savePhoto = (file) => async (dispatch) => {
   const response = await profileAPI.savePhoto(file);

   if (response.data.resultCode === 0) {
      console.log(response.data);
      dispatch(savePhotoSuccess(response.data.data.photos));
   }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
   const userId = getState().auth.userId;
   const response = await profileAPI.saveProfile(profile);

   if (response.data.resultCode === 0) {
      console.log(response.data);
      dispatch(getUserProfile(userId));
   } else {
      dispatch(stopSubmit('editProfile', {_error: response.data.messages[0]}));
      return Promise.reject(response.data.messages[0]);
   }
};

export default profileReducer;