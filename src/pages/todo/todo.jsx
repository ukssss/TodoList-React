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

    const onToggle = async (todo) => {
        try {
            const res = await api.put(`/todos/${todo.id}`, {
                isCompleted: !todo.isCompleted,
                todo: todo.todo,
            });
            console.log(res.data);
            getTodos();
        } catch (err) {
            console.log(err);
        }
    };

    const onRemove = async (id) => {
        try {
            const res = await api.delete(`/todos/${id}`);
            console.log(res);
            getTodos();
        } catch (err) {
            console.log(err);
        }
    };

    const onEdit = async () => {};

    return (
        <TodoProvider>
            <TodoTemplate>
                <MyH2>Todo List</MyH2>
                <TodoCreate createTodo={createTodo} />
                <TodoList>
                    {todos &&
                        todos.map((todo, index) => (
                            <TodoItem
                                key={todo.id}
                                id={todo.id}
                                todo={todo}
                                checked={todo.isCompleted}
                                text={todo.todo}
                                onToggle={onToggle}
                                onRemove={onRemove}
                            />
                        ))}
                </TodoList>
            </TodoTemplate>
        </TodoProvider>
    );
}

const MyH2 = styled.h2``;
