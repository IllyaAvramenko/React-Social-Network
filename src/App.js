import React, { Component, Suspense } from 'react';
import './App.scss';
import { connect } from 'react-redux';
import {Route} from "react-router-dom";
import { withRouter } from 'react-router';
import { compose } from 'redux';
import HeaderContainer from './components/Header/HeaderContainer';
// import ProfileContainer from './components/Profile/ProfileContainer';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
// import UsersContainer from './components/Users/UsersContainer';
import Navbar from './components/Navbar/NavBar';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Login from './components/Login/Login';
import Preloader from './components/common/Preloader/Preloader';
import { initializeApp } from './redux/appReducer';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));


class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
     }

    render() {
        
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Suspense fallback={<Preloader/>}>
                        <Route path='/dialogs' render={() => <DialogsContainer />}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer /> } />
                        <Route path='/users' render={() => <UsersContainer />}/>
                        <Route path='/login' render={() => <Login />}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                    </Suspense>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default compose(
    withRouter,
    connect(mapStateToProps, { initializeApp })
)(App);