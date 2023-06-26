import React from 'react';
import styled from 'styled-components';

const InsertForm = styled.form``;
const Input = styled.input``;
const InsertButton = styled.button``;

export default function TodoCreate() {
    return (
        <>
            <InsertForm>
                <Input type="text" />
                INSERTFORM
                <InsertButton />
            </InsertForm>
        </>
    );
}
