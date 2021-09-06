import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.scss';

const DialogItem = (props) => {

    const path = '/dialogs/' + props.id;

    return (
        <div className={s.dialogItem}>
            <NavLink to={path} >
                <div className={s.wrapper}>
                    <div className={s.wrapper__image}>
                        <img src={props.avatar} alt="avatar"/>
                    </div>
                    <div className={s.wrapper__name}>
                        <p>{props.name}</p>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default DialogItem;