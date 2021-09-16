import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getUsers, follow, unFollow } from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../../common/Preloader/Preloader';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class UsersContainer extends Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }    

    render() {
        return <>
            { this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        users={this.props.users}
                        onPageChanged={this.onPageChanged}
                        follow={this.props.follow}
                        unFollow={this.props.unFollow}
                        followingInProgress={this.props.followingInProgress}/>
        </>
    }
}

const mapStateToProps = (state) => {
    
    const {users, pageSize, totalUsersCount, currentPage, isFetching, followingInProgress} = state.usersPage;

    return {
       users,
       pageSize,
       totalUsersCount,
       currentPage,
       isFetching,
       followingInProgress,
       isAuth: state.auth.isAuth
    }
};

export default compose(
    connect(mapStateToProps, { getUsers, follow, unFollow }),
    withAuthRedirect
)
(UsersContainer); 


// const withRedirect = withAuthRedirect(UsersContainer);

// export default connect(mapStateToProps, 
//     { getUsers, follow, unFollow}
//     )(withRedirect);



//  const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unFollow: (userId) => {
//             dispatch(unFollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage(currPage) {
//             dispatch(setCurrentPageAC(currPage))
//         },
//         setTotalUsersCount(totalCount) {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         setToggleFetching(isFetching) {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
//  };

