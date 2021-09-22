import React from 'react';
import s from './Users.module.scss';
import Paginator from '../common/Paginator/Paginator';
import User from './User/User';

const Users = ({ totalItemsCount, pageSize, currentPage, onPageChanged, followingInProgress, users, unFollow, follow }) => { 
    
    return (<div className={s.users}> 
        <div className={s.usersPagination}>
            <Paginator totalItemsCount={totalItemsCount} pageSize={pageSize} 
                    currentPage={currentPage} onPageChanged={onPageChanged} />
        </div>

        <div className={s.usersContent}>
            {users.map(user => <User user={user} key={user.id}
                                unFollow={unFollow} follow={follow} 
                                followingInProgress={followingInProgress} />)}
        </div>
    </div>)

}

export default Users;