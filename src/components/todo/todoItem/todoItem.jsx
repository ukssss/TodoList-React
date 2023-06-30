import React from 'react';
import styled, { css } from 'styled-components';

import { useTodoDispatch } from '../../../context/todoContext';

function TodoItem({ id, checked, text }) {
    const dispatch = useTodoDispatch();
    const onToggle = () => dispatch({ type: 'TOGGLE', id });
    const onRemove = () => dispatch({ type: 'REMOVE', id });

    return (
        <Todo>
            <Check type="checkbox" checked={checked} onClick={onToggle} />
            <Text checked={checked}>{text}</Text>
            <Remove type="button" onClick={onRemove}>
                삭제
            </Remove>
            <Edit type="button">수정</Edit>
        </Todo>
    );
}

const Todo = styled.li``;
const Check = styled.input``;
const Text = styled.div`
    ${(props) =>
        props.checked &&
        css`
            color: #ced4da;
        `}
`;
const Remove = styled.button``;
const Edit = styled.button``;

export default React.memo(TodoItem);
