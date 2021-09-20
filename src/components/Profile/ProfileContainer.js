import React, { Component } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus } from '../../redux/profileReducer';
import { withRouter } from 'react-router';
import { compose } from 'redux';

class ProfileContainer extends Component {

   refreshProfile() {
      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = this.props.authorizedUserId;
         
         if (!userId) {
            this.props.history.push('/login');
         }
      }
      this.props.getUserProfile(userId);
      this.props.getStatus(userId);
   }

   componentDidMount() {
      this.refreshProfile();
   }

   componentDidUpdate(prevProps) {
      if (this.props.match.params.userId !== prevProps.match.params.userId) {
         this.refreshProfile()
      }
   }

   render() {

      return (
         <Profile {...this.props}  />
      )
   }
}

const mapStateToProps = (state) => {
   const { profile, status } = state.profilePage;

   return {
      profile,
      status,
      isAuth: state.auth.isAuth,
      authorizedUserId: state.auth.userId
   }
};


export default compose(
   connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
   withRouter,
)
(ProfileContainer);








// const AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// const withURLDataContainerComponent = withRouter(AuthRedirectComponent);
// export default connect(mapStateToProps, { getUserProfile })(withURLDataContainerComponent);