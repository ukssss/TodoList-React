import React from 'react';
import styled from 'styled-components';

const LoginText = styled.div`
    font-size: 16px;
    font-weight: 800;
    margin-bottom: 5px;
`;

function LoginInfo({ children }) {
    return <LoginText>{children}</LoginText>;
}

export default LoginInfo;
