import React from 'react';
import styled from 'styled-components';

export default function TodoItem({ checked, text }) {
    return (
        <Todo>
            <Check type="checkbox" checked={checked} />
            <Text>{text}</Text>
            <Remove type="button">삭제</Remove>
            <Edit type="button">수정</Edit>
        </Todo>
    );
}

const Todo = styled.li``;
const Check = styled.input``;
const Remove = styled.button``;
const Edit = styled.button``;
const Text = styled.div``;
