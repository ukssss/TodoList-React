import React, { useState } from 'react';
import styled, { css } from 'styled-components';

function TodoItem({
    id,
    todo,
    checked,
    text,
    onToggle,
    onRemove,
    edit,
    todoId,
    editTodo,
    setEditTodo,
    onEdit,
    onEditMode,
    onCancel,
}) {
    return (
        <Todo>
            <Check
                type="checkbox"
                onChange={() => {
                    onToggle(todo);
                }}
                defaultChecked={checked}
            />

            {edit && todo.id === todoId ? (
                <>
                    <EditText
                        type="text"
                        data-testid="modify-input"
                        value={editTodo}
                        onChange={(e) => {
                            setEditTodo(e.target.value);
                        }}
                    />
                    <Save
                        type="button"
                        data-testid="submit-button"
                        onClick={() => {
                            onEdit(todo, editTodo);
                        }}
                    >
                        제출
                    </Save>
                    <Cancel
                        type="button"
                        data-testid="cancel-button"
                        onClick={() => {
                            onCancel(todo);
                        }}
                    >
                        취소
                    </Cancel>
                </>
            ) : (
                <>
                    <Text checked={checked}>{text}</Text>
                    <Edit
                        type="button"
                        onClick={() => {
                            onEditMode(todo);
                        }}
                        data-testid="delete-button"
                    >
                        수정
                    </Edit>
                    <Remove
                        type="button"
                        onClick={() => {
                            onRemove(todo.id);
                        }}
                        data-testid="modify-button"
                    >
                        삭제
                    </Remove>
                </>
            )}
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
const EditText = styled.input``;
const Save = styled.button``;
const Cancel = styled.button``;

export default React.memo(TodoItem);
