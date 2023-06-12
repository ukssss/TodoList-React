import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/button/button';
import LoginInput from '../../components/input/loginInput/loginInput';
import LoginCheckbox from '../../components/input/loginCheckbox/loginCheckbox';

export default function SignIn() {
    const [id, setID] = useState('');
    const [password, setPW] = useState('');

    const onChangeID = (e) => {
        console.log(`ID : ${e.target.value}`);
    };
    const onChangePW = (e) => {
        console.log(`PW : ${e.target.value}`);
    };
    const onSubmit = (e) => {
        console.log(`Nice Submit !`);
    };

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
                <LoginCheckbox>아이디 저장하기</LoginCheckbox>
                <LoginInput
                    $primary
                    type="submit"
                    value="Login"
                    onClick={onSubmit}
                />
            </LoginForm>
            <Button>Test Button</Button>
        </LoginWrapper>
    );
}

const LoginWrapper = styled.div`
    width: 400px;
    height: 350px;
    padding: 40px;
    box-sizing: border-box;
    background-color: yellowgreen;
`;

const MyH2 = styled.h2`
    font-size: 24px;
    color: #6a24fe;
    margin-bottom: 20px;
`;

const LoginForm = styled.form``;
