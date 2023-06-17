import React from 'react';
import styled from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { useTodoDispatch } from '../../../context/todoContext/todoContext';

const Remove = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    &:hover {
        color: #ff6b6b;
    }
`;

const TodoItemBlock = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    &:hover {
        ${Remove} {
            opacity: 1;
        }
    }
`;
const CheckCircle = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    border: 1px solid #ced4da;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    cursor: pointer;
`;

const Text = styled.div`
    font-size: 21px;
    color: #495057;
`;

function TodoItem({ id, done, text }) {
    const dispatch = useTodoDispatch();
    const onToggle = () => dispatch({ type: 'TOGGLE', id });
    const onRemove = () => dispatch({ type: 'REMOVE', id });

    return (
        <TodoItemBlock>
            <CheckCircle done={done} onClick={onToggle}>
                {done && <MdDone />}
            </CheckCircle>
            <Text done={done}>{text}</Text>
            <Remove onClick={onRemove}>
                <MdDelete />
            </Remove>
        </TodoItemBlock>
    );
}

export default React.memo(TodoItem);
