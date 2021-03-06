import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Repository from '../pages/repository';


const Routess = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/repositories/:repository/:repository" element={<Repository />} />
        </Routes>
    </BrowserRouter>
);

export default Routess;