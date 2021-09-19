import React, { Component } from 'react';
import './App.scss';
import { connect } from 'react-redux';
import {Route} from "react-router-dom";
import { withRouter } from 'react-router';
import { compose } from 'redux';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/NavBar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import Preloader from './components/common/Preloader/Preloader';

import { initializeApp } from './redux/appReducer';


class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
     }

    render() {
        
        if (!this.props.initialized) {
            console.log('Preload');
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>

                    <Route path='/dialogs'
                        render={() => <DialogsContainer />}/>

                    <Route path='/profile/:userId?'
                        render={() => <ProfileContainer /> } />

                    
                    <Route path='/users'
                        render={() => <UsersContainer />}/>

                    <Route path='/login'
                        render={() => <Login />}/>

                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    
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