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

import { DEV_ADDRESS } from '../../api/api';

export default function SignIn() {
    // signIn

    const [login, setLogin] = useState({
        email: '',
        password: '',
        status: true,
        emailCheck: false,
        passwordCheck: false,
    });

    const onChangeEmail = (e) => {
        setLogin((prevState) => {
            return { ...prevState, email: e.target.value };
        });
    };

    const onChangePassword = (e) => {
        setLogin((prevState) => {
            return { ...prevState, password: e.target.value };
        });
    };

    const { email, password, status, emailCheck, passwordCheck } = login;
    const isEmailValid = email.includes('@') && email.includes('.com'); // 이메일 유효성 검사
    const isPasswordValid = password.length >= 8; // 비밀번호 유효성 검사

    const onChangeStatus = () => {
        if (isEmailValid && isPasswordValid) {
            setLogin((prevState) => {
                return { ...prevState, status: false };
            });
        } else {
            setLogin((prevState) => {
                return { ...prevState, status: true };
            });
        }
    };

    const onCheckEmail = () => {
        if (!isEmailValid && email.length > 0) {
            setLogin((prevState) => {
                return { ...prevState, emailCheck: true };
            });
        } else {
            setLogin((prevState) => {
                return { ...prevState, emailCheck: false };
            });
        }
    };
    const onCheckPassword = () => {
        if (!isPasswordValid && password.length > 0) {
            setLogin((prevState) => {
                return { ...prevState, passwordCheck: true };
            });
        } else {
            setLogin((prevState) => {
                return { ...prevState, passwordCheck: false };
            });
        }
    };

    const url = DEV_ADDRESS;
    const api = axios.create({
        baseURL: url,
        headers: {
            'Content-Type': `application/json`,
        },
    });

    const onSubmit = () => {
        api.post('/auth/signin', {
            email,
            password,
        })
            .then((res) => {
                localStorage.setItem('token', res.data.access_token);
                navigate('/todo');
            })
            .catch((err) => {
                alert('존재하지 않는 계정입니다');
            });
    };

    useEffect(onChangeStatus, [isEmailValid, isPasswordValid]);
    useEffect(onCheckEmail, [isEmailValid, email.length]);
    useEffect(onCheckPassword, [isPasswordValid, password.length]);

    // navigate
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('token');

    const onCheckLoggedIn = () => {
        isLoggedIn && navigate('/todo');
    };

    const onDirectSignUp = () => {
        navigate('/signup');
    };

    useEffect(onCheckLoggedIn, [isLoggedIn, navigate]);

    return (
        <>
            <SignInUpStyle />
            <LoginDiv>
                <MyH2>Sign In</MyH2>
                <LoginForm>
                    <LoginInput type="text" placeholder="Email" onChange={onChangeEmail} />
                    {emailCheck ? <ErrorDiv>이메일 양식에 어긋납니다.</ErrorDiv> : ''}
                    <LoginInput type="password" placeholder="Password" onChange={onChangePassword} />
                    {passwordCheck ? <ErrorDiv>올바르지 않은 비밀번호 양식입니다.</ErrorDiv> : ''}
                    <Button disabled={status} onClick={onSubmit}>
                        Sign In
                    </Button>
                    <Button onClick={onDirectSignUp}>Sign Up</Button>
                </LoginForm>
            </LoginDiv>
        </>
    );
}
