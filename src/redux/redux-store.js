import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleWare from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import appReducer from './appReducer';


const reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   sidebar: sidebarReducer,
   usersPage: usersReducer,
   auth: authReducer,
   form: formReducer,
   app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;