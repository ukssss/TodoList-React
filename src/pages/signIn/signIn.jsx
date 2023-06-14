import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LoginInput from '../../components/input/loginInput/loginInput';
import Button from '../../components/button/button';
import ErrorDiv from '../../components/error/errorDiv/errorDiv';
import { Link } from 'react-router-dom';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState(true);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    let isEmailValid = email.includes('@');
    let isPasswordValid = password.length >= 8;

    useEffect(() => {
        if (email.length > 0 && !isEmailValid) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
    }, [email]);

    useEffect(() => {
        if (password.length > 0 && !isPasswordValid) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }
    }, [password]);

    useEffect(() => {
        if (isEmailValid && isPasswordValid) {
            setStatus(false);
        }
    }, [isEmailValid, isPasswordValid]);

    return (
        <LoginWrapper>
            <MyH2>로그인 페이지</MyH2>
            <LoginForm method="post" id="signin-form">
                <LoginInput
                    type="text"
                    name="userEmail"
                    data-testid="email-input"
                    placeholder="Email"
                    onChange={onChangeEmail}
                />
                {emailError ? (
                    <ErrorDiv>이메일 : @ 이 누락되었습니다</ErrorDiv>
                ) : (
                    ''
                )}

                <LoginInput
                    type="password"
                    name="userPassword"
                    data-testid="password-input"
                    placeholder="Password"
                    onChange={onChangePassword}
                />
                {passwordError ? (
                    <ErrorDiv>비밀번호 : 8자 이상으로 사용하세요.</ErrorDiv>
                ) : (
                    ''
                )}

                <Button disabled={status}>로그인</Button>
                <Button>
                    <Link to="/signup">회원가입</Link>
                </Button>
            </LoginForm>
        </LoginWrapper>
    );
}

const LoginWrapper = styled.div`
    margin: 0 auto;
    width: 400px;
    height: 350px;
    padding: 40px;
    box-sizing: border-box;
`;

const MyH2 = styled.h2`
    font-size: 24px;
    color: #6a24fe;
    margin-bottom: 20px;
`;

const LoginForm = styled.form``;
