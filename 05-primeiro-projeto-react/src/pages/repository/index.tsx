import React from 'react';
import { Link, Outlet } from 'react-router-dom';




const Repository: React.FC = () => {

    return (
        <div>
            <nav>
                <Link to="me">te</Link>
            </nav>
            <Outlet />
        </div>
    );

}

export default Repository;