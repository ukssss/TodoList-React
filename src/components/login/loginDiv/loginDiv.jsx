import React from 'react';
import styled from 'styled-components';

function LoginDiv({ children }) {
    return <Div>{children}</Div>;
}

const Div = styled.div`
    margin: 0 auto;
    width: 400px;
    padding: 40px;
    box-sizing: border-box;
`;

export default LoginDiv;
