import React from 'react';
import styled from 'styled-components';
import TodoItem from '../todoItem/todoItem';

const TodoListBlock = styled.div``;

export default function TodoList() {
    return (
        <TodoListBlock>
            <TodoItem text="밥묵기" done={true} />
            <TodoItem text="양치하기" done={true} />
            <TodoItem text="공부하기" done={true} />
            <TodoItem text="잠자기" done={true} />
        </TodoListBlock>
    );
}
