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
      <div className={s.profileInfo}>
         
         <div className={s.avatarBlock}>
            <div className={s.userAvatar}>
               <img src={profile.photos.large || userPhoto} alt="large" />
               { isOwner && <input placeholder={'Заменить иображение'} type={'file'} onChange={ mainPhotoSelected } /> }
            </div>
         </div>

         <div className={s.descriptionBlock}>

               {editMode 
               ? <ProfileDataFormRedux initialValues={profile} onSubmit={onSubmit} profile={profile} /> 
               : <ProfileData status={props.status} updateStatus={updateStatus} profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)}/>}
   
         </div>

      </div>
   )
}

const ProfileData = ({profile, isOwner, goToEditMode, updateStatus, status}) => {
   return (
      <div className={s.profileData}>

         <div className={s.mainInfo}>
            <div>
               <h2>{profile.fullName}</h2> 
            </div>

            <ProfileStatusHooks status={status} updateStatus={updateStatus} />
         </div>

         <div className={s.otherInfo}>
            {isOwner && <div><button className={s.btn} onClick={ goToEditMode } >Edit Profile Information</button></div>}
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
      </div>
   )
};

export const Contact = ({contactTitle, contactValue}) => {
   return <div className={s.contact}><b>{contactTitle}:</b> {contactValue} </div>
};


export default ProfileInfo;