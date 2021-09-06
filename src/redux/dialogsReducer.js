const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY',
      SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {

   switch(action.type) {
      case UPDATE_NEW_MESSAGE_BODY:
         state.newMessageBody = action.body;
         return state;

      case SEND_MESSAGE:
         const body = state.newMessageBody;
         state.newMessageBody = '';
         state.messages.push({message: body, id: 4});
         return state;

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