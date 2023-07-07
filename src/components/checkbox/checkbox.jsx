import React from 'react';
import styled from 'styled-components';

function Checkbox({ id, ...restProps }) {
    return (
        <StyledLabel htmlFor={id}>
            <StyledInput type="checkbox" id={id} name={id} {...restProps} />
        </StyledLabel>
    );
}

const StyledLabel = styled.label`
    display: flex;
    align-items: center;
    user-select: none;
`;
const StyledInput = styled.input`
    appearance: none;
    width: 1.5rem;
    height: 1.5rem;
    border: 1.5px solid gainsboro;
    border-radius: 0.35rem;

    &:checked {
        border-color: transparent;
        background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
        background-size: 100% 100%;
        background-position: 50%;
        background-repeat: no-repeat;
        background-color: limegreen;
    }
`;

export default Checkbox;
