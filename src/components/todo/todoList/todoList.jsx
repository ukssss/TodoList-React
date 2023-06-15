import React from 'react';
import styled from 'styled-components';

export default function TodoList({ children }) {
    return (
        <Li>
            <Label>
                <Checkbox type="checkbox" />
                <span>{children}</span>
            </Label>
        </Li>
    );
}

const Li = styled.li`
    background-color: yellowgreen;
    width: 100%;
    height: 48px;
    margin-bottom: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Label = styled.label``;

const Checkbox = styled.input`
    margin-right: 10px;
`;
