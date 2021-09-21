import React, { useState } from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.scss';
import ProfileStatusHooks from './ProfileStatus/ProfileStatusHooks';
import userPhoto from '../../../assets/images/userPhoto.png';
import ProfileDataFormRedux from './ProfileDataForm/ProfileDataForm';

const ProfileInfo = ({ profile, isOwner, updateStatus, savePhoto, saveProfile, ...props }) => {

   let [editMode, setEditMode] = useState(false);

   if (!profile) {
      return <Preloader />
   }

   const mainPhotoSelected = (e) => {
      if (e.target.files.length) {
         savePhoto(e.target.files[0]);
      }
   };

   const onSubmit = (formData) => {
      saveProfile(formData).then( () => {
         setEditMode(false);
      });
   };

   return (
      <>
         <div>
            <img src={`https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300`} alt='main'/>  
         </div>

         <div className={s.descriptionBlock}>
            <div className={s.userAvatar}>
               <img src={profile.photos.large || userPhoto} alt="large" />
               { isOwner && <input type={'file'} onChange={ mainPhotoSelected } /> }

               {editMode 
               ? <ProfileDataFormRedux initialValues={profile} onSubmit={onSubmit} profile={profile} /> 
               : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)}/>}
               

            </div>
            <ProfileStatusHooks status={props.status} updateStatus={props.updateStatus} />
         </div>

      </>
   )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
   return (
      <div>
         {isOwner && <div><button onClick={ goToEditMode } >Edit</button></div>}
         <div>
            <b>FullName:</b> {profile.fullName}
         </div>

         <div>
            <b>Looking for a job:</b> {profile.lookingForAJob ? 'Yes' : 'No'}
         </div>

         { profile.lookingForAJob && 
            <div>
               <b>My professional skills</b> {profile.lookingForAJobDescription}
            </div> }

         <div>
            <b>About me: </b> {profile.aboutMe}
         </div>

         <div>
            <b>Contacts: </b> { Object.keys(profile.contacts).map(key => <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>)}
         </div>
      </div>
   )
};

export const Contact = ({contactTitle, contactValue}) => {
   return <div className={s.contact}><b>{contactTitle}:</b> {contactValue} </div>
};


export default ProfileInfo;