import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LoginInput from '../../components/input/loginInput/loginInput';
import Button from '../../components/button/button';
import { Link } from 'react-router-dom';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState(true);

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const onChangeLoginButton = () => {
        if (email.includes('@') && password.length >= 8) {
            setStatus(false);
        }
    };

    useEffect(onChangeLoginButton);

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
                <LoginInput
                    type="password"
                    name="userPassword"
                    data-testid="password-input"
                    placeholder="Password"
                    onChange={onChangePassword}
                />
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
