import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    width: 100%;
    height: 48px;
    padding: 0 10px;
    box-sizing: border-box;
    margin-bottom: 16px;
    border-radius: 6px;
    background-color: ${(props) => (props.$primary ? '#f8f8f8' : '#6A24FE')};
    color: ${(props) => (props.$primary ? '#000000' : '#f8f8f8')};
`;

function Button({ children, ...restProps }) {
    return (
        <StyledButton type="button" {...restProps}>
            {children}
        </StyledButton>
    );
}

export default Button;
