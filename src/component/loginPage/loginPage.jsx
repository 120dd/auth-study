import React , { useEffect , useRef } from 'react';
import Button from "../button";
import styles from "./logonPage.module.css";
import { useDispatch , useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getLogin , getLogout , getUserInfo } from "../../redux/authReducer/authSlice";

const LoginPage = () => {

    const dispatch = useDispatch();
    const isLogined = useSelector((state => state.authReducer.isLogined));
    const access_token = useSelector(state => state.authReducer.access_token);
    let navigate = useNavigate();

    const idRef = useRef();
    const pwRef = useRef();
    const formRef = useRef();

    useEffect(() => {
        if (isLogined) {
            alert("로그인에 성공했습니다");
            navigate('/');
        } else {
            dispatch(getLogout());
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    } , [isLogined])

    useEffect(() => {
        if (access_token) {
            dispatch(getUserInfo(access_token));
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    } , [access_token])

    const onLogin = async ( e ) => {
        e.preventDefault();
        let { value: id } = idRef.current;
        const { value: pw } = pwRef.current;
        await dispatch(getLogin({ id , pw }));
        formRef.current.reset();
    }

    return (
        <div className={styles.loginPage}>
            <h1>login</h1>
            <form ref={formRef} className={styles.loginForm}>
                <input ref={idRef} type="text" placeholder="아이디를 입력하세요"/>
                <input ref={pwRef} type="password" placeholder="비밀번호를 입력하세요"/>
                <Button btnName="login" clickFunction={onLogin}/>
            </form>
        </div>
    )
};

export default LoginPage;