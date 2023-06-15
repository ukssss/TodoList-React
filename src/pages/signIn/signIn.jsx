import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import LoginWrapper from '../../components/login/loginWrapper/loginWrapper';
import LoginForm from '../../components/login/loginForm/loginForm';
import LoginInfo from '../../components/login/loginInfo/loginInfo';
import LoginInput from '../../components/login/loginInput/loginInput';

import Button from '../../components/button/button';
import ErrorDiv from '../../components/error/errorDiv/errorDiv';
import { useNavigate } from 'react-router-dom';

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
    }, [email.length, isEmailValid]);

    useEffect(() => {
        if (password.length > 0 && !isPasswordValid) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }
    }, [password.length, isPasswordValid]);

    useEffect(() => {
        if (isEmailValid && isPasswordValid) {
            setStatus(false);
        } else {
            setStatus(true);
        }
    }, [isEmailValid, isPasswordValid]);

    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('token');

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/todo');
        }
    }, [navigate, isLoggedIn]);

    const onDirectSignup = () => {
        navigate('/signup');
    };

    const onSigninSubmit = () => {
        axios
            .post(`http://localhost:8000/auth/signin`, {
                email: email,
                password: password,
            })
            .then((res) => {
                console.log(res);
                localStorage.setItem('token', res.data.access_token);
                navigate('/todo');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <LoginWrapper>
            <MyH2>로그인 페이지</MyH2>
            <LoginForm method="post" id="signin-form">
                <LoginInfo>Email</LoginInfo>
                <LoginInput
                    type="text"
                    name="userEmail"
                    data-testid="email-input"
                    onChange={onChangeEmail}
                />
                {emailError ? (
                    <ErrorDiv>이메일 : @ 이 누락되었습니다</ErrorDiv>
                ) : (
                    ''
                )}

                <LoginInfo>Password</LoginInfo>
                <LoginInput
                    type="password"
                    name="userPassword"
                    data-testid="password-input"
                    onChange={onChangePassword}
                />
                {passwordError ? (
                    <ErrorDiv>비밀번호 : 8자 이상으로 사용하세요.</ErrorDiv>
                ) : (
                    ''
                )}

                <Button
                    disabled={status}
                    data-testid="signin-button"
                    onClick={onSigninSubmit}
                >
                    로그인
                </Button>
                <Button onClick={onDirectSignup}>회원가입</Button>
            </LoginForm>
        </LoginWrapper>
    );
}

const MyH2 = styled.h2`
    font-size: 24px;
    color: #6a24fe;
    margin-bottom: 20px;
`;
