import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User/User';

const Users = ({ totalUsersCount, pageSize, currentPage, onPageChanged, followingInProgress, users, unFollow, follow }) => { 
    
    return (<> 
        <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} 
                currentPage={currentPage} onPageChanged={onPageChanged} />

        {users.map(user => <User user={user} key={user.id}
                                unFollow={unFollow} follow={follow} 
                                followingInProgress={followingInProgress} />)}
    </>)

}

export default Users;