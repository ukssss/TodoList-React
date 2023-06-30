import React, { useState } from 'react';
import styled from 'styled-components';

import InputText from '../../input/inputText';
import Button from '../../button/button';

function TodoCreate({ createTodo }) {
    const [value, setValue] = useState('');

    const onChange = (e) => setValue(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();

        const todoData = {
            todo: value,
        };

        createTodo(todoData);
        setValue('');
    };

    return (
        <TodoForm onSubmit={onSubmit}>
            <InputText
                autoFocus
                placeholder="할 일을 입력 후, Enter 를 누르세요"
                onChange={onChange}
                value={value}
                data-testid="new-todo-input"
            />
            <Button onClick={onSubmit} data-testid="new-todo-add-button">
                추가
            </Button>
        </TodoForm>
    );
}

const TodoForm = styled.form``;

export default React.memo(TodoCreate);
