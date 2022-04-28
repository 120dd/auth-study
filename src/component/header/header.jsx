import React, {useState} from 'react';
import styles from "./header.module.css";
import Button from "../button";
import {Link} from "react-router-dom";

const Header = (props) => {
    const [isModaled, setIsModaled] = useState(false);

    const onModalClick = () => {
        isModaled? setIsModaled(false):setIsModaled(true);
    }
    return(
        <header className={styles.header}>
            <h1>auth study site</h1>
            <Button btnName={`${isModaled ? "▲":"▼"}`} clickFunction={onModalClick} />
            <nav className={`${styles.nav} ${!isModaled && styles.none}`}>
                <Link to="/">홈</Link>
                <Link to="/login">로그인</Link>
                <Link to="/signup">회원가입</Link>
                <Link to="/userInfo">유저정보</Link>
            </nav>
        </header>
    )
};

export default Header;