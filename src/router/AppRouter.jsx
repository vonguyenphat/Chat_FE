import {Routes, Route} from "react-router-dom";
import React from 'react';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Chat from '../pages/Chat';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/chat' element={<Chat />} />
        </Routes>
    );
};

export default AppRouter;