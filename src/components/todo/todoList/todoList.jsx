import React from 'react';
import styled from 'styled-components';

export default function TodoList({ children }) {
    return <List>{children}</List>;
}

const List = styled.ul`
    margin: 0;
    padding: 0;
    height: 100%;
    margin-top: 20px;
    overflow: scroll;
`;
