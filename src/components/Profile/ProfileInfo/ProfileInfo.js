import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.scss';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = (props) => {

   if (!props.profile) {
      return <Preloader />
   }

   return (
      <>
         <div>
            <img src={`https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300`} alt='main'/>  
         </div>

         <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large} alt="large" />
            <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
         </div>

      </>
   )
}

export default ProfileInfo;