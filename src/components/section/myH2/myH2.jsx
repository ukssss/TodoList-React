import React from 'react';
import styled from 'styled-components';

function MyH2({ children }) {
    return <H2>{children}</H2>;
}

const H2 = styled.h2`
    font-size: 24px;
    font-weight: bold;
    color: #008000;
    margin-bottom: 20px;
`;

export default MyH2;
