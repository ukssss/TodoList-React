import React from 'react';
import styled from 'styled-components';

export default function TodoUl({ children }) {
    return <Ul>{children}</Ul>;
}

const Ul = styled.ul`
    margin: 0 auto;
    width: 800px;
    padding: 40px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    list-style-type: none;
    background-color: orange;
`;
