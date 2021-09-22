import React from 'react';
import s from '../Dialogs.module.scss';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../../utils/validators/validators';

const maxLength150 = maxLengthCreator(150);

const AddMessageForm = (props) => {
   
    return (
        <form onSubmit={ props.handleSubmit }>
            <div> 
                <Field name={'newMessageBody'} component={ Textarea }
                validate={ [ required, maxLength150 ] } 
                placeholder='Enter your message'/>
            </div>
            <div> 
                <button className={s.btn}>Send</button> 
            </div>
        </form>
    )
};

export default reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);