import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import TodoForm from '../../components/todo/todoForm/todoForm';
import TodoUl from '../../components/todo/todoUl/todoUl';
import TodoList from '../../components/todo/todoList/todoList';

export default function Todo() {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('token');

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/signin');
        }
    }, [navigate, isLoggedIn]);

    return (
        <TodoWrapper>
            <MyH2>Todo List</MyH2>
            <TodoForm />
            <TodoUl>
                <TodoList>Todo 1</TodoList>
                <TodoList>Todo 2</TodoList>
            </TodoUl>
        </TodoWrapper>
    );
}

const TodoWrapper = styled.div``;
const MyH2 = styled.h2``;
