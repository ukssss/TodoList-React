import React from 'react';
import styled from 'styled-components';

export default function TodoTemplate({ children }) {
    return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

const TodoTemplateBlock = styled.div``;
