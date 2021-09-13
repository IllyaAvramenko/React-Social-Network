const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY',
      SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

   switch(action.type) {

      case UPDATE_NEW_MESSAGE_BODY:
         return {
            ...state,
            newMessageBody: action.body
         };
      
      case SEND_MESSAGE:
         const body = state.newMessageBody;
         return {
            ...state, 
            messages: [...state.messages, {message: body, id: state.messages.length + 1}],
            newMessageBody: ''
         };

      default:
         return state;
   }

};

export const sendMessageCreator = (text) => {
   return {type: SEND_MESSAGE}
};

export const updateNewMessageBodyCreator = (body) => {
   return {type: UPDATE_NEW_MESSAGE_BODY, body: body}
};

export default dialogsReducer;