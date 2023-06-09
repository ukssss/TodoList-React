import React from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import { Outlet } from 'react-router-dom';

const BaseLayout = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default BaseLayout;
