import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import LoginDiv from '../../components/login/loginDiv/loginDiv';
import LoginForm from '../../components/login/loginForm/loginForm';
import LoginInput from '../../components/login/loginInput/loginInput';

import MyH2 from '../../components/section/myH2/myH2';
import Button from '../../components/button/button';
import ErrorDiv from '../../components/error/errorDiv/errorDiv';
import SignInUpStyle from '../../style/signInUpStyle/signInUpStyle';

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
        <>
            <SignInUpStyle />
            <LoginDiv>
                <MyH2>Sign in</MyH2>
                <LoginForm method="post" id="signin-form">
                    <LoginInput
                        type="text"
                        name="userEmail"
                        data-testid="email-input"
                        onChange={onChangeEmail}
                        placeholder="Email"
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
                        onChange={onChangePassword}
                        placeholder="Password"
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
                        SIGN IN
                    </Button>
                    <Button onClick={onDirectSignup}>SIGN UP</Button>
                </LoginForm>
            </LoginDiv>
        </>
    );
}
