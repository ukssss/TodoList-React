import React, { useState } from 'react';
import styled from 'styled-components';

import InputText from '../../input/inputText';
import Button from '../../button/button';

import { useTodoDispatch, useTodoNextId } from '../../../context/todoContext';

function TodoCreate() {
    const [value, setValue] = useState('');

    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();

    const onChange = (e) => setValue(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();

        dispatch({
            type: 'CREATE',
            todo: {
                id: nextId.current,
                text: value,
                done: false,
            },
        });

        setValue('');
        nextId.current += 1;
    };

    return (
        <TodoForm onSubmit={onSubmit}>
            <InputText
                autoFocus
                placeholder="할 일을 입력 후, Enter 를 누르세요"
                onChange={onChange}
                value={value}
            />
            <Button type="button" onClick={onSubmit}>
                추가
            </Button>
        </TodoForm>
    );
}

const TodoForm = styled.form``;

export default React.memo(TodoCreate);
