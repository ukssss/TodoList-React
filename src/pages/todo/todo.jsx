import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import TodoCreate from '../../components/todo/todoCreate/todoCreate';
import TodoList from '../../components/todo/todoList/todoList';
import TodoTemplate from '../../components/todo/todoTemplate/todoTemplate';
import { TodoProvider } from '../../context/todoContext';

export default function Todo() {
    const navigate = useNavigate();
    const access_token = localStorage.getItem('token');

    useEffect(() => {
        if (!access_token) {
            navigate('/signin');
        }
    }, [navigate, access_token]);

    return (
        <TodoProvider>
            <TodoTemplate>
                <MyH2>Todo List</MyH2>
                <TodoCreate />
                <TodoList />
            </TodoTemplate>
        </TodoProvider>
    );
}

const MyH2 = styled.h2``;
