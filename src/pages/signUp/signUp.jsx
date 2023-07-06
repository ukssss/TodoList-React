import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LoginDiv from '../../components/login/loginDiv/loginDiv';
import LoginForm from '../../components/login/loginForm/loginForm';
import LoginLabel from '../../components/login/loginLabel/loginLabel';
import LoginInput from '../../components/login/loginInput/loginInput';

import MyH2 from '../../components/section/myH2/myH2';
import Button from '../../components/button/button';
import ErrorDiv from '../../components/error/errorDiv/errorDiv';
import SignInUpStyle from '../../style/signInUpStyle/signInUpStyle';

export default function SignUp() {
    const [account, setAccount] = useState({
        name: '',
        email: '',
        password: '',
        repassword: '',
        emailCheck: false,
        passwordCheck: false,
        repasswordCheck: false,
        status: true,
    });

    const onChangeName = (e) => {
        setAccount((prevState) => {
            return { ...prevState, name: e.target.value };
        });
    };

    const onChangeEmail = (e) => {
        setAccount((prevState) => {
            return { ...prevState, email: e.target.value };
        });
    };

    const onChangePassword = (e) => {
        setAccount((prevState) => {
            return { ...prevState, password: e.target.value };
        });
    };

    const onChangeRepassword = (e) => {
        setAccount((prevState) => {
            return { ...prevState, repassword: e.target.value };
        });
    };

    const { name, email, password, repassword, emailCheck, passwordCheck, repasswordCheck, status } = account;

    // 이메일 유효성 검사 (이메일 조건: @ 포함)

    const isEmailValid = email.includes('@') && email.includes('.com');
    const onCheckEmail = () => {
        if (email.length > 0 && !isEmailValid) {
            setAccount((prevState) => {
                return { ...prevState, emailCheck: true };
            });
        } else {
            setAccount((prevState) => {
                return { ...prevState, emailCheck: false };
            });
        }
    };

    useEffect(onCheckEmail, [email.length, isEmailValid]);

    // 비밀번호 유효성 검사 (비밀번호 조건: 8자 이상)

    const isPasswordValid = password.length >= 8;
    const onCheckPassword = () => {
        if (password.length > 0 && !isPasswordValid) {
            setAccount((prevState) => {
                return { ...prevState, passwordCheck: true };
            });
        } else {
            setAccount((prevState) => {
                return { ...prevState, passwordCheck: false };
            });
        }
    };

    useEffect(onCheckPassword, [password.length, isPasswordValid]);

    const isRepasswordValid = password === repassword;
    const onCheckRepassword = () => {
        if (password.length > 0 && !isRepasswordValid) {
            setAccount((prevState) => {
                return { ...prevState, repasswordCheck: true };
            });
        } else {
            setAccount((prevState) => {
                return { ...prevState, repasswordCheck: false };
            });
        }
    };

    useEffect(onCheckRepassword, [password.length, isRepasswordValid]);

    // 입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못한다면 button에 disabled 속성을 부여해주세요

    const onChangeStatus = () => {
        if (isEmailValid && isPasswordValid && isRepasswordValid) {
            setAccount((prevState) => {
                return { ...prevState, status: false };
            });
        } else {
            setAccount((prevState) => {
                return { ...prevState, status: true };
            });
        }
    };

    useEffect(onChangeStatus, [isEmailValid, isPasswordValid, isRepasswordValid]);

    console.log(account);

    // navigate
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('token');

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/todo');
        }
    }, [navigate, isLoggedIn]);

    return (
        <>
            <SignInUpStyle />
            <LoginDiv>
                <MyH2>Sign Up</MyH2>
                <LoginForm method="post" id="signin-form">
                    <LoginLabel>
                        Name
                        <LoginInput type="text" onChange={onChangeName} />
                    </LoginLabel>
                    <LoginLabel>
                        Email
                        <LoginInput type="email" placeholder="example@gmail.com" onChange={onChangeEmail} />
                    </LoginLabel>
                    {emailCheck ? <ErrorDiv>이메일 양식에 어긋납니다.</ErrorDiv> : ''}
                    <LoginLabel>
                        Password
                        <LoginInput type="password" placeholder="8 digits or more" onChange={onChangePassword} />
                    </LoginLabel>
                    {passwordCheck ? <ErrorDiv>올바르지 않은 비밀번호 양식입니다.</ErrorDiv> : ''}
                    <LoginLabel>
                        Re-Password
                        <LoginInput type="password" onChange={onChangeRepassword} />
                    </LoginLabel>
                    {repasswordCheck ? <ErrorDiv>비밀번호가 일치하지 않습니다.</ErrorDiv> : ''}
                    <Button disabled={status}>Sign Up</Button>
                    <Button>Sign in as an existing member</Button>
                </LoginForm>
            </LoginDiv>
        </>
    );
}
