import React from 'react';
import s from './User.module.scss';
import userPhoto from '../../../assets/images/userPhoto.png';
import { NavLink } from 'react-router-dom';

const User = ({ user, followingInProgress, unFollow, follow }) => { 
    
    const isDisabled = (userId) => {
        followingInProgress.some(id => id === userId);

        return followingInProgress.some(id => id !== userId);
    };

    return ( 
        <div className={s.user}>

            <div className={s.userWrapper}>
                <div className={s.userInfo}>

                    <div className={s.userAvatar}>
                        <NavLink to={`/profile/${user.id}`}>
                                <img className={s.usersPhoto} src={user.photos.small != null ? user.photos.small : userPhoto } alt={`user avatar`}/>
                        </NavLink>
                    </div>

                    <div className={s.userData}>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </div>

                </div>

                <div className={s.userFollow}>
                    { user.followed
                        ? <button className={s.userButton} disabled={ isDisabled(user.id) }
                                onClick={ () => { unFollow(user.id) } } 
                                >UnFollow</button>
                        : <button className={s.userButton} disabled={ isDisabled(user.id) }
                                onClick={ () => { follow(user.id) } } 
                                >Follow</button>
                    }
                </div>
            </div>

            <div className={s.userLine}></div>

        </div>
        )
}

export default User;