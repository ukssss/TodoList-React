import React from 'react';
import styled from 'styled-components';

import InputText from '../../input/inputText';
import Button from '../../button/button';

export default function TodoCreate() {
    return (
        <TodoForm>
            <InputText placeholder="할 일을 입력 후, Enter 를 누르세요" />
            <Button>추가</Button>
        </TodoForm>
    );
}

const TodoForm = styled.form``;
