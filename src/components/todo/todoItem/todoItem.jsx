import React from 'react';
import styled from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';

const Remove = styled.div``;
const TodoItemBlock = styled.div``;
const CheckCircle = styled.div``;
const Text = styled.div``;

export default function TodoItem({ id, done, text }) {
    return (
        <TodoItemBlock>
            <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
            <Text done={done}>{text}</Text>
            <Remove>
                <MdDelete />
            </Remove>
        </TodoItemBlock>
    );
}
