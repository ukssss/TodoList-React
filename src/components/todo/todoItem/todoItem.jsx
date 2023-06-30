import React from 'react';
import styled, { css } from 'styled-components';

function TodoItem({
    id,
    todo,
    checked,
    text,
    onToggle,
    onRemove,
    edit,
    setEdit,
    todoId,
    setTodoId,
    onEdit,
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
                    <EditText type="text" data-testid="modify-input" />
                    <Save type="button" data-testid="submit-button">
                        제출
                    </Save>
                    <Cancel
                        type="button"
                        data-testid="cancel-button"
                        onClick={() => {
                            setEdit(false);
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
                        onClick={(e) => {
                            setEdit(true);
                            setTodoId(todo.id);
                            console.log(todo.id);
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
