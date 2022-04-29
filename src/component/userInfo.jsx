import React from 'react';
import {useSelector} from "react-redux";

const UserInfo = (props) => {

    const user =useSelector((state => state.authReducer.user));
    console.log(user);
    return(
        <div>
            <h1>UserInfo</h1>
            <ul>
                <li>Id: {user.id}</li>
                <li>username: </li>
                <li>signupDate: </li>
                <li>birth: {user.birthDay}</li>
            </ul>
        </div>
    )
};

export default UserInfo;