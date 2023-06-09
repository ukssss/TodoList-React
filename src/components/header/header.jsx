import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to="/">
                <h1>원티드 프리온보딩 프론트엔드 선발과제</h1>
            </Link>
        </div>
    );
};

export default Header;
