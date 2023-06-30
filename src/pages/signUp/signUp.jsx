import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import LoginWrapper from '../../components/login/loginWrapper/loginWrapper';
import LoginForm from '../../components/login/loginForm/loginForm';
import LoginInfo from '../../components/login/loginInfo/loginInfo';
import LoginInput from '../../components/login/loginInput/loginInput';

import Button from '../../components/button/button';
import ErrorDiv from '../../components/error/errorDiv/errorDiv';

export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');

    const [emailCheck, setEmailCheck] = useState(false);
    const [passwordCheck, setPasswordCheck] = useState(false);
    const [repasswordCheck, setRepasswordCheck] = useState(false);

    const [status, setStatus] = useState(true);

    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const onChangeRepassword = (e) => {
        setRepassword(e.target.value);
    };

    let isNameValid = name.length > 0;
    let isEmailValid = email.includes('@');
    let isPasswordValid = password.length >= 8;
    let isRepasswordValid = password === repassword;

    useEffect(() => {
        if (email.length > 0 && !isEmailValid) {
            setEmailCheck(true);
        } else {
            setEmailCheck(false);
        }
    }, [email.length, isEmailValid]);

    useEffect(() => {
        if (password.length > 0 && !isPasswordValid) {
            setPasswordCheck(true);
        } else {
            setPasswordCheck(false);
        }
    }, [password.length, isPasswordValid]);

    useEffect(() => {
        if (repassword.length > 0 && !isRepasswordValid) {
            setRepasswordCheck(true);
        } else {
            setRepasswordCheck(false);
        }
    }, [repassword.length, isRepasswordValid]);

    useEffect(() => {
        if (
            isNameValid &&
            isEmailValid &&
            isPasswordValid &&
            isRepasswordValid
        ) {
            setStatus(false);
        } else {
            setStatus(true);
        }
    }, [isNameValid, isEmailValid, isPasswordValid, isRepasswordValid]);

    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('token');

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/todo');
        }
    }, [navigate, isLoggedIn]);

    const onSignupSubmit = () => {
        axios
            .post(`http://localhost:8000/auth/signup`, {
                email: email,
                password: password,
            })
            .then(function (res) {
                console.log(res);
                alert('회원가입 완료!');
                navigate('/signin');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <LoginWrapper>
                <MyH2>회원가입 페이지</MyH2>
                <LoginForm method="post" id="signin-form">
                    <LoginInfo>Your name</LoginInfo>
                    <LoginInput
                        type="text"
                        name="username"
                        onChange={onChangeName}
                    />

                    <LoginInfo>Email</LoginInfo>
                    <LoginInput
                        type="text"
                        name="userEmail"
                        data-testid="email-input"
                        onChange={onChangeEmail}
                    />
                    {emailCheck ? (
                        <ErrorDiv>이메일 : @ 이 누락되었습니다.</ErrorDiv>
                    ) : (
                        ''
                    )}

                    <LoginInfo>Password</LoginInfo>
                    <LoginInput
                        type="password"
                        name="userPassword"
                        data-testid="password-input"
                        placeholder="At least 8 characters"
                        onChange={onChangePassword}
                    />
                    {passwordCheck ? (
                        <ErrorDiv>비밀번호 : 8자 이상으로 사용하세요.</ErrorDiv>
                    ) : (
                        ''
                    )}

                    <LoginInfo>Re-enter password</LoginInfo>
                    <LoginInput
                        type="password"
                        name="userPassword"
                        data-testid="password-input"
                        onChange={onChangeRepassword}
                    />
                    {repasswordCheck ? (
                        <ErrorDiv>
                            비밀번호 : 비밀번호가 동일하지 않습니다.
                        </ErrorDiv>
                    ) : (
                        ''
                    )}

                    <Button
                        disabled={status}
                        data-testid="signup-button"
                        onClick={onSignupSubmit}
                    >
                        회원가입
                    </Button>
                </LoginForm>
            </LoginWrapper>
        </>
    );
}

const MyH2 = styled.h2`
    font-size: 24px;
    color: #6a24fe;
    margin-bottom: 20px;
`;
