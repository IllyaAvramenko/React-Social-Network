import s from './ProfileDataForm.module.scss';
import {createField, Input, Textarea} from '../../../common/FormsControls/FormsControls';
import { reduxForm } from "redux-form";

const ProfileDataForm = ({profile, handleSubmit, error}) => {
   return (
      <form onSubmit={ handleSubmit }>
         <div onClick={ console.log(1) } ><button className={s.btn}>Save</button></div>

         { error && <div className={s.formSummaryError}>{error}</div>}

         <div>
            <b>FullName:</b> {createField('Full name', 'fullName', [], Input)}
         </div>

         <div>
            <b>Looking for a job:</b> {createField(null, 'lookingForAJob', [], Input, {type: 'checkbox'})}
         </div>

         <div>
            <b>My professional skills</b> {profile.lookingForAJobDescription}
            {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
         </div> 

         <div>
            <b>About me: </b> {profile.aboutMe}
            {createField('About me', 'aboutMe', [], Textarea)}
         </div>

         <div>
            <b>Contacts: </b> { Object.keys(profile.contacts).map(key => {
               return <div key={key} className={s.contact}>
                  <b>{key}:</b> {createField(key, `contacts.${key}`, [], Input)}
               </div>
            })}
         </div>
      </form>
   )
};

const ProfileDataFormRedux = reduxForm({form: 'editProfile'})(ProfileDataForm);

export default ProfileDataFormRedux;