import React from 'react';
import styled from 'styled-components';

export default function TodoList({ children }) {
    return <List>{children}</List>;
}

const List = styled.ul`
    height: 100%;
    overflow: scroll;
`;
