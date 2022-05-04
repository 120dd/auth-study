import React from 'react';
import { useSelector } from "react-redux";

const UserInfo = ( props ) => {

    const user = useSelector((state => state.authReducer.user));
    console.log(user);
    return (
        <div>
            <h1>UserInfo</h1>
            <ul>
                <li>Id: {user.id}</li>
                <li>username: {user.username} </li>
                <li>signupDate: {user.signup_date} </li>
                <li>birth: {user.birth}</li>
            </ul>
        </div>
    )
};

export default UserInfo;