import React, { useState } from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';
import {
    useTodoDispatch,
    useTodoNextId,
} from '../../../context/todoContext/todoContext';

const CircleButton = styled.button``;
const InsertFormPositioner = styled.div``;
const InsertForm = styled.form``;
const Input = styled.input``;

function TodoCreate() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();

    const onToggle = () => setOpen(!open);
    const onChange = (e) => setValue(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();

        dispatch({
            type: 'CREATE',
            todo: {
                id: nextId.current,
                text: value,
                done: false,
            },
        });
        setValue('');
        setOpen(false);
        nextId.current += 1;
    };

    return (
        <>
            {open && (
                <InsertFormPositioner>
                    <InsertForm onSubmit={onSubmit}>
                        <Input
                            autoFocus
                            placeholder="할 일을 입력 후, Enter 를 누르세요"
                            onChange={onChange}
                            value={value}
                        />
                    </InsertForm>
                </InsertFormPositioner>
            )}
            <CircleButton onClick={onToggle} open={open}>
                <MdAdd />
            </CircleButton>
        </>
    );
}

export default React.memo(TodoCreate);
