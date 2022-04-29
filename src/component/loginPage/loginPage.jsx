import React, {useEffect, useRef} from 'react';
import Button from "../button";
import styles from "./logonPage.module.css";
import {useDispatch, useSelector} from "react-redux";
import {getLogin} from "../../service/redux/authReducer/authSlice";
import {useNavigate} from "react-router-dom";
import {signIn} from "../../service/redux/authReducer/authService";

const LoginPage = (props) => {

    const dispatch = useDispatch();
    const isLogined = useSelector((state => state.authReducer.isLogined));
    let navigate = useNavigate();
    //
    // useEffect(() => {
    //     if (isLogined === true) {
    //         alert('이미 로그인 된 사용자입니다.')
    //         navigate('/');
    //     }
    // }, [])

    const idRef = useRef();
    const pwRef = useRef();

    const onLogin = async (e) => {
        e.preventDefault();
        const id = idRef.current.value;
        const pw = pwRef.current.value;
        await dispatch(getLogin({id, pw}))
            // .then(res => {
            //     console.log(isLogined);
            //     if (isLogined === true){
            //         alert("로그인 성공");
            //         navigate("/");
            //     }
            // })
    }

    useEffect(()=>{
        if (isLogined) {
            console.log(isLogined);
        }
    },[isLogined])

    return (
        <div className={styles.loginPage}>
            <h1>login</h1>
            <form className={styles.loginForm}>
                <input ref={idRef} type="text" placeholder="아이디를 입력하세요"/>
                <input ref={pwRef} type="text" placeholder="비밀번호를 입력하세요"/>
                <Button btnName="login" clickFunction={onLogin}/>
            </form>
        </div>
    )
};

export default LoginPage;