import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from '../../store';

type TPrivateRouteProps = {
    children?: React.ReactNode;
};

const PrivateRoute: React.FC<TPrivateRouteProps> = ({ children }) => {
    const location = useLocation();

    const { token } = useSelector((state: RootState) => state.user);    

    if (!token) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    return (
        <>{children}</>        
    );
};

export default PrivateRoute;
