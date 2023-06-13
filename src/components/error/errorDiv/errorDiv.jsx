import React from 'react';
import styled from 'styled-components';

const ErrorMessage = styled.div`
    color: red;
    font-size: 16px;
    margin-bottom: 16px;
`;

function ErrorDiv({ children }) {
    return <ErrorMessage>{children}</ErrorMessage>;
}

export default ErrorDiv;
