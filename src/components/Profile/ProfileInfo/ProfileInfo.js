import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.scss';
import ProfileStatusHooks from './ProfileStatus/ProfileStatusHooks';
import userPhoto from '../../../assets/images/userPhoto.png';

const ProfileInfo = ({ profile, ...props }) => {

   if (!profile) {
      return <Preloader />
   }

   return (
      <>
         <div>
            <img src={`https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300`} alt='main'/>  
         </div>

         <div className={s.descriptionBlock}>
            <div className={s.userAvatar}>
               <img src={profile.photos.large || userPhoto} alt="large" />
            </div>
            <ProfileStatusHooks status={props.status} updateStatus={props.updateStatus} />
         </div>

      </>
   )
}

export default ProfileInfo;