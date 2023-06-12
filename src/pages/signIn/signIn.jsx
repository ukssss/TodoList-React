import React, { useState } from 'react';
import styled from 'styled-components';

export default function SignIn() {
    const [id, setID] = useState('');
    const [password, setPW] = useState('');

    const onChangeID = () => {};
    const onChangePW = () => {};
    const onSubmit = () => {};

    return (
        <LoginWrapper>
            <MyH2>로그인 페이지</MyH2>
            <LoginForm method="post" id="signin-form">
                <LoginInput
                    type="text"
                    name="userID"
                    placeholder="ID"
                    onChange={onChangeID}
                />
                <LoginInput
                    type="password"
                    name="userPassword"
                    placeholder="Password"
                    onChange={onChangePW}
                />
                <LoginLabel htmlFor="remember">
                    <LoginCheckbox type="checkbox" id="remember" />
                    아이디 저장하기
                </LoginLabel>
                <LoginSubmit type="submit" value="Login" onClick={onSubmit} />
            </LoginForm>
        </LoginWrapper>
    );
}

const LoginWrapper = styled.div`
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

const LoginInput = styled.input`
    width: 100%;
    height: 48px;
    padding: 0 10px;
    box-sizing: border-box;
    margin-bottom: 16px;
    border-radius: 6px;
    background-color: #f8f8f8;
`;

const LoginLabel = styled.label`
    color: #999999;
    padding-left: 26px;
    padding-right: 26px;
`;

const LoginCheckbox = styled.input``;

const LoginSubmit = styled.input`
    color: #fff;
    font-size: 16px;
    background-color: #6a24fe;
    margin-top: 20px;
`;
