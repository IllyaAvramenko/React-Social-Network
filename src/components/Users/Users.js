import React from 'react';
import s from './Users.module.scss';
import userPhoto from '../../assets/images/userPhoto.png';
import { NavLink } from 'react-router-dom';

const Users = (props) => { 

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
 
    const pages = [];   
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    
    const isDisabled = (userId) => {
        props.followingInProgress.some(id => id === userId);

        return props.followingInProgress.some(id => id !== userId);
    };

    return ( <div>
        <div>
        {
        pages.map(p => {
                return <span key={p.id} className={ props.currentPage === p ? s.selectedPage : '' }
                    onClick={ () => { props.onPageChanged(p) } }>{p}</span>
            })
            }
        </div>
        {
        props.users.map(user => (
        <div key={user.id}>
            <span>
                <div>
                    <NavLink to={`/profile/${user.id}`}>
                        <img className={s.usersPhoto} src={user.photos.small != null ? user.photos.small : userPhoto } alt={`user avatar`}/>
                    </NavLink>
                </div>
                <div>
                    { user.followed
                        ? <button disabled={ isDisabled(user.id) }
                                  onClick={ () => { props.unFollow(user.id) } } 
                                  >UnFollow</button>
                        : <button disabled={ isDisabled(user.id) }
                                  onClick={ () => { props.follow(user.id) } } 
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
        </div>))
        }
    </div>)
}

export default Users;