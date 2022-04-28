import React, {useRef} from 'react';
import Button from "../button";
import styles from  "./signupPage.module.css";
import {signUp} from "../../service/authService/authService";

const SignupPage = (props) => {

    const idRef = useRef();
    const pwRef = useRef();
    const pwConfigRef = useRef();
    const formRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        const id = idRef.current.value;
        const pw = pwRef.current.value;
        const pwConfig = pwConfigRef.current.value;
        if (pw !== pwConfig) {
            alert("비밀번호가 서로 다릅니다");
            pwRef.current.value = "";
            pwConfigRef.current.value = "";
            return
        }
        console.log(`id:${id},pw:${pw},config:${pwConfig}`);
        signUp(id,pw);
        formRef.current.reset();
    }

    return(
        <div className={styles.signupPage}>
            <h1>signup</h1>
            <form ref={formRef} className={styles.signupForm} onSubmit={onSubmit}>
                <input ref={idRef} type="text" placeholder="아이디: 최대 7글자" maxLength="7"/>
                <input ref={pwRef} type="password" placeholder="비밀번호: 최대7글자" maxLength="7"/>
                <input ref={pwConfigRef} type="password" placeholder="비밀번호 확인" maxLength="7"/>
                <Button btnName="가입" />
            </form>
        </div>
    )
};

export default SignupPage;