import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header';

const Layout: React.FC = () => (
    <>
        <Header />
        <Outlet />
    </>
);

export default Layout;
