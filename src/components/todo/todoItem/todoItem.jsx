import React from 'react';
import styled, { css } from 'styled-components';

function TodoItem({ id, todo, checked, text, onToggle, onRemove }) {
    return (
        <Todo>
            <Check
                type="checkbox"
                onChange={() => {
                    onToggle(todo);
                }}
                defaultChecked={checked}
            />
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
