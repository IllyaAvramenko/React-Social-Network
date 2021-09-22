import React from 'react';
import { NavLink } from 'react-router-dom';
import s from  './header.module.scss';

const Header = (props) => {

   return (
      <header className={s.header}>
         <div className={s.headerContainer}>
            <h2>Own Social Network</h2>

            <div className={s.loginBlock}>
               { props.isAuth 
                  ? <div> {props.login} - <button className={s.btn} onClick={props.logout} >Log out</button></div>
                  : <NavLink className={s.btn} to={'/login'} >Login</NavLink>}
            </div>
         </div>
      </header>
   )  
}

export default Header;