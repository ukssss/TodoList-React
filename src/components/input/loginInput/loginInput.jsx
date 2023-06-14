import React, { forwardRef } from 'react';
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

const LoginInput = forwardRef(({ ...props }, ref) => {
    return <Input ref={ref} {...props} />;
});

export default LoginInput;
