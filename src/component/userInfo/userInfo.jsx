import React from 'react';
import { useSelector } from "react-redux";
import styles from './userInfo.module.scss'

const UserInfo = () => {
    const userInfo = useSelector((state => state.authReducer.user));
    return (
        <div className={styles.infoBlock}>
            <h1>UserInfo</h1>
            <ul>
                <li>Id: {userInfo.id}</li>
                <li>username: {userInfo.username} </li>
                <li>signupDate: {userInfo.signup_date} </li>
                <li>birth: {userInfo.birth}</li>
            </ul>
        </div>
    )
};

export default UserInfo;