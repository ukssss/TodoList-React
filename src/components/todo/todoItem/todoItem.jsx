import React from 'react';
import styled, { css } from 'styled-components';

function TodoItem({ id, todo, checked, text, onToggle, onRemove, onEdit }) {
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
            <Edit type="button" onClick={onEdit} data-testid="delete-button">
                수정
            </Edit>
            <Remove
                type="button"
                onClick={onRemove}
                data-testid="modify-button"
            >
                삭제
            </Remove>
        </Todo>
    );
}

const Todo = styled.li`
    display: flex;
    flex-direction: row;
`;
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
