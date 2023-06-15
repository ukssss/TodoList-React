import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Todo() {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('token');

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/signin');
        }
    }, [navigate, isLoggedIn]);

    return <div>투두 리스트의 목록 조회</div>;
}
