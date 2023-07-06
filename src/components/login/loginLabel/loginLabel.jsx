import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
    font-size: 16px;
    font-weight: 800;
    margin-bottom: 5px;
`;

function LoginLabel({ children }) {
    return <Label>{children}</Label>;
}

export default LoginLabel;
