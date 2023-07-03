import React from 'react';
import Header from '../../header/header';
import { Outlet } from 'react-router-dom';
import GlobalStyle from '../../../style/globalStyle/globalStyle';

const BaseLayout = () => {
    return (
        <>
            <GlobalStyle />
            <div>
                <Header />
                <main>
                    <Outlet />
                </main>
            </div>
        </>
    );
};

export default BaseLayout;
