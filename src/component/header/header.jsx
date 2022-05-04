import React , { useState } from 'react';
import styles from "./header.module.css";
import Button from "../button";
import { Link } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
import { getUsers } from "../../service/redux/authReducer/authService";
import { getLogout } from "../../service/redux/authReducer/authSlice";
import Cookies from "universal-cookie";

const Header = () => {
    const [isModaled , setIsModaled] = useState(false);
    const isLogined = useSelector(state => state.authReducer.isLogined);
    const dispatch = useDispatch();
    const cookies = new Cookies();

    const onModalClick = () => {
        isModaled ? setIsModaled(false) : setIsModaled(true);
    }

    const logOut = () => {
        dispatch(getLogout());
        cookies.remove('access_token');
    };

    const getData = () => {
        getUsers().then(res => {
            console.log(res);
        })
    }

    return (
        <header className={styles.header}>
            <h1>auth study site</h1>
            <Button btnName={`${isModaled ? "▲" : "▼"}`} clickFunction={onModalClick}/>
            <nav className={`${styles.nav} ${!isModaled && styles.none}`}>
                <Link to="/">홈</Link>
                {!isLogined
                    ?
                    <Link to="/login">로그인</Link>
                    :
                    <Link to="/">
                        <span onClick={logOut}>로그아웃</span>
                    </Link>
                }
                {!isLogined && <Link to="/signup">회원가입</Link>}
                <Link to="/userInfo">유저정보</Link>
            </nav>
            <Button btnName="유저정보가져오기" clickFunction={getData}/>
        </header>
    )
};

export default Header;