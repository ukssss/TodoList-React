import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { DEV_ADDRESS } from '../../../api/api';

import TodoItem from '../todoItem/todoItem';

import { useTodoState } from '../../../context/todoContext';

const access_token = localStorage.getItem('token');
const url = DEV_ADDRESS;
const api = axios.create({
    baseURL: url,
    headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': `application/json`,
    },
});

export default function TodoList() {
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

    return (
        <List>
            {todos &&
                todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        checked={todo.isCompleted}
                        text={todo.todo}
                    />
                ))}
        </List>
    );
}

const List = styled.ul``;
