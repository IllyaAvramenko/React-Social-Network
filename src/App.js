import React from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/NavBar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import './App.scss';
import {Route} from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';


const App = () => {

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
export default App;