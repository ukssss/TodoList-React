import React from 'react';
import styled from 'styled-components';

export default function TodoTemplate({ children }) {
    return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

const TodoTemplateBlock = styled.div`
    margin: 40px auto;
    width: 520px;
    height: 520px;
    box-sizing: border-box;
`;
