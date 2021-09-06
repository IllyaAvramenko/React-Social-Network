import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import './App.scss';
import {BrowserRouter as Router, Route} from "react-router-dom";


const App = (props) => {

    const {profilePage} = props.state;

    return (
        <Router>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>

                    <Route path='/dialogs'
                        render={() => <Dialogs store={props.store}/>}/>

                    <Route path='/profile'
                        render={() => <Profile
                            profilePage={profilePage} 
                            dispatch={props.dispatch} /> } />

                    
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    
                </div>
            </div>
        </Router>
);
}
export default App;