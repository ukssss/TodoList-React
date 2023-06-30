import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import TodoItem from '../todoItem/todoItem';

export default function TodoList({ children }) {
    return <List>{children}</List>;
}

const List = styled.ul``;
