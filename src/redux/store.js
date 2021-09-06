import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';

let store = {
   _state: {
      profilePage: {
         posts: [
            {id: 1, message: 'Hi, it is my first post', likeCount: 15},
            {id: 2, message: 'Hello', likeCount: 12},
            {id: 3, message: 'Blalala', likeCount: 42},
            {id: 4, message: 'Dada', likeCount: 182}
         ],
         newPostText: ''
      },
      dialogsPage: {
         dialogs: [
            {name: 'Illya', avatar: 'https://www.planetaexcel.ru/upload/main/fc3/721.jpg.png', id: 1},
            {name: 'Ann', avatar: 'https://www.planetaexcel.ru/upload/main/fc3/721.jpg.png', id: 2},
            {name: 'Natalia', avatar: 'https://www.planetaexcel.ru/upload/main/fc3/721.jpg.png', id: 3},
            {name: 'Artem', avatar: 'https://www.planetaexcel.ru/upload/main/fc3/721.jpg.png', id: 4},
            {name: 'Ruslan', avatar: 'https://www.planetaexcel.ru/upload/main/fc3/721.jpg.png', id: 5} 
         ],
         messages: [
            {message: 'Hiiii', id: 1},
            {message: 'Hellllooooo', id: 2},
            {message: 'Wsem Hi', id: 3}
         ],
         newMessageBody: ''
      },
      sidebar: {}
   },

   _callSubscriber() {
      console.log('state was changed');
   },

   getState() {
      return this._state;
   },

   subscribe(observer) {
      this._callSubscriber = observer;
   },

   // addPost() {
   //    const newPost = {
   //       id: 5,
   //       message: this._state.profilePage.newPostText,
   //       likeCount: 0
   //    };
   //    this._state.profilePage.posts.push(newPost);
   //    this._state.profilePage.newPostText = '';
   //    this._callSubscriber(this._state);
   // },

   // updateNewPostText(newText) {
   //    this._state.profilePage.newPostText = newText;
   //    this._callSubscriber(this._state);
   // },

   dispatch(action) {
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
      this._state.sidebar = sidebarReducer(this._state.sidebar, action);

      this._callSubscriber(this._state);
   }
};

export default store;
window.store = store;