import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { TodoProvider } from '../../context/todoContext/todoContext';

import TodoHead from '../../components/todo/todoHead/todoHead';
import TodoList from '../../components/todo/todoList/todoList';
import TodoCreate from '../../components/todo/todoCreate/todoCreate';

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
            <MyH2>Todo List</MyH2>
            <TodoWrapper>
                <TodoHead />
                <TodoCreate />
                <TodoList />
            </TodoWrapper>
        </TodoProvider>
    );
}

const TodoWrapper = styled.div``;
const MyH2 = styled.h2``;
