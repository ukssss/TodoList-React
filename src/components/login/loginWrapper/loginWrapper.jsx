import React from 'react';
import styled from 'styled-components';

const LoginDiv = styled.div`
    margin: 0 auto;
    width: 400px;
    padding: 40px;
    box-sizing: border-box;
`;

export default function LoginWrapper({ children }) {
    return <LoginDiv>{children}</LoginDiv>;
}
