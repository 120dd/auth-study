import React , { useRef } from 'react';
import Button from "../button";
import styles from "./signupPage.module.css";
import { signUp } from "../../service/authService";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {

    const idRef = useRef();
    const pwRef = useRef();
    const pwConfigRef = useRef();
    const nameRef = useRef();
    const formRef = useRef();
    const birthRef = useRef();

    let navigate = useNavigate();

    const onSubmit = async ( e ) => {
        e.preventDefault();
        const id = idRef.current.value;
        const pw = pwRef.current.value;
        const pwConfig = pwConfigRef.current.value;
        const birth = birthRef.current.value;
        const userName = nameRef.current.value;

        if (pw !== pwConfig) {
            alert("비밀번호가 서로 다릅니다");
            pwRef.current.value = "";
            pwConfigRef.current.value = "";
            return;
        }

        if (!id || !pw || !pwConfig || !birth || !userName) {
            alert("입력되지않은 값이 있습니다.");
            return;
        }

        await signUp({ id , pw , birth , userName });
        formRef.current.reset();
        alert("회원가입이 완료되었습니다");
        navigate("/");
    }

    return (
        <div className={styles.signupPage}>
            <h1>signup</h1>
            <form ref={formRef} className={styles.signupForm} onSubmit={onSubmit}>
                <input ref={idRef} type="text" placeholder="아이디: 최대 7글자" maxLength="7"/>
                <input ref={pwRef} type="password" placeholder="비밀번호: 최대7글자" maxLength="7"/>
                <input ref={pwConfigRef} type="password" placeholder="비밀번호 확인" maxLength="7"/>
                <br/>
                <input ref={nameRef} type="text" placeholder="사용자 이름" maxLength="7"/>
                <input ref={birthRef} type="date"/>
                <Button btnName="가입"/>
            </form>
        </div>
    )
};

export default SignupPage;