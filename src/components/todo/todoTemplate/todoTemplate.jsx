import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div``;

export default function TodoTemplate({ children }) {
    return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}
