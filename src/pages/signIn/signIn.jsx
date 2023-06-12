import React, { useState } from 'react';
import styled from 'styled-components';
import LoginInput from '../../components/input/loginInput/loginInput';
import LoginCheckbox from '../../components/input/loginCheckbox/loginCheckbox';
import Button from '../../components/button/button';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const onSubmit = () => {};

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
                <Button>로그인</Button>
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

const LoginForm = styled.form``;
