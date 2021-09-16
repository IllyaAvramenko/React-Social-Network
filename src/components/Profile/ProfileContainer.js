import React, { Component } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router';
// import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends Component {

   componentDidMount() {
      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = 2;
      }
      this.props.getUserProfile(userId);
   }

   render() {

      return (
         <Profile {...this.props}  />
      )
   }
}

const mapStateToProps = (state) => {
   const { profile } = state.profilePage;

   return {
      profile,
      isAuth: state.auth.isAuth
   }
};


export default compose(
   connect(mapStateToProps, { getUserProfile }),
   withRouter,
)
(ProfileContainer);








// const AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// const withURLDataContainerComponent = withRouter(AuthRedirectComponent);
// export default connect(mapStateToProps, { getUserProfile })(withURLDataContainerComponent);