import React from 'react';
import styled from 'styled-components';

import LoginForm from '../../components/login/loginForm/loginForm';
import LoginInfo from '../../components/login/loginInfo/loginInfo';
import LoginInput from '../../components/login/loginInput/loginInput';
import Button from '../../components/button/button';

export default function SignUp() {
    return (
        <LoginWrapper>
            <MyH2>회원가입 페이지</MyH2>
            <LoginForm method="post" id="signin-form">
                <LoginInfo>Your name</LoginInfo>
                <LoginInput
                    type="text"
                    name="userEmail"
                    data-testid="email-input"
                />

                <LoginInfo>Email</LoginInfo>
                <LoginInput
                    type="text"
                    name="userEmail"
                    data-testid="email-input"
                />

                <LoginInfo>Password</LoginInfo>
                <LoginInput
                    type="password"
                    name="userPassword"
                    data-testid="password-input"
                    placeholder="At least 8 characters"
                />

                <LoginInfo>Re-enter password</LoginInfo>
                <LoginInput
                    type="password"
                    name="userPassword"
                    data-testid="password-input"
                />

                <Button>회원가입</Button>
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
