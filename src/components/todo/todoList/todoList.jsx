import React from 'react';
import styled from 'styled-components';
import TodoItem from '../todoItem/todoItem';
import { useTodoState } from '../../../context/todoContext/todoContext';

const TodoListBlock = styled.div``;

export default function TodoList() {
    const todos = useTodoState();

    return (
        <TodoListBlock>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    done={todo.done}
                />
            ))}
        </TodoListBlock>
    );
}
