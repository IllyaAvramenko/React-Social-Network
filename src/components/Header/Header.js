import React from 'react';
import { NavLink } from 'react-router-dom';
import s from  './header.module.scss';

const Header = (props) => {

   return (
      <header className={s.header}>
         <p>header</p>

         <div className={s.loginBlock}>
            { props.isAuth 
               ? props.login
               : <NavLink to={'/login'} >Login</NavLink>}
         </div>
      </header>
   )  
}

export default Header;