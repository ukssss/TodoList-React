import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    width: 100%;
    height: 48px;
    padding: 0 10px;
    box-sizing: border-box;
    margin-bottom: 16px;
    border-radius: 6px;
    background-color: ${(props) => (props.$primary ? '#6A24FE' : '#f8f8f8')};
`;

function LoginInput({ ...props }) {
    return <Input {...props} />;
}

export default LoginInput;
