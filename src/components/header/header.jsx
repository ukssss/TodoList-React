import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Header = () => {
    return (
        <div>
            <MyH1>
                <StyledLink to="/">TodoList - React</StyledLink>
            </MyH1>
        </div>
    );
};

const MyH1 = styled.h1``;

const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 32px;
    font-weight: bold;
    color: #008000;
    margin-bottom: 20px;
`;

export default Header;
