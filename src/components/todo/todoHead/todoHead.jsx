import React from 'react';
import styled from 'styled-components';

const TodoHeadBlock = styled.div``;

export default function TodoHead() {
    return (
        <TodoHeadBlock>
            <h1>2023년 6월 26일</h1>
            <div className="day">월요일</div>
            <div className="tasks-left">할 일 2개 남음</div>
        </TodoHeadBlock>
    );
}
