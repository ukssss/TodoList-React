import React from 'react';
import styled from 'styled-components';

const Label = styled.label``;

const Checkbox = styled.input``;

function LoginCheckbox({ children }) {
    return (
        <Label>
            <Checkbox type="checkbox" />
            {children}
        </Label>
    );
}

export default LoginCheckbox;
