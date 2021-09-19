const SEND_MESSAGE = 'SEND-MESSAGE';

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
   ]
};

const dialogsReducer = (state = initialState, action) => {

   switch(action.type) {
      
      case SEND_MESSAGE:
         return {
            ...state, 
            messages: [...state.messages, {message: action.newMessageBody, id: state.messages.length + 1}]
         };

      default:
         return state;
   }

};

export const sendMessage = (newMessageBody) => {
   return {type: SEND_MESSAGE, newMessageBody}
};

export default dialogsReducer;