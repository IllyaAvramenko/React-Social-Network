import { userAPI } from '../api/api';
import { updateObjectInArray } from '../utils/objectHelpers';

const FOLLOW = 'FOLLOW',
      UNFOLLOW = 'UNFOLLOW',
      SET_USERS = 'SET_USERS',
      SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
      SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
      TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
      TOGGLE_IN_FOLOWING_PROGRESS = 'TOGGLE_IN_FOLOWING_PROGRESS';

let initialState = {
   users: [],
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 1,
   isFetching: false,
   followingInProgress: []
};

const usersReducer = (state = initialState, action) => {

   switch(action.type) {

      case FOLLOW:
         return {
            ...state,
            users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            // users: state.users.map(user => {
            //    if (user.id === action.userId) {
            //       return {...user, followed: true}
            //    }
            //    return user;
            // }),
         }
      
      case UNFOLLOW:
         return {
            ...state,
            users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
         }

      case SET_USERS:
         return { ...state, users: [ ...action.users ] }

      case SET_CURRENT_PAGE:
         return { ...state, currentPage: action.currPage }

      case SET_TOTAL_USERS_COUNT:
         return { ...state, totalUsersCount: action.count }

      case TOGGLE_IS_FETCHING:
         return { ...state, isFetching: action.isFetching}

      case TOGGLE_IN_FOLOWING_PROGRESS:
         return {
            ...state,
            folowingInProgress: action.folowingInProgress 
               ? [...state.folowingInProgress, action.userId]
               : state.followingInProgress.filter(id => id !== action.userId)
         }   
      default:
         return state;
   }

};

const followSuccess = (userId) => ( { type: FOLLOW, userId} ); 
const unFollowSuccess = (userId) => ( { type: UNFOLLOW, userId } );
const setUsers = (users) => ( { type: SET_USERS, users } );
const setCurrentPage = (currPage) => ( { type: SET_CURRENT_PAGE, currPage } );
const setTotalUsersCount = (totalUsersCount) => ( { type: SET_TOTAL_USERS_COUNT, count: totalUsersCount } );
const toggleIsFetching = (isFetching) => ( { type: TOGGLE_IS_FETCHING, isFetching } );
const toggleInFollowingProgress = (folowingInProgress, userId) => ( { type: TOGGLE_IS_FETCHING, folowingInProgress, userId } );

export const requestUsers = (page, pageSize) => async (dispatch) => {
   dispatch(toggleIsFetching(true));
   dispatch(setCurrentPage(page));

   const data = await userAPI.getUsers(page, pageSize);

   dispatch(toggleIsFetching(false));
   dispatch(setUsers(data.items));
   dispatch(setTotalUsersCount(data.totalCount));
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
   dispatch(toggleInFollowingProgress(true, userId));
   const res = await apiMethod(userId);
   if (res.data.resultCode === 0) {
      dispatch(actionCreator(userId));
   }
   dispatch(toggleInFollowingProgress(false, userId));
};

export const follow = (userId) => async (dispatch) => {
   followUnfollowFlow(dispatch, userId, userAPI.follow.bind(userAPI), followSuccess);
};

export const unFollow = (userId) => async (dispatch) => {
   followUnfollowFlow(dispatch, userId, userAPI.unFollow.bind(userAPI), unFollowSuccess);
};

export default usersReducer;