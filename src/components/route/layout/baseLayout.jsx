import React from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';
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
                <Footer />
            </div>
        </>
    );
};

export default BaseLayout;
