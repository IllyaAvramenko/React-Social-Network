import { userAPI } from '../api/api';

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
            users: state.users.map(user => {
               if (user.id === action.userId) {
                  return {...user, followed: true}
               }
               return user;
            }),
         }
      
      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map(user => {
               if (user.id === action.userId) {
                  return {...user, followed: false}
               }
               return user;
            })
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

export const getUsers = (currentPage, pageSize) => {

   return (dispatch) => {

      dispatch(toggleIsFetching(true));
      dispatch(setCurrentPage(currentPage));

      userAPI.getUsers(currentPage, pageSize).then(data => {

         dispatch(toggleIsFetching(false));
         dispatch(setUsers(data.items));
         dispatch(setTotalUsersCount(data.totalCount));
      });
   };
};

export const follow = (userId) => {

   return (dispatch) => {

      dispatch(toggleInFollowingProgress(true, userId));

      userAPI.follow(userId)
          .then(res => {
             console.log(res);
              if (res.data.resultCode === 0) {
                  dispatch(followSuccess(userId));
              }
              dispatch(toggleInFollowingProgress(false, userId));
          });
   };
};


export const unFollow = (userId) => {
   return (dispatch) => {

      dispatch(toggleInFollowingProgress(true, userId));

      userAPI.unFollow(userId)
          .then(res => {
            console.log(res);
              if (res.data.resultCode === 0) {
                  dispatch(unFollowSuccess(userId));
              }
              dispatch(toggleInFollowingProgress(false, userId));
          });
   };
};

export default usersReducer;