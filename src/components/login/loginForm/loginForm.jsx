import React from 'react';
import styled from 'styled-components';

const Form = styled.form``;

function LoginForm({ children, ...restProps }) {
    return <Form>{children}</Form>;
}

export default LoginForm;
