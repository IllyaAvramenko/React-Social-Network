import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import AddMessageForm from './AddMessageForm/AddMessageForm';

const Dialogs = (props) => {
    const state = props.dialogsPage;
    const { dialogs, messages } = state;

    const dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} avatar={dialog.avatar}/> );
    const messagesElemensts = messages.map(message => <Message message={message.message} key={message.id}/> );

    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {dialogsElements}
            </div>

            <div className={s.message}>
                {messagesElemensts}

                <AddMessageForm onSubmit={addNewMessage} />

            </div>
        </div>
    )
}



export default Dialogs;