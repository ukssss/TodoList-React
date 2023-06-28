import React from 'react';
import styled from 'styled-components';

import TodoItem from '../todoItem/todoItem';
import { useTodoState } from '../../../context/todoContext';

export default function TodoList() {
    const todos = useTodoState();

    return (
        <List>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    checked={todo.done}
                    text={todo.text}
                />
            ))}
        </List>
    );
}

const List = styled.ul``;
