import React from 'react';

export default function SignIn() {
    return (
        <>
            <form method="post" id="signin-form">
                <input type="text" name="userID" placeholder="ID" />
                <input
                    type="password"
                    name="userPassword"
                    placeholder="Password"
                />
                <label htmlFor="remember">
                    <input type="checkbox" id="remember" />
                    아이디 저장하기
                </label>
                <input type="submit" value="Login" />
            </form>
        </>
    );
}
