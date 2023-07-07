import React from 'react';
import styled, { css } from 'styled-components';
import Checkbox from '../../checkbox/checkbox';
import Button from '../../button/button';

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
            <Checkbox
                id={text}
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
                    <Button
                        data-testid="submit-button"
                        onClick={() => {
                            onEdit(todo, editTodo);
                        }}
                        width={'50px'}
                    >
                        제출
                    </Button>
                    <Button
                        data-testid="cancel-button"
                        onClick={() => {
                            onCancel(todo);
                        }}
                        width={'50px'}
                    >
                        취소
                    </Button>
                </>
            ) : (
                <>
                    <Text checked={checked}>{text}</Text>
                    <StyledDiv>
                        <Button
                            onClick={() => {
                                onEditMode(todo);
                            }}
                            data-testid="delete-button"
                            width={'50px'}
                        >
                            수정
                        </Button>
                        <Button
                            onClick={() => {
                                onRemove(todo.id);
                            }}
                            data-testid="modify-button"
                            width={'50px'}
                        >
                            삭제
                        </Button>
                    </StyledDiv>
                </>
            )}
        </Todo>
    );
}

const Todo = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 20px 0;
`;

const Text = styled.div`
    font-size: 24px;
    flex: 1;
    padding: 0 30px;

    ${(props) =>
        props.checked &&
        css`
            color: #ced4da;
        `};
`;

const EditText = styled.input`
    font-size: 24px;
    flex: 1;
    margin: 0 30px;
`;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export default React.memo(TodoItem);
