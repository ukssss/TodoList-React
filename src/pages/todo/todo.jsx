import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import TodoForm from '../../components/todo/todoForm/todoForm';
import TodoUl from '../../components/todo/todoUl/todoUl';
import TodoList from '../../components/todo/todoList/todoList';

import axios from 'axios';

export default function Todo() {
    const navigate = useNavigate();
    const access_token = localStorage.getItem('token');

    useEffect(() => {
        if (!access_token) {
            navigate('/signin');
        }
    }, [navigate, access_token]);

    const [todo, setTodo] = useState([]);

    const getPosts = async () => {
        const posts = await axios.get(`http://localhost:8000/todos`, {
            headers: {
                Authorization: `Bearer ${access_token}`,
                'Content-Type': 'application/json',
            },
        });
        setTodo(posts.data);
    };
    getPosts();

    return (
        <TodoWrapper>
            <MyH2>Todo List</MyH2>
            <TodoForm />
            <TodoUl>
                {todo.map((el) => {
                    return <TodoList>{el.todo}</TodoList>;
                })}
            </TodoUl>
        </TodoWrapper>
    );
}

const TodoWrapper = styled.div``;
const MyH2 = styled.h2``;
