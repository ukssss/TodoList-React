import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { DEV_ADDRESS } from '../../api/api';

import TodoCreate from '../../components/todo/todoCreate/todoCreate';
import TodoList from '../../components/todo/todoList/todoList';
import TodoTemplate from '../../components/todo/todoTemplate/todoTemplate';
import TodoItem from '../../components/todo/todoItem/todoItem';

import { TodoProvider } from '../../context/todoContext';

const access_token = localStorage.getItem('token');
const url = DEV_ADDRESS;
const api = axios.create({
    baseURL: url,
    headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': `application/json`,
    },
});

export default function Todo() {
    const navigate = useNavigate();
    const access_token = localStorage.getItem('token');

    useEffect(() => {
        if (!access_token) {
            navigate('/signin');
        }
    }, [navigate, access_token]);

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos();
    }, []);

    const getTodos = async () => {
        try {
            const res = await api.get('/todos');
            setTodos(res.data);
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const createTodo = async (todoData) => {
        try {
            const res = await api.post('/todos', todoData);
            getTodos(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <TodoProvider>
            <TodoTemplate>
                <MyH2>Todo List</MyH2>
                <TodoCreate createTodo={createTodo} />
                <TodoList>
                    {todos &&
                        todos.map((todo) => (
                            <TodoItem
                                key={todo.id}
                                id={todo.id}
                                checked={todo.isCompleted}
                                text={todo.todo}
                            />
                        ))}
                </TodoList>
            </TodoTemplate>
        </TodoProvider>
    );
}

const MyH2 = styled.h2``;
