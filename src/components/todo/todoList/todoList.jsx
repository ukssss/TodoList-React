import React from 'react';
import styled from 'styled-components';

import TodoItem from '../todoItem/todoItem';
import { useTodoState } from '../../../context/todoContext';

export default function TodoList() {
    const todos = useTodoState();
    console.log(todos);

    return (
        <List>
            <TodoItem checked={true} text="밥묵기" />
            <TodoItem checked={false} text="샤워하기"></TodoItem>
            <TodoItem checked={false} text="공부하기"></TodoItem>
            <TodoItem checked={false} text="취침하기"></TodoItem>
        </List>
    );
}

const List = styled.ul``;
