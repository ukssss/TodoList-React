import React from 'react';
import styled from 'styled-components';

import TodoTemplate from '../../components/todo/todoTemplate/todoTemplate';
import TodoHead from '../../components/todo/todoHead/todoHead';
import TodoList from '../../components/todo/todoList/todoList';
import TodoCreate from '../../components/todo/todoCreate/todoCreate';

export default function Todo() {
    return (
        <>
            <TodoTemplate>
                <TodoHead />
                <TodoList />
                <TodoCreate />
            </TodoTemplate>
        </>
    );
}
