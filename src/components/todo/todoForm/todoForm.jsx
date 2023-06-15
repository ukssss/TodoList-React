import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../button/button';

export default function TodoForm() {
    const [todo, setTodo] = useState('');

    const addTodo = (e) => {
        setTodo(e.target.value);
    };

    return (
        <Form method="post" id="todo-form">
            <Input
                type="text"
                name="todo"
                placeholder="써보든가"
                onChange={addTodo}
            />
            <Button width="yes">제출</Button>
        </Form>
    );
}

const Form = styled.form`
    margin: 0 auto;
    width: 800px;
    padding: 40px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: pink;
`;

const Input = styled.input`
    width: 100%;
    height: 48px;
    padding: 0 10px;
    box-sizing: border-box;
    margin-bottom: 16px;
    border-radius: 6px;
    border-bottom: 5px solid gray;
    margin-right: 5px;
`;
