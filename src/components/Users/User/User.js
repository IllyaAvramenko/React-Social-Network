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
        <div>
            <span>
                <div>
                    <NavLink to={`/profile/${user.id}`}>
                        <img className={s.usersPhoto} src={user.photos.small != null ? user.photos.small : userPhoto } alt={`user avatar`}/>
                    </NavLink>
                </div>
                <div>
                    { user.followed
                        ? <button disabled={ isDisabled(user.id) }
                                  onClick={ () => { unFollow(user.id) } } 
                                  >UnFollow</button>
                        : <button disabled={ isDisabled(user.id) }
                                  onClick={ () => { follow(user.id) } } 
                                  >Follow</button>
                    }
                </div>
            </span>

            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>

                <span>
                    <div>{'user.location.city'}</div>
                    <div>{'user.location.country'}</div>
                </span>
            </span>
        </div>
        )
}

export default User;