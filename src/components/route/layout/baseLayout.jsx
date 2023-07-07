import React from 'react';
import Header from '../../header/header';
import { Outlet } from 'react-router-dom';

const BaseLayout = () => {
    return (
        <>
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
