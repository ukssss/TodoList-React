import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    width: ${(props) => (props.width ? props.width : '100%')};
    height: 48px;
    padding: 0 10px;
    box-sizing: border-box;
    margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : '')};
    border-radius: 6px;
    border: ${(props) => (props.border ? `1px solid black` : `none`)};
    background-color: ${(props) => (props.$primary ? '#f8f8f8' : '#008000')};
    color: ${(props) => (props.$primary ? '#000000' : '#f8f8f8')};
    background-color: ${(props) => props.disabled && '#d2d2d2'};
`;

function Button({ disabled, width, marginBottom, border, children, ...restProps }) {
    return (
        <StyledButton
            type="button"
            disabled={disabled}
            width={width}
            marginBottom={marginBottom}
            border={border}
            {...restProps}
        >
            {children}
        </StyledButton>
    );
}

export default Button;
