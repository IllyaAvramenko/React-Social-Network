import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    const state = props.dialogsPage;
    const {dialogs, messages, newMessageBody} = state;

    const dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} avatar={dialog.avatar}/> );
    const messagesElemensts = messages.map(message => <Message message={message.message} key={message.id}/> );

    const onSendMessageClick = () => {
        props.sendMessage();
    };

    const onNewMessageChange = (e) => {
        const body = e.target.value;
        props.updateNewMessageBody(body);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {dialogsElements}
            </div>

            <div className={s.message}>
                {messagesElemensts}
                <div>
                    <div> <textarea value={newMessageBody} 
                                    onChange={ onNewMessageChange }
                                    placeholder='Enter your message'></textarea> </div>
                    <div> <button onClick={ onSendMessageClick }>Send</button> </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;